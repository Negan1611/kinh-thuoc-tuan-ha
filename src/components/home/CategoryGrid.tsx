import Link from 'next/link';
import { categories } from '@/lib/mock-data';

export default function CategoryGrid() {
    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Danh Mục Sản Phẩm
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Khám phá bộ sưu tập đa dạng với hàng trăm mẫu mã từ các thương hiệu uy tín
                    </p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={category.link}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-full aspect-square mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundImage: `url(${category.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {category.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
