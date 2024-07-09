import { extname } from "jsr:@std/path@^0.225.0/extname";
import { contentType } from "jsr:@std/media-types@^0.224.1";
import { importBlob } from "jsr:@jollytoad/import-content@1.1.0";

import manifest from "./deno.json" with { type: "json" };
import {
    serveDir as serveLocalDir,
    type ServeDirOptions,
} from "jsr:@std/http@1.0.0-rc.3/file-server";

export async function serveDir(
    req: Request,
    options: ServeDirOptions = {},
): Promise<Response> {
    const isLocal = import.meta.url.startsWith("file://");
    if (isLocal) {
        return serveLocalDir(req, options);
    }

    const url = new URL(req.url);
    let pathname = url.pathname;
    if (pathname.endsWith("/")) {
        pathname += "index.html";
    }

    if (options.urlRoot) {
        let urlRoot = options.urlRoot;
        if (!urlRoot.startsWith("/")) {
            urlRoot = "/" + urlRoot;
        }

        if (!pathname.startsWith(urlRoot)) {
            return new Response("Not found", { status: 404 });
        }
        pathname = pathname.slice(urlRoot.length);
    }

    const src = "https://jsr.io/" + manifest.name + pathname;
    const body = await importBlob(src);

    const headers = new Headers();
    headers.set(
        "Content-Type",
        contentType(extname(pathname)) || "application/octet-stream",
    );

    for (const header of options.headers || []) {
        headers.set(header[0], header[1]);
    }

    return new Response(body, {
        headers,
    });
}
