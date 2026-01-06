/// <reference types="@cloudflare/workers-types" />

// Cloudflare D1 Database Binding
declare module '@cloudflare/next-on-pages' {
    interface CloudflareEnv {
        DB: D1Database;
    }
}

// Next.js Environment Variables
declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_SITE_URL?: string;
        CLOUDFLARE_ACCOUNT_ID: string;
        CLOUDFLARE_D1_ID: string;
        CLOUDFLARE_API_TOKEN: string;
    }
}

export { };
