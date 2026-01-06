// Cloudflare Environment Interface
interface CloudflareEnv {
    DB: D1Database;
}

// Extend Next.js request with Cloudflare bindings
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLOUDFLARE_ACCOUNT_ID: string;
            CLOUDFLARE_D1_ID: string;
            CLOUDFLARE_API_TOKEN: string;
        }
    }
}

export { };
