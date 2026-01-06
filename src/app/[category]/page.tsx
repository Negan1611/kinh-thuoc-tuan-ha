import { categories } from '@/lib/mock-data';
import { getProductsByCategory } from '@/lib/db-client';
import ProductCard from '@/components/products/ProductCard';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category: categorySlug } = await params;
    const category = categories.find((c) => c.id === categorySlug);

    if (!category) {
        notFound();
    }

    // Fetch products from D1
    let filteredProducts: any[] = [];
    try {
        filteredProducts = await getProductsByCategory(categorySlug);
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-primary-600">Trang chủ</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="font-medium text-gray-900">{category.name}</span>
                </nav>

                {/* Banner / Header */}
                <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg bg-primary-900 aspect-[3/1] md:aspect-[5/1]">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 opacity-90" />
                    <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">{category.name}</h1>
                        <p className="text-sm md:text-lg lg:text-xl text-primary-100 max-w-2xl">{category.description}</p>
                    </div>
                </div>

                {/* Filters Row */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                    <p className="text-gray-600">Hiển thị {filteredProducts.length} sản phẩm</p>
                    <div className="flex gap-2">
                        <select className="border-gray-300 rounded-md text-sm p-2 bg-white border outline-none focus:ring-2 focus:ring-primary-500">
                            <option>Mới nhất</option>
                            <option>Giá tăng dần</option>
                            <option>Giá giảm dần</option>
                        </select>
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product: any) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.images?.[0] || '/placeholder.jpg'}
                                category={product.category}
                                slug={product.slug}
                                inStock={product.inStock}
                                badge={product.attributes?.isNew ? 'new' : product.attributes?.isSale ? 'sale' : undefined}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-lg text-gray-600">Đang cập nhật sản phẩm...</p>
                    </div>
                )}
            </div>
        </div>
    );
}
