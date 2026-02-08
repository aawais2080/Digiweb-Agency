import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Paintbrush, Video, Search, Megaphone } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_doodle_line_art_background_for_hero_section.png";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <ContactForm open={contactOpen} onOpenChange={setContactOpen} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              Transform your <span className="text-primary">digital ambitions</span> into reality.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              No magic, just concrete creative solutions. We build online success stories together with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => setContactOpen(true)}
                className="rounded-full text-lg px-8 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                data-testid="button-start-project"
              >
                Start a Project
              </Button>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full text-lg px-8 h-14 border-2 hover:bg-white/50">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Abstract decorative elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-20 w-48 h-48 bg-accent/50 rounded-full blur-3xl -z-10" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Shaping your <br/>digital future
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md pb-2">
              We bundle our strengths and offer all expertise from a single point of contact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Web Development", icon: Code, desc: "Custom websites and applications built with modern technologies." },
              { title: "Graphic Design", icon: Paintbrush, desc: "Visual identities that speak to your audience and stand out." },
              { title: "Video Editing", icon: Video, desc: "Compelling storytelling through professional video production." },
              { title: "SEO Optimization", icon: Search, desc: "Climb the rankings and get found by your ideal customers." },
              { title: "SEM Marketing", icon: Megaphone, desc: "Targeted campaigns that convert clicks into customers." },
            ].map((service, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white group cursor-pointer overflow-hidden" data-testid={`card-service-${i}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-secondary/30 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.desc}</p>
                  <Link href="/services" className="mt-6 flex items-center text-primary font-medium text-sm group-hover:underline">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">The Process</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Your route to <br/>digital success
              </h2>
              
              <div className="space-y-12 relative">
                {/* Vertical line connecting steps */}
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-border -z-10" />

                {[
                  { step: "01", title: "Map your route", desc: "We immerse ourselves in your business and goals. Together we explore the best digital possibilities." },
                  { step: "02", title: "Navigation to success", desc: "Using your goals as a starting point, we create a unique path. Creativity meets strategy." },
                  { step: "03", title: "Adventurous realization", desc: "The moment plans become reality. We run through the process together to achieve your goals." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6" data-testid={`process-step-${i}`}>
                    <div className="w-10 h-10 rounded-full bg-background border-2 border-secondary text-secondary-foreground font-bold flex items-center justify-center shrink-0 z-10">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 rounded-[2rem] p-8 md:p-12 min-h-[500px] flex items-center justify-center relative">
               {/* Abstract illustration of "process" */}
               <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                 <div className="absolute top-10 left-10 w-24 h-24 bg-accent rounded-full opacity-50 blur-xl" />
                 <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary rounded-full opacity-50 blur-xl" />
               </div>
               
               <div className="relative z-10 grid grid-cols-2 gap-4">
                 {[1,2,3,4].map((n) => (
                   <div key={n} className="bg-white p-4 rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-300">
                     <div className="w-full aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-muted-foreground font-mono text-xs">IMG_0{n}</span>
                     </div>
                     <div className="h-2 w-2/3 bg-muted rounded mb-1" />
                     <div className="h-2 w-1/3 bg-muted rounded" />
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-secondary/10 absolute inset-0 rounded-[2rem] -rotate-3 scale-95" />
              <div className="bg-muted/30 absolute inset-0 rounded-[2rem] rotate-2 scale-95" />
              <div className="bg-white border border-border p-8 rounded-[2rem] relative shadow-lg grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Alex", role: "Dev" }, { name: "Sarah", role: "Design" }, 
                  { name: "Mike", role: "SEO" }, { name: "Lisa", role: "Marketing" },
                  { name: "Tom", role: "Video" }, { name: "Emma", role: "Strategy" }
                ].map((person, i) => (
                  <div key={i} className="flex flex-col items-center p-4 rounded-xl hover:bg-background transition-colors" data-testid={`team-member-${i}`}>
                    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-3">
                      {person.name[0]}
                    </div>
                    <span className="font-bold text-foreground text-sm">{person.name}</span>
                    <span className="text-xs text-muted-foreground">{person.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Team</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Connect and grow <br /> through our ecosystem
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Digiweb is an online ecosystem, a group of specialists in the field of online visibility and findability. We bundle our forces and offer all expertise from a single point of contact.
              </p>
              <Link href="/team">
                <Button variant="outline" className="rounded-full">
                  Meet the Team <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            "Good work starts with <span className="text-primary">clear agreements</span> without surprises."
          </h2>
          <div className="mt-12">
            <Link href="/process">
              <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 font-semibold">
                More about our approach <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-foreground text-white rounded-[2rem] p-8 md:p-16 overflow-hidden relative">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Your online success story starts here.
                </h2>
                <p className="text-white/70 mb-8 text-lg">
                  No magic, but concrete creative solutions that make you shine online.
                </p>
                <Button 
                  size="lg" 
                  onClick={() => setContactOpen(true)}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 rounded-full text-lg"
                  data-testid="button-get-in-touch"
                >
                  Get in touch
                </Button>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="w-64 h-64 border-4 border-white/10 rounded-full flex items-center justify-center relative">
                   <div className="absolute inset-0 border-4 border-dashed border-white/20 rounded-full animate-spin-slow" style={{animationDuration: '10s'}} />
                   <div className="w-48 h-48 bg-primary rounded-full flex items-center justify-center shadow-2xl">
                      <ArrowRight size={48} className="text-white -rotate-45" />
                   </div>
                </div>
              </div>
            </div>
            
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
