import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <h3 className="text-2xl font-bold font-display text-primary mb-4 cursor-pointer">
                Digiweb<span className="text-foreground">.</span>
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming your digital ambitions into concrete success stories through design, code, and strategy.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-primary">Graphic Design</Link></li>
              <li><Link href="/services" className="hover:text-primary">Video Editing</Link></li>
              <li><Link href="/services" className="hover:text-primary">SEO & SEM</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/team" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/process" className="hover:text-primary">Our Process</Link></li>
              <li><Link href="/team" className="hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="text-sm text-muted-foreground not-italic space-y-2">
              <p>123 Digital Avenue</p>
              <p>Tech City, TC 90210</p>
              <p className="pt-2 text-foreground font-medium">hello@digiweb.agency</p>
              <p className="text-foreground font-medium">+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Digiweb Agency. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
