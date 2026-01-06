'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/products/ProductCard';

interface ProductListClientProps {
    products: any[];
    categories: any[];
}

export default function ProductListClient({ products, categories }: ProductListClientProps) {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');
    const categoryParam = searchParams.get('category');
    const [filteredProducts, setFilteredProducts] = useState<any[]>(products);

    useEffect(() => {
        let result = products;

        if (query) {
            const lowerQuery = query.toLowerCase();
            result = result.filter((p: any) =>
                p.name.toLowerCase().includes(lowerQuery) ||
                p.attributes?.brand?.toLowerCase().includes(lowerQuery)
            );
        }

        if (categoryParam) {
            result = result.filter((p: any) => p.category === categoryParam);
        }

        setFilteredProducts(result);
    }, [query, categoryParam, products]);

    const title = query ? `Kết quả tìm kiếm cho "${query}"` :
        categoryParam ? categories.find((c: any) => c.id === categoryParam)?.name || 'Sản phẩm' :
            'Tất cả sản phẩm';

    return (
        <>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>

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
                    <p className="text-lg text-gray-600">Không tìm thấy sản phẩm nào phù hợp.</p>
                </div>
            )}
        </>
    );
}
