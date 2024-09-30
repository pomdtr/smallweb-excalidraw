import { Hono } from "hono";
import * as path from "@std/path";
import * as http from "@std/http"
import type { Storage } from "unstorage"
import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";



export type App = {
    fetch: (req: Request) => Response | Promise<Response>;
}

export function excalidraw(storage: string | Storage): App {
    // @ts-ignore broken types
    const kv = typeof storage === "string" ? createStorage({ driver: fsLiteDriver({ base: storage }) }) : storage;


    const app = new Hono();

    app.post("/", async (c) => {
        const { json, svg } = await c.req.json();

        kv.set("drawing.excalidraw.json", json);
        kv.set("drawing.svg", svg);

        return new Response(null, {
            status: 204,
        });
    });

    app.get("/svg", async () => {
        const svg = await kv.get<string>("drawing.svg");
        if (!svg) {
            return new Response(null, {
                status: 404,
            });
        }

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
        const drawing = await kv.get<object>("drawing.excalidraw.json");
        if (!drawing) {
            return new Response(null, {
                status: 404,
            });
        }

        return Response.json(
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
