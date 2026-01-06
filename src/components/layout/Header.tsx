'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Phone, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState<'vi' | 'en'>('vi');

    const languages = [
        { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
    ];

    const handleLanguageChange = (lang: 'vi' | 'en') => {
        setCurrentLanguage(lang);
        setLanguageMenuOpen(false);
    };

    const navigation = [
        { name: 'Trang chủ', href: '/' },
        { name: 'Gọng kính', href: '/products?category=gong-kinh' },
        { name: 'Kính mát', href: '/products?category=kinh-mat' },
        { name: 'Tròng kính', href: '/products?category=trong-kinh' },
        { name: 'Kính áp tròng', href: '/products?category=kinh-ap-trong' },
        { name: 'Thương hiệu', href: '/brands' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Khuyến mãi', href: '/promotions' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#0056b3] shadow-md">
            <nav className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Mobile Menu Button - Bên trái */}
                    <button
                        type="button"
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Logo - Chỉ hiện trên desktop */}
                    <Link href="/" className="hidden md:flex items-center">
                        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                            KÍNH THUỐC TUẤN HÀ
                        </h1>
                    </Link>

                    {/* Desktop Navigation & Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        {/* Navigation Links */}
                        {navigation.slice(0, 4).map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-white hover:text-blue-200 font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Icons với Text Labels - Desktop */}
                        <div className="flex items-center space-x-6 ml-4 border-l border-blue-500 pl-4">
                            <button
                                className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors"
                                aria-label="Tìm kiếm"
                            >
                                <Search className="w-5 h-5" />
                                <span className="text-sm font-medium">Tìm kiếm</span>
                            </button>

                            <Link
                                href="/stores"
                                className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors"
                                aria-label="Hệ thống cửa hàng"
                            >
                                <MapPin className="w-5 h-5" />
                                <span className="text-sm font-medium">Cửa hàng</span>
                            </Link>

                            <a
                                href="tel:0988887870"
                                className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors"
                                aria-label="Hotline"
                            >
                                <Phone className="w-5 h-5" />
                                <span className="text-sm font-medium">Hotline</span>
                            </a>

                            <Link
                                href="/cart"
                                className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors relative"
                                aria-label="Giỏ hàng"
                            >
                                <div className="relative">
                                    <ShoppingCart className="w-5 h-5" />
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        0
                                    </span>
                                </div>
                                <span className="text-sm font-medium">Giỏ hàng</span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Right Section - Language Switcher + Cart */}
                    <div className="md:hidden flex items-center space-x-3">
                        {/* Language Switcher - Mobile */}
                        <div className="relative">
                            <button
                                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                                className="text-white p-2 flex items-center space-x-1"
                                aria-label="Chuyển đổi ngôn ngữ"
                            >
                                <span className="text-xl">{languages.find(l => l.code === currentLanguage)?.flag}</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Language Dropdown */}
                            {languageMenuOpen && (
                                <>
                                    {/* Overlay */}
                                    <div
                                        className="fixed inset-0 z-30"
                                        onClick={() => setLanguageMenuOpen(false)}
                                    />
                                    {/* Dropdown Menu */}
                                    <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg z-40 overflow-hidden">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => handleLanguageChange(lang.code as 'vi' | 'en')}
                                                className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-100 transition-colors ${currentLanguage === lang.code ? 'bg-blue-50' : ''
                                                    }`}
                                            >
                                                <span className="text-xl">{lang.flag}</span>
                                                <span className="text-sm font-medium text-gray-900">{lang.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Mobile Cart Icon */}
                        <Link
                            href="/cart"
                            className="text-white relative p-2"
                            aria-label="Giỏ hàng"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Menu */}
            {/* Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900">Danh mục</h2>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <X className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Sidebar Content */}
                    <div className="flex-1 overflow-y-auto p-4">
                        <nav className="space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-3 text-gray-900 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-gray-200 space-y-3">
                        <div className="text-sm font-bold text-gray-900 mb-2">BẠN CẦN HỖ TRỢ?</div>
                        <a
                            href="tel:0988887870"
                            className="flex items-center space-x-3 text-gray-900 hover:text-blue-600 transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            <span className="font-medium">0988887870</span>
                        </a>
                        <div className="flex items-center space-x-4 pt-2">
                            <button className="text-gray-600 hover:text-blue-600" aria-label="Tìm kiếm">
                                <Search className="w-5 h-5" />
                            </button>
                            <Link href="/stores" className="text-gray-600 hover:text-blue-600" aria-label="Cửa hàng">
                                <MapPin className="w-5 h-5" />
                            </Link>
                            <Link href="/cart" className="text-gray-600 hover:text-blue-600 relative" aria-label="Giỏ hàng">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    0
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
