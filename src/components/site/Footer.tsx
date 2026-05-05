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
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
];

const productLinks = [
  { label: "Flight Control Card", to: "/products" },
  { label: "Frames", to: "/products" },
  { label: "Propellers", to: "/products" },
  { label: "Swarm GCS", to: "/products" },
  { label: "Custom Solutions", to: "/contact" },
  { label: "White Labelling", to: "/contact" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Large faint watermark */}
      <div className="footer-watermark" aria-hidden="true">
        KILLIS BIRD
      </div>

      {/* Main Footer Grid */}
      <div className="container-edge relative z-10 pt-16 md:pt-24 pb-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: Logo + Info */}
        <div className="space-y-6 lg:col-span-1">
          <img src={logoImg} alt="Killis Bird Logo" className="h-10 w-auto object-contain" />
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            Indigenous UAV systems built for precision, intelligence, and control.
          </p>
          <div className="space-y-3 text-sm text-white/60">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-neon mt-0.5 shrink-0" />
              <span className="leading-relaxed">
                Plot No.107, Pollupalli SIDCO Industrial Estate,<br />
                Gangasandiram, Krishnagiri 635115.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-neon shrink-0" />
              <a href="tel:+917200743683" className="hover:text-neon transition-colors font-mono tracking-widest text-xs">
                +91 72007 43683
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-neon shrink-0" />
              <a href="mailto:info@killisbird.com" className="hover:text-neon transition-colors font-mono tracking-widest text-xs">
                info@killisbird.com
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="text-sm font-mono tracking-widest text-white/40 mb-6 uppercase">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-white/60 hover:text-neon transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3: Products */}
        <div>
          <h3 className="text-sm font-mono tracking-widest text-white/40 mb-6 uppercase">
            Products
          </h3>
          <div className="flex flex-col gap-3">
            {productLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-white/60 hover:text-neon transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 4: Social Media */}
        <div>
          <h3 className="text-sm font-mono tracking-widest text-white/40 mb-6 uppercase">
            Connect
          </h3>
          <div className="flex flex-col gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center gap-3 group"
              >
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-neon group-hover:border-neon transition-all">
                  <Icon size={16} />
                </span>
                <span className="text-sm text-white/50 group-hover:text-white transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-edge relative z-10 border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-mono tracking-widest text-white/40">
        <div>COPYRIGHT © 2026 KILLIS BIRD, ALL RIGHTS RESERVED.</div>
        <div>
          DEVELOPED BY <span className="text-white/80 font-bold">WIZMO TECH</span>
        </div>
      </div>
    </footer>
  );
}
