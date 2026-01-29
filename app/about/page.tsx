import Button from "@/components/Button";
import {
    Target, Users, Lightbulb, Scale, Layers, Zap, BookOpen
} from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        // 1. GLOBAL CONTAINER: White in Light Mode, Black in Dark Mode
        <div className="bg-white dark:bg-levi-black text-levi-ink dark:text-white min-h-screen font-sans transition-colors duration-300">

            {/* =========================================
          HERO SECTION
      ========================================= */}
            <section className="relative pt-48 pb-32 px-6 text-center overflow-hidden bg-gray-50 dark:bg-levi-black transition-colors duration-300">

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/justice-statue.png"
                        alt="Justice Statue"
                        fill
                        // Light Mode: Lower opacity (20%) / Dark Mode: Higher opacity (60%)
                        className="object-cover object-top opacity-99 dark:opacity-75 transition-opacity duration-300"
                        priority
                    />
                    {/* Gradient: White fade vs Black fade */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white dark:from-black/80 dark:via-black/20 dark:to-levi-black" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 mb-8 backdrop-blur-md">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-levi-red drop-shadow-md">
                            About Us
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight drop-shadow-xl text-levi-ink dark:text-white">
                        Legal Training Meets <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-levi-red via-levi-orange to-yellow-500">
                            Real Product Building.
                        </span>
                    </h1>
                </div>
            </section>

            {/* =========================================
          TWO CARDS
      ========================================= */}
            <section className="py-12 px-6 -mt-20 relative z-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <div className="group relative p-10 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-levi-red transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-black/90 shadow-xl backdrop-blur-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-levi-red/10 blur-[50px] group-hover:bg-levi-red/30 transition-all" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center mb-6 border border-gray-200 dark:border-white/10 group-hover:border-levi-red transition-all shadow-md">
                                <Layers className="w-7 h-7 text-levi-red" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-levi-ink dark:text-white">More Than Just Exams.</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                Legal Ventures Institute is where legal training meets <span className="text-levi-red font-bold">real product building</span>.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                We help aspiring legal professionals, technologists, and founders learn the practical skills needed to design, ship, and scale legal solutions.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative p-10 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-levi-orange transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-black/90 shadow-xl backdrop-blur-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-levi-orange/10 blur-[50px] group-hover:bg-levi-orange/30 transition-all" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center mb-6 border border-gray-200 dark:border-white/10 group-hover:border-levi-orange transition-all shadow-md">
                                <Zap className="w-7 h-7 text-levi-orange" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-levi-ink dark:text-white">Hands-On & Venture Oriented.</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                You learn by working on <span className="text-levi-orange font-bold">real world problems</span>, creating deliverables that mirror what modern legal teams need.
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono border-l-2 border-levi-orange/50 pl-4">
                                Includes: Research workflows, policy & compliance docs, contract systems, automation, and AI tools.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* =========================================
          MISSION
      ========================================= */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-levi-red via-purple-900 to-levi-orange rounded-3xl blur opacity-20" />

                    <div className="relative bg-white dark:bg-levi-dark border border-gray-200 dark:border-white/10 p-10 md:p-16 rounded-3xl text-center shadow-2xl transition-colors">
                        <Target className="w-12 h-12 text-levi-red mx-auto mb-6 drop-shadow-md" />
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-levi-ink dark:text-white">Our Mission</h2>
                        <p className="text-xl md:text-3xl font-light leading-relaxed text-gray-700 dark:text-gray-200">
                            "To develop the next generation of legal builders. People who can <span className="font-bold underline decoration-levi-red underline-offset-4">think like attorneys</span>, <span className="font-bold underline decoration-levi-orange underline-offset-4">operate like product teams</span>, and <span className="font-bold underline decoration-purple-500 underline-offset-4">execute like entrepreneurs</span>."
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================
          WHO IT'S FOR
      ========================================= */}
            <section className="py-24 px-6 bg-gray-50 dark:bg-levi-black relative overflow-hidden transition-colors">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold mb-4 text-levi-ink dark:text-white">Who It's For</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">Builders, thinkers, and pivoters welcome.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        <PersonaCard icon={BookOpen} title="Students & Grads" desc="Law students and recent graduates looking for real-world application." color="text-blue-500 dark:text-blue-400" />
                        <PersonaCard icon={Users} title="Professionals" desc="Working pros moving into compliance, legal ops, or policy." color="text-green-500 dark:text-green-400" />
                        <PersonaCard icon={Lightbulb} title="Builders" desc="Innovators exploring legal tech and regulation-aware design." color="text-yellow-500 dark:text-yellow-400" />
                        <PersonaCard icon={Scale} title="Lifelong Learners" desc="Those who want practical legal skills paired with modern AI tools." color="text-purple-500 dark:text-purple-400" />
                    </div>
                </div>
            </section>

            {/* =========================================
          VALUES
      ========================================= */}
            <section className="py-24 px-6 bg-white dark:bg-levi-dark border-t border-gray-200 dark:border-white/5 transition-colors">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold mb-16 text-levi-ink dark:text-white">Our Values</h2>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <ValueCard
                            title="Integrity & Professionalism"
                            desc="We hold ourselves to the highest ethical standards in every line of code and legal argument."
                            gradient="from-blue-500/5 to-transparent"
                            borderColor="border-blue-500"
                        />
                        <ValueCard
                            title="Accessibility"
                            desc="Clear language. Inclusive design. Practical tools. Law should be for everyone."
                            gradient="from-green-500/5 to-transparent"
                            borderColor="border-green-500"
                        />
                        <ValueCard
                            title="Accountability"
                            desc="We measure progress by deliverables and impact, not by hype."
                            gradient="from-orange-500/5 to-transparent"
                            borderColor="border-orange-500"
                        />
                        <ValueCard
                            title="Innovation with Responsibility"
                            desc="Especially when using AI. We build fast, but we build safe."
                            gradient="from-red-500/5 to-transparent"
                            borderColor="border-red-500"
                        />
                    </div>
                </div>
            </section>

            {/* =========================================
          CTA
      ========================================= */}
            <section className="py-32 px-6 text-center relative overflow-hidden bg-gray-50 dark:bg-levi-black transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-levi-red/5 to-transparent -z-10" />
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-levi-ink dark:text-white">
                    Go Beyond Theory. <br /> Start Building.
                </h2>
                <div className="flex justify-center gap-6">
                    <Button href="https://hephaestus.international/internships/ethical-legal-research-intern" className="px-12 py-5 bg-gradient-to-r from-levi-red to-levi-orange text-white border-none shadow-lg text-lg">
                        Apply Now
                    </Button>
                </div>
            </section>

        </div>
    );
}

// Helper Components (Updated)
function PersonaCard({ icon: Icon, title, desc, color }: any) {
    return (
        <div className="p-8 bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all group text-center hover:-translate-y-1 shadow-lg">
            <div className="w-14 h-14 bg-gray-100 dark:bg-black rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                <Icon className={`w-7 h-7 ${color}`} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-levi-ink dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function ValueCard({ title, desc, gradient, borderColor }: any) {
    return (
        <div className={`p-8 bg-gradient-to-br ${gradient} rounded-2xl border-l-4 ${borderColor} border-y border-r border-gray-200 dark:border-white/5 shadow-lg bg-white dark:bg-transparent`}>
            <h3 className="text-xl font-bold mb-3 text-levi-ink dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
        </div>
    );
}