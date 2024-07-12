import { serveDir } from "./file_server.ts";
import { Hono } from "jsr:@hono/hono@4.4.8";
import { decodeBase64 } from "jsr:@std/encoding@0.224.0/base64";

const keys = {
    json: "drawing.excalidraw.json",
    png: "drawing.png",
    svg: "drawing.svg",
};

export type RequestHandler = (req: Request) => Response | Promise<Response>;

export type ExcalidrawParams = {
    read: (key: string) => Promise<Uint8Array | null>;
    write: (key: string, value: Uint8Array) => Promise<void>;
};

export class Excalidraw {
    constructor(private params: ExcalidrawParams) {}
    fetch = (req: Request) => {
        const app = new Hono();

        app.post("/", async (c) => {
            const { json, png, svg } = await c.req.json();

            const jsonBytes = new TextEncoder().encode(json);
            await this.params.write(keys.json, jsonBytes);
            const pngBytes = decodeBase64(png);
            await this.params.write(keys.png, pngBytes);
            const svgBytes = new TextEncoder().encode(svg);
            await this.params.write(keys.svg, svgBytes);

            return new Response(null, {
                status: 204,
            });
        });

        app.get("/png", async () => {
            return new Response(await this.params.read(keys.png), {
                headers: {
                    "Content-Type": "image/png",
                },
            });
        });

        app.get("/svg", async () => {
            return new Response(await this.params.read(keys.svg), {
                headers: {
                    "Content-Type": "image/svg+xml",
                },
            });
        });

        app.get("/json", async () => {
            return new Response(await this.params.read(keys.json), {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        });

        app.get("/*", (c) => {
            return serveDir(c.req.raw, {
                fsRoot: import.meta.resolve("./frontend/dist"),
            });
        });

        return app.fetch(req);
    };
}
