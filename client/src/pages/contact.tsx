import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "web-development",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceLabels: Record<string, string> = {
      "web-development": "Web Development",
      "graphic-design": "Graphic Design",
      "video-editing": "Video Editing",
      "seo": "SEO Optimization",
      "sem": "SEM Marketing",
    };

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      if (!accessKey) {
        throw new Error("Form service is not configured. Please contact us directly at hello@digiweb-agency.com");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: "Digiweb Agency Website",
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not provided",
          service: serviceLabels[formData.service] || formData.service,
          message: formData.message,
          replyto: formData.email,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Thanks for reaching out! We'll get back to you soon.");
      setFormData({ name: "", email: "", company: "", service: "web-development", message: "" });
    } catch (error: any) {
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, label: "Visit Us", value: "123 Digital Avenue, Tech City, TC 90210" },
    { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
    { icon: Mail, label: "Email Us", value: "hello@digiweb-agency.com" },
    { icon: Clock, label: "Working Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Contact Us</span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              Let's start <span className="text-primary">something great</span> together
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Have a project in mind? We'd love to hear about it. Get in touch and let's make it happen.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-border focus:border-primary h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-border focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground font-medium">Company (optional)</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="border-border focus:border-primary h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-foreground font-medium">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background text-foreground h-12"
                      >
                        <option value="web-development">Web Development</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="video-editing">Video Editing</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="sem">SEM Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">Tell us about your project</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Share your vision, goals, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-border focus:border-primary min-h-[160px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full rounded-full bg-primary hover:bg-primary/90 h-14 text-lg"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>Send Message <Send className="ml-2 w-5 h-5" /></>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{info.label}</h3>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </div>
              ))}

              <div className="bg-foreground text-white rounded-2xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">Quick Response</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We typically respond within 24 hours. For urgent inquiries, give us a call and we'll be happy to help right away.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
