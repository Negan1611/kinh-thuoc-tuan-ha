'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: 'https://placehold.co/1200x480/3b82f6/3b82f6',
        title: 'Bộ Sưu Tập Mới 2026',
        subtitle: 'Khám phá xu hướng kính mắt thời trang',
    },
    {
        id: 2,
        image: 'https://placehold.co/1200x480/1e40af/1e40af',
        title: 'Giảm Giá Đến 30%',
        subtitle: 'Cho tất cả gọng kính cao cấp',
    },
    {
        id: 3,
        image: 'https://placehold.co/1200x480/2563eb/2563eb',
        title: 'Đo Mắt Miễn Phí',
        subtitle: 'Tư vấn chuyên nghiệp từ kỹ thuật viên',
    },
];

export default function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <section className="mt-6">
            {/* Inner Container với max-width và mx-auto */}
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Main Banner với tỷ lệ responsive: Mobile 4/3 (cao hơn), Desktop 5/2 (panoramic) */}
                <div className="relative aspect-[4/3] md:aspect-[5/2] w-full rounded-2xl overflow-hidden shadow-lg">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            {/* Content - Centered với Flex */}
                            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                                <div className="max-w-3xl">
                                    <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">
                                        {slide.title}
                                    </h2>
                                    <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
                                        {slide.subtitle}
                                    </p>
                                    <Link
                                        href="/products"
                                        className="inline-block px-6 py-2 md:px-8 md:py-3 bg-primary-600 text-white font-semibold text-sm md:text-base rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
                                    >
                                        Xem Bộ Sưu Tập
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors shadow-lg z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors shadow-lg z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>

                    {/* Dots Navigation */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                                    ? 'bg-white w-8'
                                    : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
