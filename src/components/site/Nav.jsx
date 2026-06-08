import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/KILLIS BIRD - LOGO.png";

const links = [
  { to: "/about", label: "Who We Are" },
  { to: "/products", label: "Products" },
  { to: "/support", label: "Assistance" },
  { to: "/blog", label: "Journal" },
  { to: "/careers", label: "Join Us" },
];

function isNavActive(pathname, to) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomeHero = location.pathname === "/" && !isScrolled && !open;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto flex flex-col w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open
            ? "fixed inset-0 h-[100dvh] rounded-none bg-white z-50 pt-4 px-4 overflow-y-auto"
            : isHomeHero
              ? "relative rounded-none bg-transparent border-b border-white/10"
              : "relative rounded-none bg-white border-b border-black/8",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "px-2 py-2" : "container-edge py-4",
            isScrolled && !open ? "py-3" : "",
          )}
        >
          <Link
            to="/"
            className={cn(
              "group flex items-center gap-2.5 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-neon rounded-full border transition-all duration-300",
              isHomeHero
                ? "border-transparent px-1 py-1 bg-transparent shadow-none"
                : isNavActive(location.pathname, "/")
                ? "border-[#f05a12]/25 bg-[#fff4ee] px-4 py-2 shadow-[inset_0_0_0_1px_rgba(240,90,18,0.1)]"
                : "border-transparent px-1 py-1",
            )}
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

          <nav className="hidden lg:flex flex-1 items-center justify-end gap-1 xl:gap-2 ml-6 min-w-0">
            {links.map((link) => {
              const active = isNavActive(location.pathname, link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "whitespace-nowrap text-[0.88rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300 relative py-2 px-3 outline-none focus-visible:ring-2 focus-visible:ring-neon rounded-full",
                    isHomeHero
                      ? active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                      : active
                      ? "text-foreground bg-[#fff4ee] shadow-[inset_0_0_0_1px_rgba(240,90,18,0.16)]"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-1 left-1/2 h-0.5 rounded-full -translate-x-1/2 transition-all duration-300 ease-out",
                      active
                        ? "w-[72%] bg-neon"
                        : "w-0 bg-neon group-hover:w-[80%]",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setOpen((value) => !value)}
            className={cn(
              "grid place-items-center lg:hidden shrink-0 ml-auto p-2 -mr-2 transition-transform hover:scale-105 active:scale-95",
              isHomeHero ? "text-white" : "text-foreground",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
            open ? "flex opacity-100 flex-1 mt-8" : "hidden opacity-0",
          )}
        >
          <nav className="flex flex-col gap-4 py-6 px-4">
            {links.map((link) => {
              const active = isNavActive(location.pathname, link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "py-4 font-mono text-lg uppercase tracking-[0.15em] transition-colors border-b border-black/5 last:border-0 flex items-center justify-between group",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className={cn(active && "text-neon")}>{link.label}</span>
                  <span
                    className={cn(
                      "transition-all duration-300 text-neon",
                      active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                    )}
                  >
                    →
                  </span>
                </Link>
              );
            })}

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
              onClick={() => setOpen(false)}
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
