import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Về chúng tôi */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">K</span>
                            </div>
                            <div>
                                <div className="font-bold text-lg text-white">Kính Mắt Tuấn Hà</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Chuyên cung cấp gọng kính, tròng kính và phụ kiện chính hãng với chất lượng tốt nhất tại Phủ Lý, Hà Nam.
                        </p>
                    </div>

                    {/* Thông tin liên hệ */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Thông tin liên hệ</h3>
                        <address className="not-italic text-sm space-y-2">
                            <p className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span>61A đường Biên Hoà, P. Lương Khánh Thiện, TP. Phủ Lý, Hà Nam</span>
                            </p>
                            <p className="flex items-center">
                                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <a href="tel:0988887870" className="hover:text-primary-400 transition-colors">
                                    0988887870
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Liên kết nhanh */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Liên kết nhanh</h3>
                        <ul className="text-sm space-y-2">
                            <li>
                                <Link href="/" className="hover:text-primary-400 transition-colors">
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-primary-400 transition-colors">
                                    Sản phẩm
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary-400 transition-colors">
                                    Giới thiệu
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kết nối */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Kết nối với chúng tôi</h3>
                        <div className="flex space-x-3">
                            <a
                                href="https://m.me/100067165626895"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Facebook Messenger"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.446 5.51 3.707 7.206V22l3.398-1.87c.907.251 1.87.387 2.895.387 5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm.993 12.535l-2.558-2.73-4.993 2.73 5.491-5.828 2.62 2.73 4.931-2.73-5.491 5.828z" />
                                </svg>
                            </a>
                            <a
                                href="tel:0988887870"
                                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Zalo"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                </svg>
                            </a>
                        </div>
                        <p className="text-sm mt-4 text-gray-400">
                            Liên hệ ngay để được tư vấn miễn phí
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-4">
                    <p className="text-center text-sm text-gray-400">
                        &copy; {currentYear} Kính Mắt Tuấn Hà. Tất cả quyền được bảo lưu.
                    </p>
                </div>
            </div>
        </footer>
    );
}
