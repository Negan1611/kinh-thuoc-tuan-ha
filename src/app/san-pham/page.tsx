'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { mockProducts, categories, Product } from '@/lib/mock-data';
import ProductCard from '@/components/products/ProductCard';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

function ProductList() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');
    const categoryParam = searchParams.get('category');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        let result = mockProducts;

        if (query) {
            const lowerQuery = query.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(lowerQuery) ||
                p.brand.toLowerCase().includes(lowerQuery)
            );
        }

        if (categoryParam) {
            result = result.filter(p => p.category === categoryParam);
        }

        setFilteredProducts(result);
    }, [query, categoryParam]);

    const title = query ? `Kết quả tìm kiếm cho "${query}"` :
        categoryParam ? categories.find(c => c.id === categoryParam)?.name || 'Sản phẩm' :
            'Tất cả sản phẩm';

    return (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-gray-500 mb-8">
                <Link href="/" className="hover:text-primary-600">Trang chủ</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="font-medium text-gray-900">Sản phẩm</span>
            </nav>

            <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                            slug={product.slug}
                            inStock={true}
                            badge={product.isNew ? 'new' : product.isSale ? 'sale' : undefined}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-lg text-gray-600">Không tìm thấy sản phẩm nào phù hợp.</p>
                </div>
            )}
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
