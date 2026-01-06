import { NextResponse } from 'next/server';
import { mockProducts } from '@/lib/mock-data';

export const runtime = 'edge';

export async function GET() {
    try {
        // For now, just return the data that would be inserted
        // We'll add D1 integration after verifying the route works

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

        return NextResponse.json({
            success: true,
            message: `Ready to insert ${productsToInsert.length} products`,
            count: productsToInsert.length,
            note: 'D1 integration temporarily disabled for testing',
            sample: productsToInsert.slice(0, 2), // Show first 2 products as sample
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
