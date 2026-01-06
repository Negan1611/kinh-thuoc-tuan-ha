import { Eye, UserCheck, Shield, RefreshCw } from 'lucide-react';

const services = [
    {
        id: 1,
        icon: Eye,
        title: 'Đo mắt miễn phí',
        description: 'Kiểm tra thị lực chuyên nghiệp',
    },
    {
        id: 2,
        icon: UserCheck,
        title: 'Kỹ thuật viên chuyên nghiệp',
        description: 'Đội ngũ giàu kinh nghiệm',
    },
    {
        id: 3,
        icon: Shield,
        title: 'Bảo hành chính hãng',
        description: 'Cam kết 100% hàng chính hãng',
    },
    {
        id: 4,
        icon: RefreshCw,
        title: 'Thu cũ đổi mới',
        description: 'Chương trình ưu đãi hấp dẫn',
    },
];

export default function ServiceHighlights() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                                    <Icon className="w-8 h-8 text-primary-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
