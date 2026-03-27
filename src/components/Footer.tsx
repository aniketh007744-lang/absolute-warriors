import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
            <span className="font-display text-lg font-bold tracking-wider">
              ABSOLUTE <span className="text-primary">WARRIOR'S</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-2">
            Barbil's premium fitness destination. Forge your body, conquer your limits.
          </p>
          <p className="text-muted-foreground text-sm">
            <strong className="text-foreground">Owners:</strong> Wasim Akhtar & Anjali Mohanty
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            <strong className="text-foreground">Phone:</strong>{" "}
            <a href="tel:+919776688832" className="hover:text-primary transition-colors">+91 97766 88832</a>
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Facilities", "Plans", "Gallery", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/train_with_wasim/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Instagram size={18} />
            </a>
            {[Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="font-display text-sm tracking-widest uppercase mb-2">Timings</h4>
            <p className="text-muted-foreground text-sm">Morning: 5:00 AM – 11:00 AM</p>
            <p className="text-muted-foreground text-sm">Evening: 4:00 PM – 9:00 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Absolute Warrior's Fitness Center, Barbil. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
