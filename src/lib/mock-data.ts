// Mock Data for Homepage

export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: 'gong-kinh' | 'trong-kinh' | 'kinh-mat' | 'kinh-ap-trong';
    slug: string;
    brand: string;
    isNew?: boolean;
    isSale?: boolean;
    discount?: number;
}

export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
    link: string;
}

export interface Brand {
    id: number;
    name: string;
    logo: string;
}

// Mock Products Data
export const mockProducts: Product[] = [
    // New Arrivals
    {
        id: 1,
        name: 'Gọng kính Rayban Aviator Classic',
        slug: 'gong-kinh-rayban-aviator-classic',
        price: 2500000,
        originalPrice: 3200000,
        image: 'https://placehold.co/400x400/3b82f6/white?text=Rayban+Aviator',
        category: 'gong-kinh',
        brand: 'Rayban',
        isNew: true,
        isSale: true,
        discount: 22,
    },
    {
        id: 2,
        name: 'Gọng kính Gucci GG0061O',
        slug: 'gong-kinh-gucci-gg0061o',
        price: 4800000,
        image: 'https://placehold.co/400x400/1e40af/white?text=Gucci+GG0061O',
        category: 'gong-kinh',
        brand: 'Gucci',
        isNew: true,
    },
    {
        id: 3,
        name: 'Tròng kính Essilor Crizal',
        slug: 'trong-kinh-essilor-crizal',
        price: 1200000,
        image: 'https://placehold.co/400x400/2563eb/white?text=Essilor+Crizal',
        category: 'trong-kinh',
        brand: 'Essilor',
        isNew: true,
    },
    {
        id: 4,
        name: 'Kính mát Oakley Holbrook',
        slug: 'kinh-mat-oakley-holbrook',
        price: 3500000,
        originalPrice: 4200000,
        image: 'https://placehold.co/400x400/1d4ed8/white?text=Oakley+Holbrook',
        category: 'kinh-mat',
        brand: 'Oakley',
        isNew: true,
        isSale: true,
        discount: 17,
    },

    // Trending Frames
    {
        id: 5,
        name: 'Gọng kính Titanium Premium',
        slug: 'gong-kinh-titanium-premium',
        price: 1800000,
        image: 'https://placehold.co/400x400/3b82f6/white?text=Titanium+Premium',
        category: 'gong-kinh',
        brand: 'Chemi',
    },
    {
        id: 6,
        name: 'Gọng kính Prada PR 17WV',
        slug: 'gong-kinh-prada-pr-17wv',
        price: 5200000,
        image: 'https://placehold.co/400x400/1e40af/white?text=Prada+PR17WV',
        category: 'gong-kinh',
        brand: 'Prada',
    },
    {
        id: 7,
        name: 'Gọng kính Versace VE3292',
        slug: 'gong-kinh-versace-ve3292',
        price: 4500000,
        image: 'https://placehold.co/400x400/2563eb/white?text=Versace+VE3292',
        category: 'gong-kinh',
        brand: 'Versace',
    },
    {
        id: 8,
        name: 'Gọng kính Burberry BE2340',
        slug: 'gong-kinh-burberry-be2340',
        price: 3900000,
        originalPrice: 4500000,
        image: 'https://placehold.co/400x400/1d4ed8/white?text=Burberry+BE2340',
        category: 'gong-kinh',
        brand: 'Burberry',
        isSale: true,
        discount: 13,
    },

    // Sunglasses
    {
        id: 9,
        name: 'Kính mát Rayban Wayfarer',
        slug: 'kinh-mat-rayban-wayfarer',
        price: 2800000,
        image: 'https://placehold.co/400x400/3b82f6/white?text=Rayban+Wayfarer',
        category: 'kinh-mat',
        brand: 'Rayban',
    },
    {
        id: 10,
        name: 'Kính mát Gucci GG0061S',
        slug: 'kinh-mat-gucci-gg0061s',
        price: 5500000,
        image: 'https://placehold.co/400x400/1e40af/white?text=Gucci+GG0061S',
        category: 'kinh-mat',
        brand: 'Gucci',
    },
    {
        id: 11,
        name: 'Kính mát Oakley Frogskins',
        slug: 'kinh-mat-oakley-frogskins',
        price: 3200000,
        image: 'https://placehold.co/400x400/2563eb/white?text=Oakley+Frogskins',
        category: 'kinh-mat',
        brand: 'Oakley',
    },
    {
        id: 12,
        name: 'Kính mát Prada SPR 17W',
        slug: 'kinh-mat-prada-spr-17w',
        price: 6200000,
        originalPrice: 7000000,
        image: 'https://placehold.co/400x400/1d4ed8/white?text=Prada+SPR17W',
        category: 'kinh-mat',
        brand: 'Prada',
        isSale: true,
        discount: 11,
    },

    // Additional products
    {
        id: 13,
        name: 'Tròng kính Hoya BlueControl',
        slug: 'trong-kinh-hoya-bluecontrol',
        price: 1500000,
        image: 'https://placehold.co/400x400/3b82f6/white?text=Hoya+BlueControl',
        category: 'trong-kinh',
        brand: 'Hoya',
    },
    {
        id: 14,
        name: 'Tròng kính Zeiss DriveSafe',
        slug: 'trong-kinh-zeiss-drivesafe',
        price: 2200000,
        image: 'https://placehold.co/400x400/1e40af/white?text=Zeiss+DriveSafe',
        category: 'trong-kinh',
        brand: 'Zeiss',
    },
    {
        id: 15,
        name: 'Kính áp tròng Acuvue Oasys',
        slug: 'kinh-ap-trong-acuvue-oasys',
        price: 450000,
        image: 'https://placehold.co/400x400/2563eb/white?text=Acuvue+Oasys',
        category: 'kinh-ap-trong',
        brand: 'Acuvue',
    },
    {
        id: 16,
        name: 'Kính áp tròng Bausch & Lomb',
        slug: 'kinh-ap-trong-bausch-and-lomb',
        price: 380000,
        image: 'https://placehold.co/400x400/1d4ed8/white?text=Bausch+Lomb',
        category: 'kinh-ap-trong',
        brand: 'Bausch & Lomb',
    },
];

