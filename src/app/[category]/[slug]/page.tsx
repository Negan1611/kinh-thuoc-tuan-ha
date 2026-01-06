import { getProductBySlug, getProductsByCategory } from '@/lib/db-client';
import ProductCard from '@/components/products/ProductCard';
import { ChevronRight, ShoppingCart, Truck, ShieldCheck, Phone } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

export default async function ProductDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
    const { category, slug } = await params;

    // Find product by slug from D1
    let product: any = null;
    try {
        product = await getProductBySlug(slug);
    } catch (error) {
        console.error('Failed to fetch product:', error);
    }

    if (!product) {
        notFound();
    }

    // Related products (same category, excluding current)
    let relatedProducts: any[] = [];
    try {
        const categoryProducts = await getProductsByCategory(product.category);
        relatedProducts = categoryProducts.filter((p: any) => p.id !== product.id).slice(0, 4);
    } catch (error) {
        console.error('Failed to fetch related products:', error);
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(price);
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-primary-600">Trang chủ</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <Link href="/san-pham" className="hover:text-primary-600">Sản phẩm</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <Link href={`/${category}`} className="hover:text-primary-600 capitalize">
                        {category.replace('-', ' ')}
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="font-medium text-gray-900 truncate max-w-[200px]">{product.name}</span>
                </nav>

                <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                    {/* Image Section */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-inner border border-gray-100">
                            <img
                                src={product.images?.[0] || '/placeholder.jpg'}
                                alt={product.name}
                                className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Placeholder for thumbnails */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square bg-gray-50 rounded-lg cursor-pointer border border-gray-200 hover:border-primary-500 transition-colors">
                                    <img src={product.images?.[0] || '/placeholder.jpg'} alt="" className="w-full h-full object-cover p-2" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
                        <p className="text-gray-600 mb-4">{product.description}</p>

                        <div className="flex items-baseline gap-2 mb-6">
                            {product.attributes?.isSale && product.attributes?.originalPrice ? (
                                <>
                                    <p className="text-3xl font-bold text-primary-600">{formatPrice(product.price)}</p>
                                    <p className="text-xl text-gray-500 line-through">{formatPrice(product.attributes.originalPrice)}</p>
                                    <span className="ml-2 px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                                        Giảm {product.attributes.discount}%
                                    </span>
                                </>
                            ) : (
                                <p className="text-3xl font-bold text-primary-600">{formatPrice(product.price)}</p>
                            )}
                        </div>

                        <div className="space-y-2 text-gray-700 mb-8">
                            <p className="text-gray-600">Thương hiệu: <span className="font-medium text-primary-600">{product.attributes?.brand || 'N/A'}</span></p>
                            <p className="text-gray-600">Mã sản phẩm: <span className="font-medium">{product.id}</span></p>
                            <p className="text-gray-600">Tình trạng: <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>{product.inStock ? 'Còn hàng' : 'Hết hàng'}</span></p>
                        </div>

                        <div className="prose prose-sm text-gray-600 mb-8">
                            <p>
                                Mẫu kính thời trang cao cấp từ thương hiệu {product.attributes?.brand || 'N/A'}.
                                Thiết kế hiện đại, phù hợp với nhiều khuôn mặt.
                                Chất liệu bền bỉ, mang lại cảm giác thoải mái khi đeo trong thời gian dài.
                            </p>
                            <ul className="mt-4 space-y-2 list-none p-0">
                                <li className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-green-500" />
                                    <span>Bảo hành chính hãng 12 tháng</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Truck className="w-5 h-5 text-blue-500" />
                                    <span>Miễn phí vận chuyển toàn quốc</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-orange-500" />
                                    <span>Hỗ trợ đo mắt miễn phí tại cửa hàng</span>
                                </li>
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="mt-auto space-y-4">
                            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-primary-200 transition-all flex items-center justify-center gap-3 active:scale-95">
                                <ShoppingCart className="w-6 h-6" />
                                Thêm vào giỏ hàng
                            </button>
                            <button className="w-full bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 font-bold py-3 rounded-xl transition-colors">
                                Tìm cửa hàng gần nhất
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 relative inline-block">
                            Sản phẩm liên quan
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary-500 rounded-full"></span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {relatedProducts.map((relatedProduct: any) => (
                                <ProductCard
                                    key={relatedProduct.id}
                                    id={relatedProduct.id}
                                    name={relatedProduct.name}
                                    price={relatedProduct.price}
                                    image={relatedProduct.images?.[0] || '/placeholder.jpg'}
                                    category={relatedProduct.category}
                                    slug={relatedProduct.slug}
                                    inStock={relatedProduct.inStock}
                                    badge={relatedProduct.attributes?.isNew ? 'new' : relatedProduct.attributes?.isSale ? 'sale' : undefined}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    ))
}
                </div >
            </div >
        )
    }
            </div >
        </div >
    );
}
```
