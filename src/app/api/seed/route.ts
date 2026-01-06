import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { getDB } from '@/db';
import { products } from '@/db/schema';
import { mockProducts } from '@/lib/mock-data';

export const runtime = 'edge';

export async function GET() {
    try {
        // Get D1 database from Cloudflare context
        const { env } = getRequestContext();

        // Type assertion for D1 database binding
        const DB = (env as any).DB as D1Database;

        if (!DB) {
            return NextResponse.json(
                { success: false, error: 'D1 Database not found in environment' },
                { status: 500 }
            );
        }

        const db = getDB(DB);

        // Step 1: Clear existing data
        await db.delete(products);

        // Step 2: Transform mock data to match schema
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
            images: [product.image], // Convert single image to array
            inStock: true,
        }));

        // Step 3: Insert data into database
        await db.insert(products).values(productsToInsert);

        return NextResponse.json({
            success: true,
            message: `Đã thêm ${productsToInsert.length} sản phẩm vào Database`,
            count: productsToInsert.length,
        });
    } catch (error) {
        console.error('Seed error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error',
                stack: error instanceof Error ? error.stack : undefined,
            },
            { status: 500 }
        );
    }
}
