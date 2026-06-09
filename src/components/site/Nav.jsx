import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/KILLIS BIRD - LOGO.png";

const links = [
  { to: "/about", label: "Who We Are" },
  { to: "/products", label: "Products" },
  { to: "/support", label: "Assistance" },
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
    <header className="fixed inset-x-0 top-0 z-[100] pointer-events-none">
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
            "flex items-center justify-between gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "px-2 py-2" : "container-edge py-4",
            isScrolled && !open ? "py-3" : "",
          )}
        >
          <Link
            to="/"
            className="group flex items-center gap-2.5 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-neon transition-all duration-300"
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

          <nav className="ml-4 hidden min-w-0 flex-1 items-center justify-end gap-1 lg:flex xl:ml-6 xl:gap-2">
            {links.map((link) => {
              const active = isNavActive(location.pathname, link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "relative px-2.5 py-2 text-[0.78rem] font-semibold whitespace-nowrap uppercase tracking-[0.1em] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-neon xl:px-3 xl:text-[0.88rem] xl:tracking-[0.12em]",
                    isHomeHero
                      ? active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                      : active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-1 left-1/2 h-0.5 rounded-full -translate-x-1/2 transition-all duration-300 ease-out",
                      active ? "w-[72%] bg-neon" : "w-0 bg-neon group-hover:w-[80%]",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setOpen((value) => !value)}
            className={cn(
              "ml-auto mr-[-0.5rem] grid shrink-0 place-items-center p-2 transition-transform hover:scale-105 active:scale-95 lg:hidden",
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
          <nav className="flex flex-col gap-4 px-3 py-6 sm:px-4">
            {links.map((link) => {
              const active = isNavActive(location.pathname, link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "group flex items-center justify-between border-b border-black/5 py-4 font-mono text-base uppercase tracking-[0.12em] transition-colors last:border-0 sm:text-lg sm:tracking-[0.15em]",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className={cn(active && "text-neon")}>{link.label}</span>
                  <span
                    className={cn(
                      "transition-all duration-300 text-neon",
                      active
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                    )}
                  >
                    →
                  </span>
                </Link>
              );
            })}

            <div className="mt-8 flex flex-col items-center gap-4 border-t border-black/5 pt-8 text-center font-mono text-xs tracking-[0.18em] text-muted-foreground sm:text-sm sm:tracking-widest">
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
