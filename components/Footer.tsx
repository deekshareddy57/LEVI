import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6 z-10 relative mt-auto">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">

                {/* 1. LEVI Brand Column */}
                <div className="md:col-span-1 space-y-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* Small version of LEVI Logo */}
                        <div className="relative w-6 h-6">
                            <Image src="/assets/logo.webp" alt="LEVI" fill className="object-contain" />
                        </div>
                        <span className="font-sans text-xl font-black tracking-tighter text-white">
                            FloLabs Innovation Groups<span className="text-levi-red">.</span>
                        </span>
                    </Link>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        The intersection of Law, Ethics, and Robotics. Building the frameworks that govern the future.
                    </p>
                </div>

                {/* 2. Explore Column */}
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Explore</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="/about" className="hover:text-levi-red transition-colors">About Us</Link></li>
                        <li><Link href="/journey" className="hover:text-levi-red transition-colors">Our Journey</Link></li>
                        <li><Link href="/ventures" className="hover:text-levi-red transition-colors">Ventures</Link></li>
                        <li><Link href="/contact" className="hover:text-levi-red transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* 3. Legal Column */}
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Legal</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                    </ul>
                </div>

                {/* 4. Connect Column */}
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Connect</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-levi-red" />
                            <a href="mailto:contact@legalethicsventures.com" className="hover:text-white">contact@legalethicsventures.com</a>
                        </li>
                        <div className="flex gap-4 pt-4">
                            <SocialIcon icon={Linkedin} href="#" />
                            <SocialIcon icon={Twitter} href="#" />
                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon: Icon, href }: any) {
    return (
        <a href={href} className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-levi-red hover:text-white transition-all">
            <Icon className="w-4 h-4" />
        </a>
    );
}