import Link from 'next/link';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    slug?: string;
    inStock: boolean;
    badge?: 'new' | 'sale' | 'out-of-stock';
}

export default function ProductCard({
    id,
    name,
    price,
    image,
    category,
    slug,
    inStock,
    badge,
}: ProductCardProps) {
    // Fallback to id if slug is missing (though it should be present now)
    const productLink = slug ? `/${category}/${slug}` : `/${category}/san-pham-${id}`;
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(price);
    };

    const getBadgeStyles = (badge: string) => {
        switch (badge) {
            case 'new':
                return 'bg-green-500 text-white';
            case 'sale':
                return 'bg-red-500 text-white';
            case 'out-of-stock':
                return 'bg-gray-500 text-white';
            default:
                return '';
        }
    };

    const getBadgeText = (badge: string) => {
        switch (badge) {
            case 'new':
                return 'Mới';
            case 'sale':
                return 'Giảm giá';
            case 'out-of-stock':
                return 'Hết hàng';
            default:
                return '';
        }
    };

    return (
        <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href={productLink}>
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {badge && (
                        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyles(badge)}`}>
                            {getBadgeText(badge)}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-4">
                    {/* Product Name */}
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem] group-hover:text-primary-600 transition-colors">
                        {name}
                    </h3>

                    {/* Price */}
                    <p className="text-lg font-bold text-primary-600">
                        {formatPrice(price)}
                    </p>
                </div>
            </Link>
        </div>
    );
}
