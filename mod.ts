import { Hono } from "jsr:@hono/hono@4.4.8";
import { decodeBase64 } from "jsr:@std/encoding@1.0.1";
import manifest from "./deno.json" with { type: "json" };
import { join } from "jsr:@std/path@1.0.0/join";

const keys = {
    json: "drawing.excalidraw.json",
    png: "drawing.png",
    svg: "drawing.svg",
};

export type ExcalidrawParams = {
    read: (key: string) => Promise<Uint8Array | null>;
    write: (key: string, value: Uint8Array) => Promise<void>;
};

export class Excalidraw {
    constructor(public rootDir: string) {
    }
    fetch = (req: Request): Response | Promise<Response> => {
        const app = new Hono();

        app.post("/", async (c) => {
            const { json, png, svg } = await c.req.json();

            const jsonBytes = new TextEncoder().encode(json);
            await Deno.writeFile(join(this.rootDir, keys.json), jsonBytes);
            const pngBytes = decodeBase64(png);
            await Deno.writeFile(join(this.rootDir, keys.png), pngBytes);
            const svgBytes = new TextEncoder().encode(svg);
            await Deno.writeFile(join(this.rootDir, keys.svg), svgBytes);

            return new Response(null, {
                status: 204,
            });
        });

        app.get("/png", async () => {
            return new Response(
                await Deno.readFile(join(this.rootDir, keys.png)),
                {
                    headers: {
                        "Content-Type": "image/png",
                    },
                },
            );
        });

        app.get("/svg", async () => {
            return new Response(
                await Deno.readFile(join(this.rootDir, keys.svg)),
                {
                    headers: {
                        "Content-Type": "image/svg+xml",
                    },
                },
            );
        });

        app.get("/json", async () => {
            return new Response(
                await Deno.readFile(join(this.rootDir, keys.json)),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
        });

        app.get("*", async (c) => {
            const filepath = c.req.path === "/" ? "index.html" : c.req.path.slice(1);
            const url = `https://raw.esm.sh/jsr/${manifest.name}@${manifest.version}/frontend/dist/${filepath}`
            const resp = await fetch(url);
            if (!resp.ok) {
                return new Response(null, {
                    status: 404,
                });
            }

            const html = await resp.text();
            return new Response(html, {
                headers: resp.headers
            });
        });

        return app.fetch(req);
    };
}
