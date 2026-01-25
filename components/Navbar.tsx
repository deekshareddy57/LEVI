"use client";
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image'; // <--- Import Image component
import { Menu, X } from 'lucide-react'; // Import icons

export default function Navbar() {
    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Journey", href: "/journey" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="w-full max-w-5xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 shadow-2xl flex items-center justify-between transition-all hover:bg-black/70">

                {/* LOGO AREA - Updated to include Image */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image
                            src="/assets/logo.webp"  // <--- Your Logo File
                            alt="LEVI Logo"
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <span className="font-sans text-xl md:text-2xl font-black tracking-tighter text-white">
                        LEVI<span className="text-levi-red">.</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold text-white/70 hover:text-white hover:underline decoration-levi-red decoration-2 underline-offset-4 transition-all uppercase tracking-[0.15em]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <a
                    href="https://hephaestus.international/internships/ethical-legal-research-intern"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-levi-red to-levi-orange text-white text-xs font-bold px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(255,77,77,0.4)] transition-all tracking-wider"
                >
                    JOIN US
                </a>
            </nav>
        </div>
    );
}