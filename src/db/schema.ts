import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

/**
 * Products Table
 * Stores all optical products (glasses, lenses, accessories)
 */
export const products = sqliteTable('products', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    slug: text('slug').unique().notNull(),
    price: integer('price').notNull(), // Price in VND
    category: text('category').notNull(), // GONG_KINH, TRONG_KINH, PHU_KIEN
    attributes: text('attributes', { mode: 'json' }).$type<{
        brand?: string;
        shape?: string;
        material?: string;
        color?: string;
        [key: string]: any;
    }>(),
    images: text('images', { mode: 'json' }).$type<string[]>(),
    inStock: integer('in_stock', { mode: 'boolean' }).default(true),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

/**
 * Orders Table
 * Stores customer orders
 */
export const orders = sqliteTable('orders', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    customerName: text('customer_name').notNull(),
    customerPhone: text('customer_phone').notNull(),
    items: text('items', { mode: 'json' }).$type<Array<{
        productId: number;
        productName: string;
        quantity: number;
        price: number;
    }>>().notNull(),
    totalPrice: integer('total_price').notNull(),
    status: text('status').default('PENDING'), // PENDING, CONFIRMED, COMPLETED, CANCELLED
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// Export types for TypeScript
export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;
