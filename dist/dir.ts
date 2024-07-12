import { decodeBase64 } from "jsr:@std/encoding@1.0.1/base64";
import { extname } from "jsr:@std/path@1.0.0";
import { contentType } from "jsr:@std/media-types@1.0.0";

const decoder = new TextDecoder();

/**
 * Represents the contents of a file that's been embedded into TypeScript.
 */
export class File {
    /** Size of the embedded file in bytes (uncomrpessed/unencoded) */
    readonly size: number;

    /** May be compressed */
    #contents: {
        bytes: Uint8Array;
        compression: CompressionFormat | undefined;
    };

    /** Called (indirectly) by each embedded file. */
    constructor(meta: FileMeta) {
        this.size = meta.size;
        // We now use dynamic imports, so we're specifically importing this file due to a request.
        // Eagerly decode base64 into bytes so we can GC the inefficient encoding.
        this.#contents = {
            bytes: decodeBase64(meta.encoded),
            compression: meta.compression,
        };
    }

    /** Returns the raw bytes of the embedded file. */
    async bytes(): Promise<Uint8Array> {
        let { bytes, compression } = this.#contents;

        // Decompress on first use:
        if (compression) {
            bytes = await decompress(bytes, compression);
            compression = undefined;
            this.#contents = { bytes, compression };
        }

        return bytes;
    }

    /**
     * Parse the bytes as utf-8 text.
     */
    async text(): Promise<string> {
        if (this.#cachedText === undefined) {
            this.#cachedText = decoder.decode(await this.bytes());
        }
        return this.#cachedText;
    }
    #cachedText: undefined | string = undefined;
}

/**
 * The data we expect to find generated embedded files.
 */
export interface FileMeta {
    /** Size of the embedded file (uncomrpessed/unencoded) */
    size: number;

    /**
     * The base-64 encoded representation of the file.
     *
     * Note: One benefit of passing this to a TypeScript function/object is that
     * we can immediately decode it, and save on 33% of the base64 encoding cost
     * in memory. (after GC)
     */
    encoded: string;

    /** If specified, how the bytes of this file are compressed. */
    compression?: CompressionFormat;

    // TODO: sha256, modified time, etc.
}

/** Valid compression formats for embedded files. */
export type CompressionFormat = ConstructorParameters<
    typeof DecompressionStream
>[0];

async function decompress(
    data: Uint8Array,
    compression: CompressionFormat,
): Promise<Uint8Array> {
    const input = new Blob([data]);
    const ds = new DecompressionStream(compression);
    const stream = input.stream().pipeThrough(ds);

    const outParts: Uint8Array[] = [];
    const writer = new WritableStream<Uint8Array>({
        write(chunk) {
            outParts.push(chunk);
        },
    });

    await stream.pipeTo(writer);

    const buf = await new Blob(outParts).arrayBuffer();
    return new Uint8Array(buf);
}

export type FileModule = { default: FileMeta };

/** A function that we can call to import a file module. */
export type FileImporter = () => Promise<FileModule>;

/** We expect the embed file to pass this into Embeds. */
export type EmbedsDef<K extends string> = Record<K, FileImporter>;

/**
 * Allows accessing all files embedded.
 *
 * Each `dir.ts` in your Mapping `destDir` exposes an instance
 * of this class as its default export.
 */
export class Embeds<K extends string = string> {
    #embeds: EmbedsDef<K>;

    /**
     * Called (indirectly) by a `dir.ts` file to register its contents.
     */
    constructor(embeds: EmbedsDef<K>) {
        this.#embeds = embeds;
    }

    /**
     * Returns a list of embed file keys.
     *
     * This method can be used to retrieve the keys of the embed files for
     * iteration or other purposes.
     */
    list(): Array<K> {
        return Object.keys(this.#embeds) as Array<K>;
    }

    /**
     * Type-safe method to load a known embed file.
     *
     * If you know you need a particular embed at compile time, using this method
     * lets TypeScript check that you have specified a correct (existing) file
     * path.
     */
    async load(filePath: K): Promise<File> {
        const importer = this.#embeds[filePath];
        const mod = await importer();
        return new File(mod.default);
    }

    /**
     * Method to do runtime loading of a file.
     *
     * If you're loading user-specified file paths, use this method. It will
     * return `null` if no such file exists.
     */
    async get(filePath: string): Promise<File | null> {
        const importer = this.#embeds[filePath as K];
        if (!importer) return null;

        const mod = await importer();
        return new File(mod.default);
    }
}

/** Interface for serveDir options. */
export interface ServeDirOptions {
    //   /** Specified that part is stripped from the beginning of the requested pathname.
    //    */
    //   urlRoot?: string;
    //   /** Enable directory listing.
    //    *
    //    * @default {false}
    //    */
    //   showDirListing?: boolean;
    //   /** Serves dotfiles.
    //    *
    //    * @default {false}
    //    */
    //   showDotfiles?: boolean;
    //   /** Serves `index.html` as the index file of the directory.
    //    *
    //    * @default {true}
    //    */
    //   showIndex?: boolean;
    //   /**
    //    * Enable CORS via the
    //    * {@linkcode https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin | Access-Control-Allow-Origin}
    //    * header.
    //    *
    //    * @default {false}
    //    */
    //   enableCors?: boolean;
    //   /** Do not print request level logs.
    //    *
    //    * @default {false}
    //    */
    //   quiet?: boolean;
    //   /** The algorithm to use for generating the ETag.
    //    *
    //    * @default {"SHA-256"}
    //    */
    //   etagAlgorithm?: AlgorithmIdentifier;
    /** Headers to add to each response
     *
     * @default {{}}
     */
    headers?: Record<string, string>;
}

export async function serveDir(
    req: Request,
    options: ServeDirOptions = {},
): Promise<Response> {
    let { pathname } = new URL(req.url);
    if (pathname.endsWith("/")) {
        pathname += "index.html";
    }

    const file = await embeds.get(pathname.slice(1));
    if (!file) {
        return new Response("Not found", { status: 404 });
    }

    const type = contentType(extname(pathname)) || "application/octet-stream";

    return new Response(await file.bytes(), {
        headers: {
            "Content-Type": type,
            ...options.headers,
        },
    });
}

const embeds = new Embeds({
  "assets/index-BPvgi06w.css": () => import("./assets/_index-BPvgi06w.css.ts"),
  "assets/index-DFoV5MJx.js": () => import("./assets/_index-DFoV5MJx.js.ts"),
  "index.html": () => import("./_index.html.ts"),
});

export default embeds;