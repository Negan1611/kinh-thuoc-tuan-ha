'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/mock-data';
import ProductCard from '@/components/products/ProductCard';

interface ProductCategorySectionProps {
    title: string;
    subCategories: { name: string; slug: string }[];
    products: Product[];
    categorySlug: string;
}

export default function ProductCategorySection({
    title,
    subCategories,
    products,
    categorySlug
}: ProductCategorySectionProps) {
    const [activeFilter, setActiveFilter] = useState<string>('all');

    // Filter products based on active sub-category
    // Tạm thời hiển thị tất cả products vì chưa có subCategory field
    const filteredProducts = products;

    return (
        <section className="py-12 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-600 uppercase relative">
                        {title}
                        <span className="absolute -bottom-2.5 left-0 w-full h-[2px] bg-primary-600"></span>
                    </h2>
                    <Link
                        href={`/danh-muc/${categorySlug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1"
                    >
                        <span>Xem thêm</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Sub-Category Filters */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setActiveFilter('all')}
                        className={`px-4 py-2 rounded-full font-medium transition-colors ${activeFilter === 'all'
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        Tất cả
                    </button>
                    {subCategories.map((sub) => (
                        <button
                            key={sub.slug}
                            onClick={() => setActiveFilter(sub.slug)}
                            className={`px-4 py-2 rounded-full font-medium transition-colors ${activeFilter === sub.slug
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {sub.name}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {filteredProducts.slice(0, 8).map((product) => {
                        // Convert Product to ProductCard props
                        let badge: 'new' | 'sale' | 'out-of-stock' | undefined;
                        if (product.isNew) badge = 'new';
                        else if (product.isSale) badge = 'sale';

                        return (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                category={product.category}
                                inStock={true}
                                badge={badge}
                            />
                        );
                    })}
                </div>

                {/* View All Button - Mobile */}
                <div className="mt-8 text-center md:hidden">
                    <Link
                        href={`/danh-muc/${categorySlug}`}
                        className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Xem tất cả
                    </Link>
                </div>
            </div>
        </section>
    );
}
