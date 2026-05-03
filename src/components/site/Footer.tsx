import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import logoImg from "@/assets/KILLIS BIRD - LOGO.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Support", to: "/support" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
  { label: "Request a Quote", to: "/contact" },
  { label: "Privacy Policy", to: "/" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 md:py-24 border-t border-white/10">
      <div className="container-edge grid gap-16 lg:grid-cols-12 mb-16">
        
        {/* Left: Company Info & Address */}
        <div className="lg:col-span-5 space-y-8">
          <img src={logoImg} alt="Killis Bird Logo" className="h-10 md:h-12 w-auto object-contain" />
          
          <div className="space-y-4 text-sm text-white/60">
            <div className="flex items-start gap-4">
              <MapPin size={18} className="text-neon mt-0.5 shrink-0" />
              <span className="leading-relaxed max-w-sm">
                Plot No.107,
                <br />
                Pollupalli SIDCO Industrial Estate,
                <br />
                Gangasandiram, Krishnagiri 635115.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={18} className="text-neon shrink-0" />
              <a href="tel:+917200743683" className="hover:text-neon transition-colors font-mono tracking-widest text-xs">
                +91 72007 43683
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={18} className="text-neon shrink-0" />
              <a href="mailto:info@killisbird.com" className="hover:text-neon transition-colors font-mono tracking-widest text-xs">
                info@killisbird.com
              </a>
            </div>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="lg:col-span-4 lg:px-8">
          <h3 className="text-sm font-mono tracking-widest text-white/40 mb-8 uppercase">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            {quickLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.to} 
                className="text-white/70 hover:text-neon transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Socials */}
        <div className="lg:col-span-3 lg:text-right">
          <h3 className="text-sm font-mono tracking-widest text-white/40 mb-8 uppercase">
            Connect
          </h3>
          <div className="flex lg:flex-col gap-4 lg:items-end">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-neon hover:text-black hover:border-neon transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-neon hover:text-black hover:border-neon transition-all"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-neon hover:text-black hover:border-neon transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-neon hover:text-black hover:border-neon transition-all"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="container-edge border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono tracking-widest text-white/40">
        <div>COPYRIGHT © 2026 KILLIS BIRD, ALL RIGHTS RESERVED.</div>
        <div>
          DEVELOPED BY <span className="text-white/80 font-bold">WIZMO TECH</span>
        </div>
      </div>
    </footer>
  );
}
