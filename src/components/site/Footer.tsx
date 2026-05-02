import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="absolute inset-x-0 -top-px divider-line" />
      <div className="container-edge py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 border border-neon grid place-items-center">
              <div className="w-3 h-3 bg-neon/60" />
            </div>
            <div>
              <div className="text-base font-semibold tracking-wide">KILLIS BIRD</div>
              <div className="font-mono text-[9px] text-muted-foreground tracking-[0.3em]">IMAGINE · IDEATE · INNOVATIVE</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            We provide high-quality drones, expert support, and reliable after-sales service to help businesses and enthusiasts explore limitless aerial possibilities safely and professionally.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2.5"><MapPin size={14} className="text-neon mt-0.5 shrink-0" />Plot No.107, Pollupalli SIDCO Industrial Estate, Gangasandiram, Krishnagiri – 635115, TN, India</div>
            <div className="flex items-center gap-2.5"><Phone size={14} className="text-neon" />+91 72007 43683</div>
            <div className="flex items-center gap-2.5"><Mail size={14} className="text-neon" />info@killisbird.com</div>
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-neon mb-4">// NAVIGATION</div>
          <ul className="space-y-2.5 text-sm">
            {[["/", "Home"], ["/about", "About"], ["/products", "Systems"], ["/blog", "Intel"], ["/careers", "Careers"], ["/contact", "Contact"]].map(([to, label]) => (
              <li key={to}><Link to={to} className="text-muted-foreground hover:text-neon transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-neon mb-4">// LEGAL</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/privacy" className="text-muted-foreground hover:text-neon transition">Privacy Policy</Link></li>
            <li><Link to="/privacy" className="text-muted-foreground hover:text-neon transition">Terms of Use</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-neon transition">Request a Quote</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="container-edge py-5 flex flex-col md:flex-row gap-3 justify-between text-[11px] font-mono text-muted-foreground tracking-wider">
          <div>© 2026 KILLIS BIRD LLP · ALL RIGHTS RESERVED</div>
          <div>DEVELOPED BY <a href="https://wizmotech.in" className="text-neon hover:underline">WIZMO TECH</a></div>
        </div>
      </div>
    </footer>
  );
}
