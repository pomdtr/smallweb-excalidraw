import { Hono } from "hono";
import { decodeBase64 } from "@std/encoding";
import * as path from "@std/path";
import * as fs from "@std/fs"
import * as http from "@std/http"
import manifest from "./deno.json" with { type: "json" }

const keys = {
    json: "drawing.excalidraw.json",
    png: "drawing.png",
    svg: "drawing.svg",
};

export function excalidraw(rootDir: string): (req: Request) => Response | Promise<Response> {
    const app = new Hono();

    app.post("/", async (c) => {
        const { json, png, svg } = await c.req.json();

        const jsonBytes = new TextEncoder().encode(json);
        await Deno.writeFile(path.join(rootDir, keys.json), jsonBytes);
        const pngBytes = decodeBase64(png);
        await Deno.writeFile(path.join(rootDir, keys.png), pngBytes);
        const svgBytes = new TextEncoder().encode(svg);
        await Deno.writeFile(path.join(rootDir, keys.svg), svgBytes);

        return new Response(null, {
            status: 204,
        });
    });

    app.get("/png", async () => {
        return new Response(
            await Deno.readFile(path.join(rootDir, keys.png)),
            {
                headers: {
                    "Content-Type": "image/png",
                },
            },
        );
    });

    app.get("/svg", async () => {
        return new Response(
            await Deno.readFile(path.join(rootDir, keys.svg)),
            {
                headers: {
                    "Content-Type": "image/svg+xml",
                },
            },
        );
    });

    app.get("/json", async () => {
        if (!await fs.exists(path.join(rootDir, keys.json))) {
            return new Response(null, {
                status: 204,
            });
        }

        return new Response(
            await Deno.readFile(path.join(rootDir, keys.json)),
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
    });

    app.get("*", async (c) => {
        const filepath = path.join("frontend/dist", c.req.path === "/" ? "index.html" : c.req.path.slice(1))

        // Serve local files in development
        if (import.meta.filename) {
            return http.serveFile(c.req.raw, filepath)
        }

        // else fetch from jsr and cache
        const req = new Request(`https://jsr.io/${manifest.name}/${manifest.version}/${filepath}`)
        const cache = await caches.open("jsr")
        const cached = await cache.match(req)
        if (cached) {
            return new Response(cached.body, {
                headers: {
                    "Content-Type": cached.headers.get("Content-Type") || "text/plain",
                }
            })
        }

        const resp = await fetch(req)
        if (!resp.ok) {
            return new Response("failed to fetch asset from jsr", {
                status: http.STATUS_CODE.InternalServerError,
            })
        }

        await cache.put(req, resp.clone())
        return new Response(resp.body, {
            headers: {
                "Content-Type": resp.headers.get("Content-Type") || "text/plain",
            }
        })
    });

    return app.fetch;
}
