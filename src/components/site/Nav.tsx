import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Systems" },
  { to: "/blog", label: "Intel" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass-strong border-b border-border/40">
        <div className="container-edge flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-7 h-7 grid place-items-center">
              <div className="absolute inset-0 rounded-sm border border-neon" />
              <div className="absolute inset-1 rounded-sm bg-neon/20 group-hover:bg-neon/40 transition" />
              <div className="absolute inset-0 animate-pulse-ring rounded-sm" />
            </div>
            <div className="leading-none">
              <div className="text-[15px] font-semibold tracking-wide">KILLIS BIRD</div>
              <div className="font-mono text-[9px] text-muted-foreground tracking-[0.3em] mt-0.5">CLASSIFIED · LLP</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-neon" }}
                className="font-mono text-[11px] tracking-[0.2em] uppercase px-3 py-2 text-muted-foreground hover:text-foreground transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 font-mono text-[11px] tracking-[0.2em] uppercase px-4 py-2 border border-neon/60 text-neon hover:bg-neon hover:text-background transition relative neon-border"
            >
              Request Access
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2" aria-label="menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-border/40 px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-neon" }}
                className="font-mono text-xs tracking-[0.2em] uppercase py-2 text-muted-foreground">
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
