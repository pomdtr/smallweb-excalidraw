import { serveDir } from "./file_server.ts";
import dir from "./dist/dir.ts";
import { Hono } from "jsr:@hono/hono@4.4.8";
import { decodeBase64 } from "jsr:@std/encoding@0.224.0/base64";

export type RequestHandler = (req: Request) => Response | Promise<Response>;

export type AppParams = {
    urlRoot?: string;
    get: (key: string) => Promise<Uint8Array | null>;
    set: (key: string, value: Uint8Array) => Promise<void>;
};

const keys = {
    json: "drawing.excalidraw.json",
    png: "drawing.png",
    svg: "drawing.svg",
};

export function createExcalidraw(params: AppParams): RequestHandler {
    return (req: Request) => {
        const app = new Hono();

        if (params.urlRoot) {
            app.basePath(params.urlRoot);
        }

        app.post("/", async (c) => {
            const { json, png, svg } = await c.req.json();

            const jsonBytes = new TextEncoder().encode(json);
            await params.set(keys.json, jsonBytes);
            const pngBytes = decodeBase64(png);
            await params.set(keys.png, pngBytes);
            const svgBytes = new TextEncoder().encode(svg);
            await params.set(keys.svg, svgBytes);

            return c.json(null, 204);
        });

        app.get("/png", async () => {
            return new Response(await params.get(keys.png), {
                headers: {
                    "Content-Type": "image/png",
                },
            });
        });

        app.get("/svg", async () => {
            return new Response(await params.get(keys.svg), {
                headers: {
                    "Content-Type": "image/svg+xml",
                },
            });
        });

        app.get("/json", async () => {
            return new Response(await params.get(keys.json), {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        });

        app.get("/*", (c) => {
            return serveDir(c.req.raw, {
                urlRoot: params.urlRoot,
                dir,
            });
        });

        return app.fetch(req);
    };
}
