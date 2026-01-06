import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { getDB } from '@/db';
import { products } from '@/db/schema';
import { mockProducts } from '@/lib/mock-data';

export const runtime = 'edge';

export async function GET() {
    try {
        console.log('Step 1: Getting request context...');

        // Get D1 database from Cloudflare context
        let env;
        try {
            const context = getRequestContext();
            env = context.env;
            console.log('Step 2: Got context, env exists:', !!env);
        } catch (ctxError) {
            console.error('Context error:', ctxError);
            return NextResponse.json(
                {
                    success: false,
                    error: 'Failed to get request context',
                    details: ctxError instanceof Error ? ctxError.message : String(ctxError)
                },
                { status: 500 }
            );
        }

        // Type assertion for D1 database binding
        const DB = (env as any).DB as D1Database;
        console.log('Step 3: DB exists:', !!DB);

        if (!DB) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'D1 Database not found in environment',
                    hint: 'Please bind D1 database in Cloudflare Pages Settings → Functions → D1 database bindings'
                },
                { status: 500 }
            );
        }

        console.log('Step 4: Initializing Drizzle ORM...');
        const db = getDB(DB);

        console.log('Step 5: Deleting existing products...');
        // Step 1: Clear existing data
        await db.delete(products);

        console.log('Step 6: Preparing data to insert...');
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

        console.log(`Step 7: Inserting ${productsToInsert.length} products...`);
        // Step 3: Insert data into database
        await db.insert(products).values(productsToInsert);

        console.log('Step 8: Success!');
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
                type: error instanceof Error ? error.constructor.name : typeof error,
            },
            { status: 500 }
        );
    }
}
