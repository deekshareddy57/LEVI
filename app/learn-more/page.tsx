import Button from "@/components/Button";
import { CheckCircle2, ArrowRight, BookOpen, Users, Target, Zap } from "lucide-react";

export default function LearnMore() {
    return (
        <div className="bg-levi-black text-white min-h-screen font-sans">

            {/* 1. Header */}
            <section className="relative pt-32 pb-20 px-6 text-center border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Learn More About <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-levi-red to-levi-orange">
                            Legal & Ethics Ventures Institute
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        See how we combine legal rigor, ethics, and AI to help you build the next generation of solutions.
                        If you want work that moves from concept to delivery, you are in the right place.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button href="https://hephaestus.international/internships/ethical-legal-research-intern">Apply Now</Button>
                        <Button href="/contact" variant="outline">Talk to Us</Button>
                    </div>
                </div>
            </section>

            {/* 2. What We Focus On */}
            <section className="py-24 px-6 bg-levi-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Where Learning Meets Delivery</h2>
                        <p className="text-gray-400">Every track is built around real deliverables: research, drafting, compliance, automation, and product validation.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Target}
                            title="Applied Experience"
                            desc="Work on live legal, ethics, and AI projects that ship—not simulations."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Cross-functional Skills"
                            desc="Blend research, drafting, product thinking, and automation to deliver useful outcomes."
                        />
                        <FeatureCard
                            icon={Users}
                            title="Mentorship & Feedback"
                            desc="Get guidance from practitioners and founders with clear expectations for every sprint."
                        />
                    </div>
                </div>
            </section>

            {/* 3. Who Thrives Here */}
            <section className="py-24 px-6 bg-levi-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-levi-red/5 blur-3xl -z-10" />

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
                            People Who Want <br /><span className="text-levi-red">Real Momentum.</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            If you are ready to ship and learn fast, you will fit right in.
                        </p>
                        <div className="space-y-4">
                            <ListItem text="Law students and grads who want modern, applied experience." />
                            <ListItem text="Professionals pivoting into AI, compliance, or tech-enabled practice." />
                            <ListItem text="Builders and founders seeking legal-ops rigor for their products." />
                        </div>
                    </div>

                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">How It Works</h3>
                        <div className="space-y-6">
                            <Step number="1" text="Share your goals and background so we can place you on the right track." />
                            <Step number="2" text="Match with a project that needs legal, ethics, or compliance expertise." />
                            <Step number="3" text="Build alongside mentors, ship deliverables, and iterate with real feedback." />
                            <Step number="4" text="Showcase outcomes, capture portfolio artifacts, and plan your next move." />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. What You Gain */}
            <section className="py-24 px-6 bg-levi-dark border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Outcomes That Move You Forward</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        <GainCard text="Portfolio-ready work that demonstrates real-world impact." />
                        <GainCard text="Fluency with AI tools, automation, and compliance workflows." />
                        <GainCard text="Confidence collaborating with founders, operators, and technical teams." />
                        <GainCard text="A network of mentors and peers focused on the future of law and ethics." />
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 px-6 text-center bg-gradient-to-b from-levi-black to-gray-900">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Start?</h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-10">
                    Tell us your goals. We will recommend the right track and set you up to deliver meaningful work from day one.
                </p>
                <Button href="https://hephaestus.international/internships/ethical-legal-research-intern" className="bg-levi-red text-white border-none px-12 py-4 text-lg">
                    Apply Now
                </Button>
            </section>

        </div>
    );
}

// Sub-components for this page
function FeatureCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="p-8 bg-white/5 rounded-xl border border-white/5 hover:border-levi-red/50 transition-colors">
            <Icon className="w-10 h-10 text-levi-red mb-6" />
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-400">{desc}</p>
        </div>
    );
}

function ListItem({ text }: { text: string }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="w-2 h-2 mt-2.5 bg-levi-red rounded-full flex-shrink-0" />
            <p className="text-lg text-gray-300">{text}</p>
        </div>
    );
}

function Step({ number, text }: { number: string, text: string }) {
    return (
        <div className="flex gap-4">
            <span className="font-bold text-levi-red text-xl">{number}</span>
            <p className="text-gray-300">{text}</p>
        </div>
    );
}

function GainCard({ text }: { text: string }) {
    return (
        <div className="flex gap-4 items-center p-6 bg-levi-black rounded-lg border border-white/5">
            <CheckCircle2 className="w-6 h-6 text-levi-red flex-shrink-0" />
            <p className="font-medium">{text}</p>
        </div>
    );
}