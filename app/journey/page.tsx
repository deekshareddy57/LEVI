import Button from "@/components/Button";
import {
    Map, Compass, Users, BarChart3,
    ArrowRight, ShieldCheck, FileText, CheckCircle, Flag
} from "lucide-react";
import Image from "next/image";

export default function Journey() {
    return (
        <div className="bg-levi-black text-white min-h-screen font-sans">

            {/* =========================================
          1. HERO SECTION & INITIATIVES BY NUMBERS
      ========================================= */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden text-center">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-levi-red/10 blur-[120px] rounded-full -z-10" />

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                    <Map className="w-4 h-4 text-levi-red" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">
                        Our Journey Forward
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Progress. Collaboration. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-levi-red to-levi-orange">
                        Growth.
                    </span>
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
                    A visual journey through our legal team evolution. From foundational work to future vision.
                </p>

                {/* INITIATIVES BY THE NUMBERS (Updated) */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Initiatives: By the Numbers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-white/5 py-10">
                        <Stat number="13" label="Finalized Projects" desc="Foundations for innovation." />
                        <Stat number="8+" label="Active Projects" desc="Generating insights now." />
                        <Stat number="5" label="Planned Projects" desc="Upcoming explorations." />
                    </div>
                </div>
            </section>

            {/* =========================================
          2. MEET THE TEAM (Restored Section)
      ========================================= */}
            <section className="py-24 px-6 bg-levi-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Meet the Team</h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                We are a collaborative, welcoming legal intern team working at the dynamic intersection of AI, robotics, and law. A frontier that requires both technical insight and ethical judgment.
                            </p>
                            <div className="grid grid-cols-1 gap-4">
                                <TeamPoint text="Research emerging technologies and legal landscapes" />
                                <TeamPoint text="Listen to diverse perspectives" />
                                <TeamPoint text="Understand complex challenges" />
                                <TeamPoint text="Shape innovation responsibly" />
                            </div>
                        </div>

                        {/* Visual representation of team/collaboration */}
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10">
                            <Image
                                src="/assets/statue.jpg" // Using statue as placeholder for "Team" vibe if no team photo
                                alt="Team Collaboration"
                                fill
                                className="object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-levi-black/80 to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <p className="text-2xl font-bold text-white">"Culture isn't just written,<br />it's lived."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
          3. OUR COMPASS (With Your Image)
      ========================================= */}
            <section className="py-24 px-6 relative overflow-hidden bg-levi-black">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: The Custom Compass Image */}
                    <div className="relative h-[500px] w-full rounded-full overflow-hidden border-4 border-white/5 shadow-[0_0_50px_rgba(255,77,77,0.1)] order-2 md:order-1">
                        <Image
                            src="/assets/compass.jpg" // <--- YOUR NEW IMAGE
                            alt="Our Compass"
                            fill
                            className="object-cover"
                        />
                        {/* Subtle overlay to blend it if the image is too bright */}
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Right: The Content */}
                    <div className="order-1 md:order-2">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <Compass className="w-6 h-6 text-levi-red" />
                            <span className="text-lg font-bold text-levi-red uppercase tracking-widest">Our Compass</span>
                        </div>
                        <h2 className="text-4xl font-extrabold mb-6">Thoughtful Guidance.<br />Responsible Innovation.</h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            We believe thoughtful legal guidance empowers innovation. We focus on supporting responsible innovation, ensuring clarity, and approaching every task with curiosity and precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================
          4. KEY MILESTONES ACHIEVED (Restored List)
      ========================================= */}
            <section className="py-24 px-6 bg-levi-dark border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold mb-4">Key Milestones Achieved</h2>
                        <p className="text-gray-400">The groundwork that makes everything possible.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <MilestoneCard
                            title="Legal & Ethics Ventures Institute"
                            desc="Prepared foundational content and materials supporting the Institute's mission and future initiatives."
                        />
                        <MilestoneCard
                            title="Corporate Structure"
                            desc="Research into flexible corporate structures, including Series LLC frameworks, to support future growth."
                        />
                        <MilestoneCard
                            title="Funding Landscape"
                            desc="Conducted initial research into potential U.S. & EU funding opportunities and partnership prospects."
                        />
                        <MilestoneCard
                            title="Internal Documentation"
                            desc="Conducted structured document review to identify clarity and consistency improvements."
                        />
                    </div>
                </div>
            </section>

            {/* =========================================
          5. THE PATH FORWARD (Timeline)
      ========================================= */}
            <section className="py-32 px-6 bg-levi-black">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-extrabold mb-4">The Next 12 Months</h2>
                        <p className="text-gray-400">Planned where possible. Open where necessary.</p>
                    </div>

                    <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 space-y-16">

                        <TimelineItem
                            phase="I"
                            title="Funding Pathways"
                            desc="Building on prior research to identify EU and US funding opportunities."
                            align="left"
                        />

                        <TimelineItem
                            phase="II"
                            title="Team Expansion"
                            desc="Growing the legal team to scale impact and support emerging initiatives."
                            align="right"
                        />

                        <TimelineItem
                            phase="III"
                            title="AI Legal Buddy"
                            desc="Concept development for a B2B/B2C AI Legal Buddy ecosystem."
                            align="left"
                            highlight
                        />

                        <TimelineItem
                            phase="IV"
                            title="European Entity"
                            desc="Laying the groundwork to unlock growth through a European entity."
                            align="right"
                        />

                        <TimelineItem
                            phase="V"
                            title="Cross-Team Collaboration"
                            desc="Amplifying collaboration across Space, Quantum, and CAIPO verticals."
                            align="left"
                        />

                    </div>
                </div>
            </section>

            {/* =========================================
          6. CTA
      ========================================= */}
            <section className="py-32 px-6 text-center">
                <h2 className="text-4xl font-extrabold mb-8">Join Us on This Journey</h2>
                <div className="flex justify-center gap-4">
                    <Button href="/contact">Talk to Us</Button>
                    <Button href="https://hephaestus.international/internships/ethical-legal-research-intern" variant="outline">Apply Now</Button>
                </div>
            </section>

        </div>
    );
}

// ------------------------------------------
// HELPER COMPONENTS
// ------------------------------------------

function Stat({ number, label, desc }: { number: string, label: string, desc: string }) {
    return (
        <div className="flex flex-col items-center p-4">
            <span className="text-5xl md:text-6xl font-extrabold text-white mb-2">{number}</span>
            <span className="text-xs font-bold text-levi-red uppercase tracking-widest mb-2">{label}</span>
            <span className="text-sm text-gray-500">{desc}</span>
        </div>
    );
}

function TeamPoint({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-levi-red rounded-full flex-shrink-0" />
            <p className="text-gray-300">{text}</p>
        </div>
    );
}

function MilestoneCard({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="p-8 bg-white/5 rounded-xl border border-white/5 hover:border-levi-red/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-levi-red" />
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function TimelineItem({ phase, title, desc, align, highlight }: any) {
    const isLeft = align === 'left';

    return (
        <div className={`relative flex flex-col md:flex-row items-center ${isLeft ? '' : 'md:flex-row-reverse'}`}>
            <div className={`absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-levi-black ${highlight ? 'bg-levi-red scale-125' : 'bg-white'}`} />
            <div className="hidden md:block w-1/2" />
            <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className={`p-6 rounded-xl border transition-all ${highlight ? 'bg-levi-red/10 border-levi-red' : 'bg-white/5 border-white/10 hover:border-white/30'}`}>
                    <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${highlight ? 'text-levi-red' : 'text-gray-500'}`}>
                        Phase {phase}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm">{desc}</p>
                </div>
            </div>
        </div>
    );
}