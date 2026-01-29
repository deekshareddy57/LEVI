"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle'; // <--- Import Toggle

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Journey", href: "/journey" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                {/* CHANGED: Added dark: prefixes for color switching */}
                <nav className="w-full max-w-5xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-full px-6 py-4 shadow-2xl flex items-center justify-between transition-colors duration-300">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-8 h-8 md:w-10 md:h-10">
                            <Image
                                src="/assets/logo.webp"
                                alt="LEVI Logo"
                                fill
                                className="object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        {/* CHANGED: Text color handles both modes */}
                        <span className="font-sans text-xl md:text-2xl font-black tracking-tighter text-levi-ink dark:text-white">
                            LEVI<span className="text-levi-red">.</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-bold text-gray-600 dark:text-white/70 hover:text-levi-red dark:hover:text-white hover:underline decoration-levi-red decoration-2 underline-offset-4 transition-all uppercase tracking-[0.15em]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {/* THEME TOGGLE HERE */}
                        <ThemeToggle />

                        <a
                            href="https://hephaestus.international/internships/ethical-legal-research-intern"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-levi-red to-levi-orange text-white text-xs font-bold px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(255,77,77,0.4)] transition-all tracking-wider"
                        >
                            JOIN US
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle /> {/* Also add to mobile view */}
                        <button
                            className="text-levi-ink dark:text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-white dark:bg-black pt-32 px-6 md:hidden transition-colors duration-300">
                    <div className="flex flex-col gap-8 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold text-levi-ink dark:text-white hover:text-levi-red transition-colors uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://hephaestus.international/internships/ethical-legal-research-intern"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-levi-red text-white text-lg font-bold px-6 py-4 rounded-full mt-4"
                        >
                            JOIN US
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}