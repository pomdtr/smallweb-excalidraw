import { exists } from "jsr:@std/fs@0.229.0/exists";
import { createExcalidraw } from "./mod.ts";
import { join } from "jsr:@std/path@0.225.0/join";

const excalidraw = createExcalidraw({
    store: {
        get: async (key: string) => {
            try {
                return await Deno.readFile(join("blobs", key));
            } catch (_e) {
                return null;
            }
        },
        set: async (key, data) => {
            if (!await exists("./blobs")) {
                await Deno.mkdir("./blobs");
            }

            Deno.writeFileSync(join("blobs", key), data);
        },
    },
});

export default {
    fetch: excalidraw,
};
