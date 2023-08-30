// See https://kit.svelte.dev/docs/types#app

import type { KVNamespace } from "@cloudflare/workers-types";

// for information about these interfaces
declare global {
	namespace App {
        interface Platform {
          env: {
            // COUNTER: DurableObjectNamespace;
            CFKV: KVNamespace
          };
          context: {
            waitUntil(promise: Promise<any>): void;
          };
          caches: CacheStorage & { default: Cache }
        }
    }
}

export {};
