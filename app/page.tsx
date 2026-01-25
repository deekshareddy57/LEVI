import Button from "@/components/Button";
import {
    Globe, ArrowRight, Lock, Unlock, Zap, Brain, Shield,
    Users, PenTool, Scale, Trophy, CheckCircle2, X
} from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col w-full bg-levi-black text-levi-white min-h-screen font-sans">

            {/* =========================================
          1. HERO SECTION
      ========================================= */}
            <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0 z-0 bg-gray-900">
                    <Image
                        src="/assets/temple-bg.jpeg"
                        alt="Greek Temple"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-levi-black" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto mt-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
                        <Globe className="w-3 h-3 text-levi-red" />
                        <span className="text-[10px] md:text-xs font-extrabold tracking-[0.3em] uppercase text-white">
                            Remote First • Global
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                        Legal & Ethics <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-levi-red to-levi-orange">
                            Ventures Institute
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        We don't just study the future. We build the frameworks that govern it.
                        <br className="hidden md:block" /> Join the intersection of Law, AI, and Robotics.
                    </p>

                    {/* --- UPDATED BUTTONS SECTION --- */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* JOIN US -> External Link */}
                        <a
                            href="https://hephaestus.international/internships/ethical-legal-research-intern"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-gray-200 transition-colors"
                        >
                            JOIN US
                        </a>

                        {/* LEARN MORE -> Internal Page */}
                        <a
                            href="/learn-more"
                            className="border border-white/30 text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-white/10 transition-colors"
                        >
                            LEARN MORE
                        </a>
                    </div>
                    {/* ------------------------------- */}

                </div>
            </section>

            {/* =========================================
          2. THE MANIFESTO (What We Are vs Not)
      ========================================= */}
            <section id="manifesto" className="py-24 px-6 bg-levi-black border-b border-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <h2 className="text-4xl font-extrabold text-white mb-8">
                            We Are...
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-gray-600">
                                <X className="w-8 h-8 text-levi-red opacity-50" />
                                <span className="line-through decoration-levi-red/50 decoration-2">Not a Law School.</span>
                            </div>
                            <div className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-gray-600">
                                <X className="w-8 h-8 text-levi-red opacity-50" />
                                <span className="line-through decoration-levi-red/50 decoration-2">Not a Clinic.</span>
                            </div>
                            <div className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-gray-600">
                                <X className="w-8 h-8 text-levi-red opacity-50" />
                                <span className="line-through decoration-levi-red/50 decoration-2">Not a Bootcamp.</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative p-10 rounded-3xl bg-gradient-to-br from-levi-red/10 to-transparent border border-levi-red/20">
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-levi-red rounded-full blur-xl opacity-50" />
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                            But A Legal & Ethics <br />
                            <span className="text-levi-red">Ventures Institute.</span>
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Where curiosity meets courage. For students, career changers, international learners, and innovators—<span className="text-white font-bold">all are welcome here.</span>
                        </p>
                        <div className="h-1 w-20 bg-levi-red rounded-full" />
                    </div>
                </div>
            </section>

            {/* =========================================
          3. THE MAZE vs. THE DOOR
      ========================================= */}
            <section className="py-32 px-6 bg-levi-black relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-0 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

                        <div className="relative p-12 bg-gradient-to-br from-levi-red/10 to-levi-black flex flex-col justify-center overflow-hidden">
                            <div className="absolute inset-0 z-0 opacity-20 bg-gray-800">
                                <Image src="/assets/statue.jpg" alt="Statue" fill className="object-cover" />
                            </div>
                            <div className="relative z-10">
                                <Lock className="w-12 h-12 text-levi-red mb-6" />
                                <h3 className="text-3xl font-bold text-white mb-4">The Maze.</h3>
                                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                                    "Breaking in shouldn't be harder than learning." <br /><br />
                                    The legal world is locked behind closed doors. Real practice is reserved for the few, leaving innovators stuck in theory.
                                </p>
                            </div>
                        </div>

                        <div className="relative p-12 bg-gradient-to-br from-levi-red/10 to-levi-black flex flex-col justify-center overflow-hidden">
                            <div className="absolute inset-0 z-0 opacity-20 bg-gray-800">
                                <Image src="/assets/opendoor.jpg" alt="Open Door" fill className="object-cover" />
                            </div>

                            <div className="relative z-10">
                                <Unlock className="w-12 h-12 text-levi-red mb-6" />
                                <h3 className="text-3xl font-bold text-white mb-4">The Open Door.</h3>
                                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                                    We widen the entrance. We ignite <span className="text-levi-red font-bold">hands-on experience</span> and make it real.
                                </p>
                                <div className="flex items-center gap-2 text-levi-red font-bold text-sm tracking-widest uppercase cursor-pointer hover:underline">
                                    See how we do it <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
          4. "WE OFFER YOU"
      ========================================= */}
            <section className="py-24 px-6 bg-levi-dark border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                            We Don't Train You to Pass the Bar.
                        </h2>
                        <p className="text-2xl md:text-4xl font-bold text-levi-red">
                            We train you to build what comes after it.
                        </p>
                    </div>

                    <div className="text-center mb-10">
                        <h3 className="text-xl font-bold text-white uppercase tracking-widest border-b border-white/10 inline-block pb-2">
                            We Offer You
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <OfferCard icon={Users} title="Hands-on Client Work" />
                        <OfferCard icon={Brain} title="AI Tools for Modern Law" />
                        <OfferCard icon={PenTool} title="Legal Drafting & Research" />
                        <OfferCard icon={Zap} title="Startup Experience" />
                        <OfferCard icon={Scale} title="Ethics & Compliance" />
                        <OfferCard icon={Trophy} title="Day One Impact" />
                    </div>
                </div>
            </section>

            {/* =========================================
          5. VENTURES
      ========================================= */}
            <section className="py-32 px-6 bg-levi-black text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                    Robotics, AI & Legal Innovation
                </h2>
                <p className="text-xl text-levi-red font-bold mb-16 uppercase tracking-wider">
                    Your Legal Playground
                </p>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    <DarkCard
                        icon={Brain}
                        title="Legal AI Buddy"
                        desc="Humanoid assistants helping pro-se litigants navigate small claims and immigration."
                    />
                    <DarkCard
                        icon={Zap}
                        title="Venture Pipeline"
                        desc="Turning ethics research into real-world startups and functional products."
                    />
                    <DarkCard
                        icon={Shield}
                        title="Ethics Frameworks"
                        desc="Defining the rules of engagement for Autonomous Agents and AI."
                    />
                </div>

                <div className="mt-16">
                    <p className="text-gray-500 italic text-lg">
                        ...and this is just a beginning.
                    </p>
                </div>
            </section>

            {/* =========================================
          6. DO YOU? (The Call)
      ========================================= */}
            <section className="relative py-32 px-6 flex items-center justify-center overflow-hidden bg-gray-900">

                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/assets/owl.png"
                        alt="Wisdom"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-levi-black via-levi-black/90 to-transparent" />

                <div className="relative z-10 w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-3xl text-center shadow-2xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12">
                        Do You...?
                    </h2>

                    <div className="grid md:grid-cols-1 gap-6 mb-12 text-left max-w-2xl mx-auto">
                        <CheckItem text="Have a passion for law, ethics, and AI?" />
                        <CheckItem text="Want hands-on experience solving real-world legal challenges?" />
                        <CheckItem text="Dream of building AI-powered tools, platforms, or innovations?" />
                        <CheckItem text="Value flexibility and learning from anywhere?" />
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-xl md:text-2xl font-bold text-levi-red">
                            If YES, this is where your journey starts.
                        </h3>
                        <Button href="https://hephaestus.international/internships/ethical-legal-research-intern" className="bg-gradient-to-r from-levi-red to-levi-orange text-white border-none px-12 py-4 text-lg font-bold shadow-lg shadow-levi-red/20">
                            JOIN US
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}

// ------------------------------------------
// HELPER COMPONENTS
// ------------------------------------------

function OfferCard({ icon: Icon, title }: { icon: any, title: string }) {
    return (
        <div className="flex items-center gap-4 p-6 bg-levi-black rounded-xl border border-white/5 hover:border-levi-red/50 hover:bg-white/5 transition-all group">
            <div className="p-3 bg-white/5 rounded-full text-white group-hover:text-levi-red transition-colors">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-300 group-hover:text-white">{title}</h3>
        </div>
    );
}

function DarkCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-levi-red/50 transition-all group text-left h-full">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10">
                <Icon className="w-6 h-6 text-levi-red" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function CheckItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-levi-red flex-shrink-0 mt-1" />
            <p className="text-lg text-gray-200 font-medium">{text}</p>
        </div>
    );
}