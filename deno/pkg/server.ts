import * as path from "@std/path";
import { Hono } from "hono";
import * as fs from "@std/fs"
import manifest from "../deno.json" with { type: "json" };
import { serveDir } from "@std/http/file-server";

export function createServer(rootDir: string) {
    const jsonPath = path.join(rootDir, "drawing.excalidraw.json");
    const svgPath = path.join(rootDir, "drawing.svg");
    return new Hono()
        .post("/", async (c) => {
            const { json, svg } = await c.req.json();

            await fs.ensureDir(rootDir);
            await Deno.writeTextFile(jsonPath, json);
            await Deno.writeTextFile(svgPath, svg);

            return new Response(null, {
                status: 204,
            });
        })
        .get("/svg", async () => {
            if (!svgPath) {
                return new Response(null, {
                    status: 404,
                });
            }

            const svg = await Deno.readTextFile(svgPath);
            return new Response(
                svg,
                {
                    headers: {
                        "Content-Type": "image/svg+xml",
                    },
                },
            );
        })
        .get("/json", async () => {
            if (!fs.existsSync(jsonPath)) {
                return new Response(null, {
                    status: 404,
                });
            }

            const drawing = await Deno.readTextFile(jsonPath);
            return new Response(
                drawing,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
        })
        .get("*", async (c) => {
            if (import.meta.dirname) {
                return serveDir(c.req.raw, {
                    fsRoot: path.join(import.meta.dirname, "static"),
                });
            }

            const pathname = c.req.path == "/" ? "/index.html" : c.req.path;
            const target = `https://raw.esm.sh/jsr/${manifest.name}@${manifest.version}/pkg/static${pathname}`
            const req = new Request(target, c.req.raw)

            const cache = await caches.open("excalidraw");
            const cached = await cache.match(req);
            if (cached) {
                return cached;
            }

            const res = await fetch(req);
            if (res.ok) {
                cache.put(req, res.clone());
            }

            return res;
        })
}


