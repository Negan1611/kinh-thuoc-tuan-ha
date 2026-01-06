import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="py-20 md:py-32 text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Kính Mắt Tuấn Hà
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl mb-4 text-primary-100">
                        Chất Lượng Tầm Nhìn
                    </p>

                    {/* Description */}
                    <p className="text-base md:text-lg mb-10 text-primary-50 max-w-2xl mx-auto leading-relaxed">
                        Chuyên cung cấp gọng kính, tròng kính và phụ kiện chính hãng với giá tốt nhất tại Phủ Lý, Hà Nam.
                        Đội ngũ nhân viên tận tâm, chuyên nghiệp, luôn sẵn sàng tư vấn.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/products"
                            className="px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                        >
                            Xem sản phẩm
                        </Link>
                        <a
                            href="tel:0988887870"
                            className="px-8 py-3 bg-primary-800 text-white font-semibold rounded-lg hover:bg-primary-900 transition-colors border-2 border-white/30 w-full sm:w-auto text-center"
                        >
                            Liên hệ tư vấn
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">100%</div>
                            <div className="text-sm text-primary-100">Hàng chính hãng</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">5+</div>
                            <div className="text-sm text-primary-100">Năm kinh nghiệm</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">1000+</div>
                            <div className="text-sm text-primary-100">Khách hàng hài lòng</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
