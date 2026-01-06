import { mockProducts, categories, Product } from '@/lib/mock-data';
import ProductCard from '@/components/products/ProductCard';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return categories.map((category) => ({
        category: category.id,
    }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category: categorySlug } = await params;
    const category = categories.find((c) => c.id === categorySlug);

    if (!category) {
        notFound();
    }

    const filteredProducts = mockProducts.filter((p) => p.category === categorySlug);

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
                    {/* Placeholder background since we don't have real category banners yet */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 opacity-90" />
                    <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">{category.name}</h1>
                        <p className="text-sm md:text-lg lg:text-xl text-primary-100 max-w-2xl">{category.description}</p>
                    </div>
                </div>

                {/* Filters Row (Simple implementation) */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                    <p className="text-gray-600">Hiển thị {filteredProducts.length} sản phẩm</p>
                    {/* Placeholder for complex filters */}
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
                    <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                        <p className="text-xl text-gray-500">Chưa có sản phẩm nào trong danh mục này.</p>
                        <Link href="/" className="text-primary-600 hover:underline mt-2 inline-block">
                            Quay về trang chủ
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
