import {E} from "jsr:@nfnitloop/deno-embedder@1.4.7/embed.ts"

export default E({
  "assets/index-BPvgi06w.css": () => import("./assets/_index-BPvgi06w.css.ts"),
  "assets/index-DFoV5MJx.js": () => import("./assets/_index-DFoV5MJx.js.ts"),
  "index.html": () => import("./_index.html.ts"),
})
