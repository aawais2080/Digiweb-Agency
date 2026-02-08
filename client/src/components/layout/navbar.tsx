import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-display text-primary flex items-center gap-1">
          Digiweb<span className="text-foreground">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                location === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button className="rounded-full px-6 font-semibold">Get Started</Button>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium py-2 ${
                location === link.href ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
