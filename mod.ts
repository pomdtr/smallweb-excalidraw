import { Hono } from "hono";
import * as path from "@std/path";
import * as http from "@std/http"
import * as fs from "@std/fs"



export type App = {
    fetch: (req: Request) => Response | Promise<Response>;
}

export function excalidraw(rootDir: string): App {
    const app = new Hono();
    const jsonPath = path.join(rootDir, "drawing.excalidraw.json");
    const svgPath = path.join(rootDir, "drawing.svg");

    app.post("/", async (c) => {
        const { json, svg } = await c.req.json();

        await fs.ensureDir(rootDir);
        await Deno.writeTextFile(jsonPath, json);
        await Deno.writeTextFile(svgPath, svg);

        return new Response(null, {
            status: 204,
        });
    });

    app.get("/svg", async () => {
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
    });

    app.get("/json", async () => {
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
    });

    app.get("*", async (c) => {
        const filepath = path.join("frontend/dist", c.req.path === "/" ? "index.html" : c.req.path.slice(1))

        // Serve local files in development
        if (import.meta.filename) {
            return http.serveFile(c.req.raw, filepath)
        }

        const req = new Request(new URL(filepath, import.meta.url))
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

    return app;
}
