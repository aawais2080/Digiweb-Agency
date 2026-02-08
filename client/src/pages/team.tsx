import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "wouter";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    bio: "Full-stack developer with 10+ years of experience building scalable web applications.",
    initials: "AJ",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    bio: "Award-winning designer passionate about creating memorable brand experiences.",
    initials: "SC",
    color: "bg-accent/30 text-accent-foreground",
  },
  {
    name: "Mike Rivera",
    role: "SEO Specialist",
    bio: "Data-driven SEO expert who has helped businesses achieve top rankings consistently.",
    initials: "MR",
    color: "bg-secondary/30 text-secondary-foreground",
  },
  {
    name: "Lisa Park",
    role: "Marketing Strategist",
    bio: "Strategic marketer with a track record of successful campaigns across multiple channels.",
    initials: "LP",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Tom Wilson",
    role: "Video Producer",
    bio: "Storyteller at heart with expertise in corporate videos and motion graphics.",
    initials: "TW",
    color: "bg-accent/30 text-accent-foreground",
  },
  {
    name: "Emma Davis",
    role: "Project Manager",
    bio: "Organized and proactive, ensuring every project runs smoothly from start to finish.",
    initials: "ED",
    color: "bg-secondary/30 text-secondary-foreground",
  },
];

const values = [
  { title: "Collaboration", desc: "We work as one team — with you and with each other." },
  { title: "Transparency", desc: "No surprises. Clear communication at every step." },
  { title: "Quality", desc: "We never cut corners. Every detail matters." },
  { title: "Innovation", desc: "Constantly exploring new ways to solve problems." },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Team</span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              Connect and grow through our <span className="text-primary">ecosystem</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Digiweb is an online ecosystem — a group of specialists in the field of online visibility and findability. We bundle our forces and offer all expertise from a single point of contact.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                <CardContent className="p-8">
                  <div className={`w-20 h-20 rounded-full ${member.color} flex items-center justify-center text-2xl font-bold mb-6`}>
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex gap-3">
                    <button className="w-9 h-9 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                      <Linkedin size={16} />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                      <Twitter size={16} />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                      <Mail size={16} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">What Drives Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-background hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight mb-6">
            Want to join our <span className="text-primary">team</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            We're always looking for talented people who share our passion for digital excellence.
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
