import { getRequestContext } from '@cloudflare/next-on-pages';
import { eq, like } from 'drizzle-orm';
import { getDB } from '@/db';
import { products } from '@/db/schema';

/**
 * Get D1 database instance for Server Components
 * Uses getRequestContext from @cloudflare/next-on-pages
 */
export function getD1Database() {
    try {
        const { env } = getRequestContext();
        const DB = (env as any).DB as D1Database;

        if (!DB) {
            throw new Error('D1 Database not found in environment');
        }

        return getDB(DB);
    } catch (error) {
        console.error('Failed to get D1 database:', error);
        throw error;
    }
}

/**
 * Fetch all products from D1
 */
export async function getAllProducts() {
    const db = getD1Database();
    return await db.select().from(products);
}

/**
 * Fetch products by category
 */
export async function getProductsByCategory(category: string) {
    const db = getD1Database();
    return await db.select().from(products).where(eq(products.category, category));
}

/**
 * Fetch product by slug
 */
export async function getProductBySlug(slug: string) {
    const db = getD1Database();
    const result = await db.select().from(products).where(eq(products.slug, slug)).limit(1);
    return result[0] || null;
}

/**
 * Search products by name
 */
export async function searchProducts(query: string) {
    const db = getD1Database();
    return await db.select().from(products).where(like(products.name, `%${query}%`));
}
