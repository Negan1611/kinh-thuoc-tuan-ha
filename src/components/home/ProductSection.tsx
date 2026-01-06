'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCard from '@/components/products/ProductCard';
import type { Product } from '@/lib/mock-data';

interface ProductSectionProps {
    title: string;
    products: Product[];
    viewAllLink: string;
}

export default function ProductSection({ title, products, viewAllLink }: ProductSectionProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {title}
                    </h2>
                    <Link
                        href={viewAllLink}
                        className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 transition-colors"
                    >
                        Xem tất cả
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>

                {/* Products Grid with Animation */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {products.map((product) => (
                        <motion.div key={product.id} variants={item}>
                            <ProductCard
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                category={product.category}
                                inStock={true}
                                badge={product.isNew ? 'new' : product.isSale ? 'sale' : undefined}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
