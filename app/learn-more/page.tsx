import Button from "@/components/Button";
import {
    BookOpen, Code2, Briefcase, CheckCircle2,
    Clock, Globe, Laptop, HelpCircle, ArrowRight
} from "lucide-react";

export default function LearnMore() {
    return (
        <div className="bg-white dark:bg-levi-black text-levi-ink dark:text-white min-h-screen font-sans transition-colors duration-300">

            {/* =========================================
          1. HERO SECTION: THE GAP
      ========================================= */}
            <section className="relative pt-48 pb-32 px-6 text-center overflow-hidden bg-gray-50 dark:bg-levi-black transition-colors">
                {/* Background Blob */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-levi-red/5 blur-[120px] rounded-full -z-10" />

                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 mb-8">
                        <BookOpen className="w-4 h-4 text-levi-red" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-levi-ink dark:text-white">
                            The Methodology
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-levi-ink dark:text-white">
                        The Gap Between <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-levi-red to-levi-orange">
                            Law School & Real Life.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Law school teaches you how to <em>think</em> like a lawyer. <br />
                        We teach you how to <strong>build</strong> like one.
                    </p>
                </div>
            </section>

            {/* =========================================
          2. THE THREE PILLARS
      ========================================= */}
            <section className="py-24 px-6 bg-white dark:bg-levi-dark border-y border-gray-200 dark:border-white/5 transition-colors">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold mb-4 text-levi-ink dark:text-white">The Hybrid Model</h2>
                        <p className="text-gray-600 dark:text-gray-400">To succeed in the future of law, you need to be trilingual.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <PillarCard
                            icon={BookOpen}
                            title="Legal Rigor"
                            subtitle="Think Like an Attorney"
                            desc="We don't skip the law. We dive deep into regulation, compliance, ethics, and case law. You must understand the rules before you can automate them."
                        />

                        {/* Pillar 2 */}
                        <PillarCard
                            icon={Code2}
                            title="Technical Fluency"
                            subtitle="Operate Like a Product Team"
                            desc="You will use Jira, work in Sprints, and understand API integrations. You don't need to be a coder, but you must know how to speak to one."
                        />

                        {/* Pillar 3 */}
                        <PillarCard
                            icon={Briefcase}
                            title="Business Execution"
                            subtitle="Execute Like an Entrepreneur"
                            desc="A legal solution that doesn't solve a business problem is just a hobby. We focus on ROI, scalability, and user adoption."
                        />
                    </div>
                </div>
            </section>

            {/* =========================================
          3. HOW IT WORKS (THE SPRINT)
      ========================================= */}
            <section className="py-32 px-6 bg-gray-50 dark:bg-levi-black transition-colors">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-4xl font-extrabold mb-6 text-levi-ink dark:text-white">
                            Stop "Studying." <br /> Start Shipping.
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Traditional internships have you fetching coffee or doing busy work. At LEVI, you are dropped into a <strong>Live Venture Simulation</strong>.
                        </p>

                        <div className="space-y-6">
                            <FeatureItem text="2-Week Agile Sprints" desc="Move fast. Iterate. Deliver value every 14 days." />
                            <FeatureItem text="Real Stakeholders" desc="Present your work to founders, not just professors." />
                            <FeatureItem text="Portfolio of Deliverables" desc="Leave with a GitHub repo or a slide deck, not just a resume line." />
                        </div>
                    </div>

                    {/* Visual Representation of a Sprint */}
                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl">
                        <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-white/10 pb-4">
                            <span className="font-mono text-sm text-levi-red font-bold">CURRENT SPRINT: 4</span>
                            <span className="font-mono text-xs text-gray-500">STATUS: ACTIVE</span>
                        </div>

                        <div className="space-y-4">
                            <SprintTask status="Done" title="Map Regulatory Landscape for AI Medical Bot" />
                            <SprintTask status="In Progress" title="Draft Terms of Service for SaaS Platform" />
                            <SprintTask status="Review" title="Design User Flow for Ethics Intake Form" />
                            <SprintTask status="Todo" title="API Documentation Review" />
                        </div>
                    </div>

                </div>
            </section>

            {/* =========================================
          4. WHO IS THIS FOR? (Tracks)
      ========================================= */}
            <section className="py-24 px-6 bg-white dark:bg-levi-dark transition-colors">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold mb-4 text-levi-ink dark:text-white">Choose Your Track</h2>
                        <p className="text-gray-600 dark:text-gray-400">We tailor the experience to where you are in your career.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <TrackCard
                            title="The Explorer Track"
                            audience="Students & Recent Grads"
                            desc="You are curious about legal tech but have zero experience. We focus on foundational skills, career mapping, and your first real project."
                        />
                        <TrackCard
                            title="The Builder Track"
                            audience="Career Changers & Technologists"
                            desc="You have experience (in law or tech) but want to pivot. We focus on portfolio building, leadership, and launching a venture."
                        />
                    </div>
                </div>
            </section>

            {/* =========================================
          5. FAQ
      ========================================= */}
            <section className="py-24 px-6 bg-gray-50 dark:bg-levi-black border-t border-gray-200 dark:border-white/5 transition-colors">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-extrabold mb-12 text-center text-levi-ink dark:text-white">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        <FAQItem
                            q="Is this a paid program?"
                            a="We offer both paid fellowships and credit-based internships depending on university partnerships. Contact us for current cohort details."
                        />
                        <FAQItem
                            q="Do I need to know how to code?"
                            a="No. But you must be willing to learn *about* code. We use 'No-Code' tools extensively so you can build without being a software engineer."
                        />
                        <FAQItem
                            q="Is it fully remote?"
                            a="Yes. We are a remote-first organization with a global team. We use Slack, Zoom, and Notion to collaborate synchronously and asynchronously."
                        />
                        <FAQItem
                            q="What is the time commitment?"
                            a="Typical cohorts require 10-15 hours per week. It is designed to be manageable alongside law school or a full-time job."
                        />
                    </div>
                </div>
            </section>

            {/* =========================================
          6. FINAL CTA
      ========================================= */}
            <section className="py-32 px-6 text-center">
                <h2 className="text-4xl font-extrabold mb-6 text-levi-ink dark:text-white">Ready to break the mold?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                    Applications for the next cohort are open. Spots are limited to ensure hands-on mentorship.
                </p>
                <div className="flex justify-center gap-4">
                    <Button href="https://hephaestus.international/internships/ethical-legal-research-intern">Apply Now</Button>
                    <Button href="/contact" variant="outline">Contact Admissions</Button>
                </div>
            </section>

        </div>
    );
}

// ------------------------------------------
// HELPER COMPONENTS
// ------------------------------------------

function PillarCard({ icon: Icon, title, subtitle, desc }: any) {
    return (
        <div className="p-8 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-levi-red transition-all group">
            <div className="w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-levi-red" />
            </div>
            <h3 className="text-xl font-bold mb-1 text-levi-ink dark:text-white">{title}</h3>
            <p className="text-xs font-bold text-levi-orange uppercase tracking-wider mb-4">{subtitle}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function FeatureItem({ text, desc }: any) {
    return (
        <div className="flex gap-4 items-start">
            <CheckCircle2 className="w-6 h-6 text-levi-red flex-shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-lg text-levi-ink dark:text-white">{text}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
            </div>
        </div>
    );
}

function SprintTask({ status, title }: any) {
    const getStatusColor = (s: string) => {
        switch (s) {
            case 'Done': return 'bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30';
            case 'In Progress': return 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30';
            case 'Review': return 'bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30';
            default: return 'bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-500/30';
        }
    };

    return (
        <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-black rounded-lg border border-gray-200 dark:border-white/5">
            <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded border ${getStatusColor(status)}`}>
                {status}
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">{title}</span>
        </div>
    );
}

function TrackCard({ title, audience, desc }: any) {
    return (
        <div className="p-8 border border-gray-200 dark:border-white/10 rounded-2xl bg-gray-50 dark:bg-levi-black hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-2 text-levi-ink dark:text-white">{title}</h3>
            <div className="inline-block bg-levi-red/10 text-levi-red text-xs font-bold px-3 py-1 rounded-full mb-6">
                For: {audience}
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
            <div className="mt-8 flex items-center gap-2 text-sm font-bold text-levi-ink dark:text-white group cursor-pointer hover:text-levi-red transition-colors">
                View Curriculum <ArrowRight className="w-4 h-4" />
            </div>
        </div>
    );
}

function FAQItem({ q, a }: any) {
    return (
        <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all">
            <h3 className="font-bold text-lg mb-2 text-levi-ink dark:text-white flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-levi-orange" />
                {q}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-8">{a}</p>
        </div>
    );
}