import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ["vietnamese", "latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
    title: "Kính Mắt Tuấn Hà - Chuyên Gọng Kính & Tròng Kính Chất Lượng",
    description: "Kính Mắt Tuấn Hà tại Phủ Lý, Hà Nam - Chuyên cung cấp gọng kính, tròng kính, kính mát chính hãng với giá tốt nhất. Hotline: 0988887870",
    keywords: ["kính mắt", "gọng kính", "tròng kính", "kính mát", "Phủ Lý", "Hà Nam"],
    openGraph: {
        title: "Kính Mắt Tuấn Hà",
        description: "Chuyên gọng kính & tròng kính chất lượng tại Phủ Lý, Hà Nam",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body className={`${beVietnamPro.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
