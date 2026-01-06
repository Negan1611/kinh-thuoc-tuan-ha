import Link from 'next/link';
import { ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-primary-600">Trang chủ</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="font-medium text-gray-900">Liên hệ</span>
                </nav>

                <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Liên Hệ Với Chúng Tôi</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="bg-white rounded-xl shadow-sm p-8">
                        <h2 className="text-2xl font-bold mb-6 text-primary-600">Thông Tin Liên Hệ</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Địa chỉ</h3>
                                    <p className="text-gray-600">Số 123 Đường ABC, Quận XYZ, TP. Hà Nội</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Hotline</h3>
                                    <p className="text-gray-600">0123.456.789</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                    <p className="text-gray-600">lienhe@kinhthuoctuanha.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Giờ mở cửa</h3>
                                    <p className="text-gray-600">8:00 - 21:00 (Tất cả các ngày trong tuần)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Map Placeholder */}
                    <div className="bg-gray-200 rounded-xl shadow-sm overflow-hidden min-h-[400px] flex items-center justify-center">
                        <p className="text-gray-500 font-medium bg-white px-4 py-2 rounded shadow">Bản đồ sẽ hiển thị tại đây</p>
                        {/* Emulator for map: <iframe src="..." width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
