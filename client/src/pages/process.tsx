import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Compass, Rocket, Target, Users, BarChart } from "lucide-react";
import { Link } from "wouter";

const steps = [
  {
    step: "01",
    title: "Discovery & Research",
    desc: "We immerse ourselves in your business, industry, and goals. Through workshops and analysis, we understand your challenges and identify opportunities for digital growth.",
    icon: MapPin,
    details: ["Stakeholder interviews", "Competitive analysis", "Market research", "Goal definition"],
  },
  {
    step: "02",
    title: "Strategy & Planning",
    desc: "Using your goals as a starting point, we create a comprehensive digital strategy. Creativity meets data-driven insights to form your unique roadmap.",
    icon: Compass,
    details: ["Digital strategy", "Content planning", "Technical architecture", "Timeline & milestones"],
  },
  {
    step: "03",
    title: "Design & Development",
    desc: "Our team brings the strategy to life with stunning design and robust development. Every pixel and line of code is crafted with purpose.",
    icon: Target,
    details: ["UI/UX design", "Frontend development", "Backend systems", "Quality assurance"],
  },
  {
    step: "04",
    title: "Testing & Refinement",
    desc: "Before launch, we rigorously test everything. User testing, performance optimization, and fine-tuning ensure a flawless experience.",
    icon: Users,
    details: ["User testing", "Performance optimization", "Cross-browser testing", "Accessibility review"],
  },
  {
    step: "05",
    title: "Launch & Deployment",
    desc: "The moment plans become reality. We handle the technical launch while you focus on your business. A smooth handoff is our priority.",
    icon: Rocket,
    details: ["Deployment setup", "DNS & hosting", "Security configuration", "Go-live support"],
  },
  {
    step: "06",
    title: "Growth & Optimization",
    desc: "Post-launch, we continuously monitor, analyze, and optimize. Your digital presence evolves as your business grows.",
    icon: BarChart,
    details: ["Analytics monitoring", "SEO optimization", "Conversion tracking", "Ongoing improvements"],
  },
];

export default function Process() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">The Process</span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              Your route to <span className="text-primary">digital success</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              A transparent, proven approach that takes your project from idea to launch — and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {steps.map((item, i) => (
              <div key={i} className="grid lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-1 flex lg:flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    {item.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block w-0.5 h-full min-h-[100px] bg-border mx-auto" />
                  )}
                </div>

                <div className="lg:col-span-11">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-secondary/30 text-primary flex items-center justify-center mb-4">
                          <item.icon size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="flex items-center">
                        <ul className="space-y-3 w-full">
                          {item.details.map((detail, j) => (
                            <li key={j} className="flex items-center gap-3 text-foreground bg-background rounded-lg px-4 py-3">
                              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-white rounded-none">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight mb-6">
            "Good work starts with <span className="text-secondary">clear agreements</span> without surprises."
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
            Our transparent process ensures you always know what's happening and what's coming next.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 rounded-full text-lg">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
