import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/KILLIS BIRD - LOGO.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/support", label: "Support" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Scroll handler for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-4 inset-x-0 z-[100] pointer-events-none flex justify-center px-4">
      <div
        className={cn(
          "pointer-events-auto flex flex-col w-full bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open
            ? "fixed inset-0 h-[100dvh] rounded-none bg-white/95 z-50 pt-4 px-4 overflow-y-auto"
            : "relative max-w-5xl rounded-full",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "px-2 py-2" : "px-6 md:px-8",
            isScrolled && !open ? "py-3" : "py-5",
          )}
        >
          {/* Left: Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-neon rounded-sm"
          >
            <img
              src={logoImg}
              alt="Killis Bird Logo"
              className={cn(
                "w-auto object-contain drop-shadow-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]",
                isScrolled && !open ? "h-6 md:h-7" : "h-8 md:h-9",
              )}
            />
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-4 xl:gap-8 mx-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground font-bold" }}
                className="text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group py-2 outline-none focus-visible:ring-2 focus-visible:ring-neon rounded-sm"
              >
                {l.label}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-neon rounded-full -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-[80%]"></span>
              </Link>
            ))}
          </nav>

          {/* Right: CTA Button & Contact Info */}
          <div className="hidden lg:flex shrink-0 items-center gap-6">
            <div
              className={cn(
                "hidden xl:flex flex-col text-right transition-opacity duration-300",
                isScrolled && !open ? "opacity-0 w-0 overflow-hidden" : "opacity-100",
              )}
            >
              <a
                href="tel:+917200743683"
                className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                +91 72007 43683
              </a>
              <a
                href="mailto:info@killisbird.com"
                className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                info@killisbird.com
              </a>
            </div>
            <Link
              to="/contact"
              className={cn(
                "flex items-center justify-center rounded-full bg-neon text-white font-bold shadow-neon transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:shadow-[0_4px_25px_-4px_rgba(232,69,10,0.5)] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neon",
                isScrolled && !open ? "px-5 py-2 text-[13px]" : "px-6 py-2.5 text-sm",
              )}
            >
              Request Quote <span className="ml-1 opacity-70">→</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen((value) => !value)}
            className="grid place-items-center text-foreground lg:hidden shrink-0 ml-auto p-2 -mr-2 transition-transform hover:scale-105 active:scale-95"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div
          id="mobile-navigation"
          className={cn(
            "flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
            open ? "flex opacity-100 flex-1 mt-8" : "hidden opacity-0",
          )}
        >
          <nav className="flex flex-col gap-4 py-6 px-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground font-bold" }}
                className="py-4 font-mono text-lg uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground border-b border-black/5 last:border-0 flex items-center justify-between group"
              >
                {l.label}
                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-neon">
                  →
                </span>
              </Link>
            ))}
            <div className="mt-8 pt-8 border-t border-black/5 flex flex-col gap-4 font-mono text-sm tracking-widest text-muted-foreground items-center text-center">
              <a href="tel:+917200743683" className="hover:text-neon">
                +91 72007 43683
              </a>
              <a href="mailto:info@killisbird.com" className="hover:text-neon">
                info@killisbird.com
              </a>
            </div>
            <Link
              to="/contact"
              onClick={() => {
                setOpen(false);
              }}
              className="mt-8 inline-flex w-full min-h-14 items-center justify-center rounded-full bg-neon px-6 py-4 font-mono text-sm uppercase tracking-[0.18em] text-white font-bold transition-all hover:scale-[1.02] shadow-neon"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
