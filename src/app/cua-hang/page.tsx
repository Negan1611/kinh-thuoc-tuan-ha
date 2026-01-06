import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function StorePage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container-custom py-8">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-primary-600">Trang chủ</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="font-medium text-gray-900">Cửa hàng</span>
                </nav>

                <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Hệ Thống Cửa Hàng</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Store 1 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video bg-gray-200 relative">
                            <img src="https://placehold.co/600x400/e2e8f0/64748b?text=Store+1" alt="Cửa hàng 1" className="w-full h-full object-cover" />
                            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">Đang mở cửa</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Chi nhánh Quận 1</h3>
                            <p className="text-gray-600 mb-4">123 Nguyễn Huệ, Quận 1, TP. HCM</p>
                            <p className="text-sm text-gray-500 mb-4">Hotline: 0901.234.567</p>
                            <button className="w-full text-primary-600 border border-primary-600 font-bold py-2 rounded hover:bg-primary-50 transition-colors">
                                Xem bản đồ
                            </button>
                        </div>
                    </div>

                    {/* Store 2 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video bg-gray-200 relative">
                            <img src="https://placehold.co/600x400/e2e8f0/64748b?text=Store+2" alt="Cửa hàng 2" className="w-full h-full object-cover" />
                            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">Đang mở cửa</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Chi nhánh Hà Nội</h3>
                            <p className="text-gray-600 mb-4">456 Kim Mã, Ba Đình, Hà Nội</p>
                            <p className="text-sm text-gray-500 mb-4">Hotline: 0909.888.999</p>
                            <button className="w-full text-primary-600 border border-primary-600 font-bold py-2 rounded hover:bg-primary-50 transition-colors">
                                Xem bản đồ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
