import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactForm({ open, onOpenChange }: ContactFormProps) {
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
      onOpenChange(false);
    } catch (error: any) {
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Let's work together</DialogTitle>
          <DialogDescription>
            Tell us about your project and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">Your Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              data-testid="input-name"
              className="border-border focus:border-primary"
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
              data-testid="input-email"
              className="border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground font-medium">Company (optional)</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              data-testid="input-company"
              className="border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="text-foreground font-medium">Service Interested In</Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              data-testid="select-service"
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background text-foreground"
            >
              <option value="web-development">Web Development</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="video-editing">Video Editing</option>
              <option value="seo">SEO Optimization</option>
              <option value="sem">SEM Marketing</option>
            </select>
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
              data-testid="textarea-message"
              className="border-border focus:border-primary min-h-32 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 rounded-full"
              data-testid="button-cancel"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-full bg-primary hover:bg-primary/90"
              data-testid="button-submit"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
