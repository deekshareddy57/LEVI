import Button from "@/components/Button";
import {
    Mail, MessageSquare, Clock, CheckCircle2,
    ArrowRight, Users, GraduationCap, Building2, Zap
} from "lucide-react";

export default function Contact() {
    return (
        <div className="bg-white dark:bg-levi-black text-levi-ink dark:text-white min-h-screen font-sans transition-colors duration-300">

            {/* 1. HEADER */}
            <section className="relative pt-48 pb-20 px-6 text-center overflow-hidden bg-gray-50 dark:bg-levi-black transition-colors">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-levi-red/5 blur-[120px] rounded-full -z-10" />

                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 mb-8">
                        <Mail className="w-4 h-4 text-levi-red" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-levi-ink dark:text-white">
                            Get In Touch
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-levi-ink dark:text-white">
                        Questions? <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-levi-red to-levi-orange">
                            We've Got Answers.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Whether you're exploring our programs or looking to collaborate. We're here to help.
                    </p>
                </div>
            </section>

            {/* 2. MAIN CONTENT */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT COLUMN */}
                    <div className="space-y-16">
                        <div>
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-levi-ink dark:text-white">
                                <span className="w-8 h-1 bg-levi-red rounded-full"></span>
                                Why Contact Us?
                            </h2>
                            <div className="grid gap-6">
                                <InfoCard icon={GraduationCap} title="Program Guidance" desc="Find the right track based on your background and goals." />
                                <InfoCard icon={Users} title="Partnership Inquiries" desc="Collaboration with universities, organizations, and founders." />
                                <InfoCard icon={Building2} title="Practical Support" desc="Questions about deliverables, sprints, and what you will build." />
                            </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-6 text-levi-ink dark:text-white">What Happens Next?</h3>
                            <div className="space-y-4">
                                <StepItem icon={Clock} text="Our team typically responds within 24 to 48 business hours." />
                                <StepItem icon={CheckCircle2} text="You will receive a confirmation message." />
                                <StepItem icon={MessageSquare} text="If it's a program fit question, we may suggest a short call." />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: FORM */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-levi-red/10 to-levi-orange/5 blur-3xl -z-10" />

                        <form className="bg-white dark:bg-black/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-xl relative z-10 transition-colors">
                            <h3 className="text-2xl font-bold mb-2 text-levi-ink dark:text-white">Send us a Message</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                                Please share as much detail as you can so we can respond quickly.
                            </p>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input label="First Name" placeholder="Jane" />
                                    <Input label="Last Name" placeholder="Doe" />
                                </div>
                                <Input label="Email Address" placeholder="jane@example.com" type="email" />

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Inquiry Type</label>
                                    <select className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg p-4 text-gray-900 dark:text-white focus:outline-none focus:border-levi-red transition-colors">
                                        <option>General Inquiry</option>
                                        <option>Program Application</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                                    <textarea rows={5} className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg p-4 text-gray-900 dark:text-white focus:outline-none focus:border-levi-red transition-colors" placeholder="How can we help?"></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-gradient-to-r from-levi-red to-levi-orange text-white font-bold rounded-lg shadow-lg uppercase tracking-widest text-sm flex items-center justify-center gap-2 group">
                                    Send Message
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 3. FOOTER CTA */}
            <section className="py-24 px-6 text-center border-t border-gray-200 dark:border-white/5">
                <h2 className="text-3xl font-extrabold mb-6 text-levi-ink dark:text-white">Don't Wait.</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                    Reach out today and let's build what comes after the bar.
                </p>
            </section>

        </div>
    );
}

// Helpers
function Input({ label, placeholder, type = "text" }: any) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">{label}</label>
            <input type={type} className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg p-4 text-gray-900 dark:text-white focus:outline-none focus:border-levi-red transition-colors" placeholder={placeholder} />
        </div>
    );
}

function InfoCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="flex gap-5 items-start">
            <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-white/10">
                <Icon className="w-6 h-6 text-levi-red" />
            </div>
            <div>
                <h3 className="font-bold text-lg text-levi-ink dark:text-white mb-1">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function StepItem({ icon: Icon, text }: any) {
    return (
        <div className="flex gap-4 items-start">
            <Icon className="w-5 h-5 text-levi-orange flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 dark:text-gray-300 text-sm">{text}</p>
        </div>
    );
}