// Categories Data
export const categories: Category[] = [
    {
        id: 'gong-kinh',
        name: 'Gọng Kính',
        description: 'Đa dạng mẫu mã, chất liệu cao cấp',
        image: 'https://placehold.co/400x400/3b82f6/white?text=Gong+Kinh',
        link: '/gong-kinh',
    },
    {
        id: 'trong-kinh',
        name: 'Tròng Kính',
        description: 'Chống ánh sáng xanh, chống UV',
        image: 'https://placehold.co/400x400/1e40af/white?text=Trong+Kinh',
        link: '/trong-kinh',
    },
    {
        id: 'kinh-mat',
        name: 'Kính Mát',
        description: 'Thời trang, bảo vệ mắt tối ưu',
        image: 'https://placehold.co/400x400/2563eb/white?text=Kinh+Mat',
        link: '/kinh-mat',
    },
    {
        id: 'kinh-ap-trong',
        name: 'Kính Áp Tròng',
        description: 'Tiện lợi, thoải mái cả ngày',
        image: 'https://placehold.co/400x400/1d4ed8/white?text=Kinh+Ap+Trong',
        link: '/kinh-ap-trong',
    },
];

// Brands Data
export const brands: Brand[] = [
    { id: 1, name: 'Rayban', logo: 'https://placehold.co/200x100/e5e7eb/1f2937?text=Rayban' },
    { id: 2, name: 'Gucci', logo: 'https://placehold.co/200x100/e5e7eb/1f2937?text=Gucci' },
    { id: 3, name: 'Essilor', logo: 'https://placehold.co/200x100/e5e7eb/1f2937?text=Essilor' },
    { id: 4, name: 'Chemi', logo: 'https://placehold.co/200x100/e5e7eb/1f2937?text=Chemi' },
    { id: 5, name: 'Oakley', logo: 'https://placehold.co/200x100/e5e7eb/1f2937?text=Oakley' },
    { id: 6, name: 'Prada', logo: 'https://placehold.co/200x100/e5e7eb/1f2937?text=Prada' },
    { id: 7, name: 'Hoya', logo: 'https://placehold.co/200x100/e5e7eb/1f2937?text=Hoya' },
    { id: 8, name: 'Zeiss', logo: 'https://placehold.co/200x100/e5e7eb/1f2937?text=Zeiss' },
];

// Helper functions to filter products
export const getNewArrivals = () => mockProducts.filter(p => p.isNew).slice(0, 4);
export const getTrendingFrames = () => mockProducts.filter(p => p.category === 'gong-kinh').slice(0, 4);
export const getSunglasses = () => mockProducts.filter(p => p.category === 'kinh-mat').slice(0, 4);
