import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Paintbrush, Video, Search, Megaphone, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Web Development",
    icon: Code,
    desc: "Custom websites and applications built with modern technologies.",
    features: [
      "Responsive & mobile-first design",
      "Custom web applications",
      "E-commerce solutions",
      "CMS integration",
      "Performance optimization",
      "API development & integration",
    ],
  },
  {
    title: "Graphic Design",
    icon: Paintbrush,
    desc: "Visual identities that speak to your audience and stand out.",
    features: [
      "Brand identity & logo design",
      "Marketing materials",
      "Social media graphics",
      "UI/UX design",
      "Print design",
      "Packaging design",
    ],
  },
  {
    title: "Video Editing",
    icon: Video,
    desc: "Compelling storytelling through professional video production.",
    features: [
      "Corporate videos",
      "Social media content",
      "Motion graphics",
      "Color grading",
      "Sound design",
      "Animation",
    ],
  },
  {
    title: "SEO Optimization",
    icon: Search,
    desc: "Climb the rankings and get found by your ideal customers.",
    features: [
      "Technical SEO audits",
      "Keyword research & strategy",
      "On-page optimization",
      "Content strategy",
      "Link building",
      "Local SEO",
    ],
  },
  {
    title: "SEM Marketing",
    icon: Megaphone,
    desc: "Targeted campaigns that convert clicks into customers.",
    features: [
      "Google Ads management",
      "Social media advertising",
      "Remarketing campaigns",
      "A/B testing",
      "Conversion tracking",
      "Budget optimization",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              Shaping your <span className="text-primary">digital future</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              We bundle our strengths and offer all expertise from a single point of contact. From concept to launch, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-secondary/30 text-primary flex items-center justify-center mb-6">
                    <service.icon size={28} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-foreground">
                        <CheckCircle size={18} className="text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-primary/5 rounded-[2rem] p-8 min-h-[350px] flex items-center justify-center relative overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="absolute top-10 left-10 w-24 h-24 bg-accent rounded-full opacity-50 blur-xl" />
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary rounded-full opacity-50 blur-xl" />
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                    <service.icon size={48} className="text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight mb-6">
            Ready to start your <span className="text-primary">digital journey</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Let's discuss how we can help transform your business with the right digital solutions.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full text-lg px-8 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
