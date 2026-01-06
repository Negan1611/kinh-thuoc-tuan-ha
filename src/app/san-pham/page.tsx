import { Suspense } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { getAllProducts } from '@/lib/db-client';
import { categories } from '@/lib/mock-data';
import ProductListClient from '@/components/products/ProductListClient';

export const runtime = 'edge';

async function ProductList() {
    // Fetch all products from D1
    let products: any[] = [];
    try {
        products = await getAllProducts();
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }

    return (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-gray-500 mb-8">
                <Link href="/" className="hover:text-primary-600">Trang chủ</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="font-medium text-gray-900">Sản phẩm</span>
            </nav>

            {/* Client-side filtering component */}
            <ProductListClient products={products} categories={categories} />
        </div>
    );
}

export default function ProductsPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Suspense fallback={<div className="text-center py-20">Đang tải...</div>}>
                <ProductList />
            </Suspense>
        </div>
    );
}
