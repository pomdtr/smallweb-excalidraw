import * as path from "@std/path";
import { Hono } from "hono";
import * as fs from "@std/fs"
import { serveStatic } from "hono/deno"

export type ExcalidrawOptions = {
    rootDir?: string;
}

export class Excalidraw {
    private server

    constructor({ rootDir = "./data" }: ExcalidrawOptions = {}) {
        const jsonPath = path.join(rootDir, "drawing.excalidraw.json");
        const svgPath = path.join(rootDir, "drawing.svg");

        this.server = new Hono()
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
            .get("*", serveStatic({
                root: "./static",
            }))
    }

    fetch: (req: Request) => Response | Promise<Response> = (req) => this.server.fetch(req)
}

