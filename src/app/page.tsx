import HeroBanner from '@/components/home/HeroBanner';
// import ServiceHighlights from '@/components/home/ServiceHighlights';
import CategoryGrid from '@/components/home/CategoryGrid';
import QuickSearch from '@/components/home/QuickSearch';
import ProductCategorySection from '@/components/home/ProductCategorySection';
import BrandLogos from '@/components/home/BrandLogos';
import { getAllProducts } from '@/lib/db-client';

export const runtime = 'edge';

export default async function Home() {
    // Fetch all products from D1
    let allProducts: any[] = [];
    try {
        allProducts = await getAllProducts();
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }

    // Filter products for different sections
    const newArrivals = allProducts.filter((p: any) => p.attributes?.isNew).slice(0, 8);
    const trendingFrames = allProducts.filter((p: any) => p.category === 'GONG_KINH').slice(0, 8);
    const sunglasses = allProducts.filter((p: any) => p.category === 'KINH_MAT').slice(0, 8);

    // Sub-categories cho từng nhóm sản phẩm
    const gongKinhSubCategories = [
        { name: 'Gọng kính cận', slug: 'can' },
        { name: 'Gọng kính nam', slug: 'nam' },
        { name: 'Gọng kính nữ', slug: 'nu' },
        { name: 'Gọng kính Unisex', slug: 'unisex' },
    ];

    const trongKinhSubCategories = [
        { name: 'Chống ánh sáng xanh', slug: 'chong-anh-sang-xanh' },
        { name: 'Đổi màu', slug: 'doi-mau' },
        { name: 'Siêu mỏng', slug: 'sieu-mong' },
        { name: 'Đa tròng', slug: 'da-trong' },
    ];

    return (
        <div className="w-full bg-gray-50">
            <div className="max-w-[1400px] mx-auto">
                {/* Hero Carousel */}
                <HeroBanner />

                {/* Quick Search Bar */}
                <QuickSearch />

                {/* Product Category Sections */}

                {/* 1. Gọng Kính */}
                <ProductCategorySection
                    title="Gọng Kính"
                    subCategories={gongKinhSubCategories}
                    products={trendingFrames}
                    categorySlug="gong-kinh"
                />

                {/* 2. Kính Mát */}
                <ProductCategorySection
                    title="Kính Mát"
                    subCategories={[]}
                    products={sunglasses}
                    categorySlug="kinh-mat"
                />

                {/* 3. Sản Phẩm Mới */}
                <ProductCategorySection
                    title="Sản Phẩm Mới"
                    subCategories={[]}
                    products={newArrivals}
                    categorySlug="san-pham"
                />

                {/* 4. Tròng Kính */}
                <ProductCategorySection
                    title="Tròng Kính"
                    subCategories={trongKinhSubCategories}
                    products={[]}
                    categorySlug="trong-kinh"
                />

                {/* Brand Logos */}
                <BrandLogos />
            </div>
        </div>
    );
}
