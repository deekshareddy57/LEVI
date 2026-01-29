import Button from "@/components/Button";
import {
    Map, Compass, Users, BarChart3,
    ArrowRight, ShieldCheck, FileText, CheckCircle
} from "lucide-react";
import Image from "next/image";

export default function Journey() {
    return (
        <div className="bg-white dark:bg-levi-black text-levi-ink dark:text-white min-h-screen font-sans transition-colors duration-300">

            {/* 1. HERO */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden text-center bg-gray-50 dark:bg-levi-black transition-colors">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-levi-red/5 blur-[120px] rounded-full -z-10" />

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 mb-8">
                    <Map className="w-4 h-4 text-levi-red" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-levi-ink dark:text-white">
                        Our Journey Forward
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-levi-ink dark:text-white">
                    Progress. Collaboration. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-levi-red to-levi-orange">
                        Growth.
                    </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
                    A visual journey through our legal team evolution. From foundational work to future vision.
                </p>

                {/* INITIATIVES BY NUMBERS */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Initiatives: By the Numbers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-gray-200 dark:border-white/5 py-10">
                        <Stat number="13" label="Finalized Projects" desc="Foundations for innovation." />
                        <Stat number="8+" label="Active Projects" desc="Generating insights now." />
                        <Stat number="5" label="Planned Projects" desc="Upcoming explorations." />
                    </div>
                </div>
            </section>

            {/* 2. MEET THE TEAM */}
            <section className="py-24 px-6 bg-white dark:bg-levi-dark transition-colors">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-levi-ink dark:text-white">Meet the Team</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                We are a collaborative, welcoming legal intern team working at the dynamic intersection of AI, robotics, and law.
                            </p>
                            <div className="grid grid-cols-1 gap-4">
                                <TeamPoint text="Research emerging technologies and legal landscapes" />
                                <TeamPoint text="Listen to diverse perspectives" />
                                <TeamPoint text="Understand complex challenges" />
                                <TeamPoint text="Shape innovation responsibly" />
                            </div>
                        </div>

                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10">
                            <Image
                                src="/assets/statue.jpg"
                                alt="Team Collaboration"
                                fill
                                className="object-cover opacity-80 dark:opacity-60"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. COMPASS */}
            <section className="py-24 px-6 relative overflow-hidden bg-gray-50 dark:bg-levi-black transition-colors">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] w-full rounded-full overflow-hidden border-4 border-white shadow-xl order-2 md:order-1">
                        <Image src="/assets/compass.jpg" alt="Our Compass" fill className="object-cover" />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <Compass className="w-6 h-6 text-levi-red" />
                            <span className="text-lg font-bold text-levi-red uppercase tracking-widest">Our Compass</span>
                        </div>
                        <h2 className="text-4xl font-extrabold mb-6 text-levi-ink dark:text-white">Thoughtful Guidance.<br />Responsible Innovation.</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            We believe thoughtful legal guidance empowers innovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. MILESTONES */}
            <section className="py-24 px-6 bg-white dark:bg-levi-dark border-y border-gray-200 dark:border-white/5 transition-colors">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold mb-4 text-levi-ink dark:text-white">Key Milestones Achieved</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <MilestoneCard title="Legal & Ethics Ventures Institute" desc="Prepared foundational content and materials." />
                        <MilestoneCard title="Corporate Structure" desc="Research into flexible corporate structures." />
                        <MilestoneCard title="Funding Landscape" desc="Conducted initial research into U.S. & EU funding." />
                        <MilestoneCard title="Internal Documentation" desc="Conducted structured document review." />
                    </div>
                </div>
            </section>

            {/* 5. TIMELINE */}
            <section className="py-32 px-6 bg-gray-50 dark:bg-levi-black transition-colors">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-extrabold mb-4 text-levi-ink dark:text-white">The Next 12 Months</h2>
                        <p className="text-gray-600 dark:text-gray-400">Planned where possible. Open where necessary.</p>
                    </div>

                    <div className="relative border-l-2 border-gray-300 dark:border-white/10 ml-4 md:ml-1/2 space-y-16">
                        <TimelineItem phase="I" title="Funding Pathways" desc="Identifying EU and US funding opportunities." align="left" />
                        <TimelineItem phase="II" title="Team Expansion" desc="Growing the legal team to scale impact." align="right" />
                        <TimelineItem phase="III" title="AI Legal Buddy" desc="Concept development for AI Legal Buddy ecosystem." align="left" highlight />
                        <TimelineItem phase="IV" title="European Entity" desc="Laying groundwork for European expansion." align="right" />
                        <TimelineItem phase="V" title="Cross-Team Collaboration" desc="Amplifying collaboration across verticals." align="left" />
                    </div>
                </div>
            </section>

            {/* 6. CTA */}
            <section className="py-32 px-6 text-center">
                <h2 className="text-4xl font-extrabold mb-8 text-levi-ink dark:text-white">Join Us on This Journey</h2>
                <div className="flex justify-center gap-4">
                    <Button href="/contact">Talk to Us</Button>
                    <Button href="https://hephaestus.international/internships/ethical-legal-research-intern" variant="outline">Apply Now</Button>
                </div>
            </section>

        </div>
    );
}

// Helpers (Theme Aware)
function Stat({ number, label, desc }: any) {
    return (
        <div className="flex flex-col items-center p-4">
            <span className="text-5xl md:text-6xl font-extrabold text-levi-ink dark:text-white mb-2">{number}</span>
            <span className="text-xs font-bold text-levi-red uppercase tracking-widest mb-2">{label}</span>
            <span className="text-sm text-gray-500">{desc}</span>
        </div>
    );
}

function TeamPoint({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-levi-red rounded-full flex-shrink-0" />
            <p className="text-gray-600 dark:text-gray-300">{text}</p>
        </div>
    );
}

function MilestoneCard({ title, desc }: any) {
    return (
        <div className="p-8 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-levi-red shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-levi-red" />
                <h3 className="text-xl font-bold text-levi-ink dark:text-white">{title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function TimelineItem({ phase, title, desc, align, highlight }: any) {
    const isLeft = align === 'left';
    return (
        <div className={`relative flex flex-col md:flex-row items-center ${isLeft ? '' : 'md:flex-row-reverse'}`}>
            <div className={`absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-gray-100 dark:border-levi-black ${highlight ? 'bg-levi-red scale-125' : 'bg-white'}`} />
            <div className="hidden md:block w-1/2" />
            <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className={`p-6 rounded-xl border transition-all bg-white dark:bg-white/5 shadow-md ${highlight ? 'bg-levi-red/5 border-levi-red' : 'border-gray-200 dark:border-white/10'}`}>
                    <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${highlight ? 'text-levi-red' : 'text-gray-400'}`}>Phase {phase}</span>
                    <h3 className="text-xl font-bold mb-2 text-levi-ink dark:text-white">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
                </div>
            </div>
        </div>
    );
}