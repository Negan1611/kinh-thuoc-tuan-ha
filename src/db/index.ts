import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

/**
 * Get Drizzle DB instance for Cloudflare D1
 * This will be used in API routes and server components
 */
export function getDB(d1: D1Database) {
    return drizzle(d1, { schema });
}

export type DB = ReturnType<typeof getDB>;
