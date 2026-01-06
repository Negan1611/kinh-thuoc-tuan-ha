'use client';

import { brands } from '@/lib/mock-data';

export default function BrandLogos() {
    // Duplicate brands array for seamless infinite scroll
    const allBrands = [...brands, ...brands];

    return (
        <section className="py-12 bg-gray-50 overflow-hidden">
            <div className="container-custom mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                    Thương Hiệu Uy Tín
                </h2>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative">
                <div className="flex animate-scroll">
                    {allBrands.map((brand, index) => (
                        <div
                            key={`${brand.id}-${index}`}
                            className="flex-shrink-0 w-48 px-6"
                        >
                            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="w-full h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
