import { join } from "jsr:@std/path";
import { Excalidraw } from "./mod.ts";

const excalidraw = new Excalidraw({
    read(key) {
        return Deno.readFile(join("blobs", key));
    },
    write(key, value) {
        return Deno.writeFile(join("blobs", key), value);
    },
});

export default excalidraw;
