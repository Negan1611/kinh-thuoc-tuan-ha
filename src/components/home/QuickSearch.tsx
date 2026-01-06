'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QuickSearch() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/products?search=${encodeURIComponent(query)}`);
        }
    };

    return (
        <section className="py-8 bg-gray-50">
            <div className="container-custom max-w-[800px] mx-auto px-4">
                <form onSubmit={handleSearch} className="relative w-full">
                    {/* Input Container */}
                    <div className="relative group">
                        {/* Search Icon */}
                        <div className="absolute inset-y-0 left-0 pl-4 md:pl-5 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 md:h-6 md:w-6 text-gray-400 group-focus-within:text-primary-600 transition-colors" />
                        </div>

                        {/* Input Field */}
                        <input
                            type="text"
                            className="block w-full pl-12 md:pl-14 pr-24 md:pr-32 py-3 md:py-4 bg-white border border-gray-300 rounded-full leading-5 placeholder-gray-500 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 shadow-sm transition-all duration-300 text-base md:text-lg"
                            placeholder="Tìm kiếm sản phẩm..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />

                        {/* Search Button (Absolute Right) */}
                        <div className="absolute inset-y-1 right-1">
                            <button
                                type="submit"
                                className="h-full px-4 md:px-8 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors flex items-center justify-center text-sm md:text-base"
                            >
                                <span className="hidden md:inline">Tìm kiếm</span>
                                <span className="md:hidden">Tìm</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
