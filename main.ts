import { createExcalidraw } from "./mod.ts";
import { LocalStore } from "./store.ts";

const excalidraw = createExcalidraw({
    store: new LocalStore("blobs"),
});

export default {
    fetch: excalidraw,
};
