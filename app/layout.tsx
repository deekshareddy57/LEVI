import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Removed Cinzel
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Assuming you have this

// Use Inter for EVERYTHING to match the clean original site
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "600", "800"] // We need heavy weights for headers
});

export const metadata: Metadata = {
    title: "Legal Ethics Ventures Institute",
    description: "The New Agora for Legal Innovation.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* Apply font-sans globally */}
            <body className={`${inter.variable} font-sans antialiased bg-levi-black text-white flex flex-col min-h-screen`}>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}