import { drizzle } from 'drizzle-orm/d1';
import { createClient } from '@libsql/client';
import * as schema from './src/db/schema';
import { mockProducts } from './src/lib/mock-data';

/**
 * Seed script for D1 Database
 * Run with: npm run seed
 */

async function seed() {
    try {
        console.log('🌱 Starting database seed...');

        // Connect to local D1 database via wrangler
        // This uses the local SQLite file created by wrangler
        const client = createClient({
            url: 'file:.wrangler/state/v3/d1/miniflare-D1DatabaseObject/fb903c1a51b2466f8c09355598194777.sqlite',
        });

        const db = drizzle(client, { schema });

        console.log('📦 Connected to database');

        // Step 1: Clear existing data
        console.log('🗑️  Clearing existing products...');
        await db.delete(schema.products);

        // Step 2: Transform mock data to match schema
        console.log('🔄 Preparing product data...');
        const productsToInsert = mockProducts.map((product) => ({
            name: product.name,
            slug: product.slug,
            price: product.price,
            category: product.category,
            attributes: {
                brand: product.brand,
                originalPrice: product.originalPrice,
                isNew: product.isNew,
                isSale: product.isSale,
                discount: product.discount,
            },
            images: [product.image],
            inStock: true,
        }));

        // Step 3: Insert data
        console.log(`✨ Inserting ${productsToInsert.length} products...`);
        await db.insert(schema.products).values(productsToInsert);

        console.log('✅ Database seeded successfully!');
        console.log(`📊 Total products: ${productsToInsert.length}`);

        client.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Seed failed:', error);
        process.exit(1);
    }
}

seed();
