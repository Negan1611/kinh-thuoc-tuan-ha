import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
// import ServiceHighlights from '@/components/home/ServiceHighlights';
import CategoryGrid from '@/components/home/CategoryGrid';
import QuickSearch from '@/components/home/QuickSearch';
import ProductCategorySection from '@/components/home/ProductCategorySection';
import BrandLogos from '@/components/home/BrandLogos';
import { getNewArrivals, getTrendingFrames, getSunglasses } from '@/lib/mock-data';

export default function Home() {
    const newArrivals = getNewArrivals();
    const trendingFrames = getTrendingFrames();
    const sunglasses = getSunglasses();

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
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Main Container với max-width - MatViet Style */}
            <div className="w-full bg-gray-50">
                <div className="max-w-[1400px] mx-auto">
                    {/* Hero Carousel */}
                    <HeroBanner />

                    <main className="flex-grow">
                        {/* Service Highlights / USP Bar - Tạm ẩn */}
                        {/* <ServiceHighlights /> */}

                        {/* Category Grid - Tạm ẩn */}
                        {/* <CategoryGrid /> */}

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
                        <div className="bg-gray-50">
                            <ProductCategorySection
                                title="Kính Mát"
                                subCategories={[]}
                                products={sunglasses}
                                categorySlug="kinh-mat"
                            />
                        </div>

                        {/* 3. Tròng Kính */}
                        <ProductCategorySection
                            title="Tròng Kính"
                            subCategories={trongKinhSubCategories}
                            products={newArrivals}
                            categorySlug="trong-kinh"
                        />

                        {/* 4. Kính Áp Tròng */}
                        <div className="bg-gray-50">
                            <ProductCategorySection
                                title="Kính Áp Tròng"
                                subCategories={[]}
                                products={newArrivals.slice(0, 8)}
                                categorySlug="kinh-ap-trong"
                            />
                        </div>

                        {/* Brand Logos Carousel */}
                        <BrandLogos />
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}
