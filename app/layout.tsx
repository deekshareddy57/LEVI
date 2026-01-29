import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers"; // <--- Import this

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "600", "700", "900"]
});

export const metadata: Metadata = {
    title: "Legal & Ethics Ventures Institute",
    description: "Legal Training Meets Real Product Building.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-levi-black text-levi-ink dark:text-white flex flex-col min-h-screen transition-colors duration-300`}>
                <Providers> {/* <--- Wrap everything inside Providers */}
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}