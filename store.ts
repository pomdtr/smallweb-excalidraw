import { join } from "jsr:@std/path@0.225.0/join";
import { exists } from "jsr:@std/fs@0.229.0/exists";

export class LocalStore {
    public basePath: string;
    constructor(basePath: string = ".") {
        this.basePath = join(Deno.cwd(), basePath);
    }

    async get(key: string): Promise<Uint8Array | null> {
        try {
            return await Deno.readFile(join(this.basePath, key));
        } catch (_e) {
            return null;
        }
    }

    async set(key: string, data: Uint8Array): Promise<void> {
        if (!await exists(this.basePath)) {
            await Deno.mkdir(this.basePath);
        }

        Deno.writeFileSync(join("blobs", key), data);
    }
}
