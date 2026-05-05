import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { systems } from "@/data/home";
import { cn } from "@/lib/utils";

import imgFcc from "@/assets/fcc.jpg";
import imgFrame from "@/assets/frame.jpg";
import imgProp from "@/assets/propeller.jpg";
import imgSwarm from "@/assets/swarm.jpg";
import imgHero from "@/assets/hero-drone.jpg";

const getImageForCode = (code: string) => {
  if (code.includes("FCC")) return imgFcc;
  if (code.includes("FRM")) return imgFrame;
  if (code.includes("PRP")) return imgProp;
  if (code.includes("SWM")) return imgSwarm;
  return imgHero;
};

export function SystemsSection() {
  const [activeId, setActiveId] = useState(0);
  const activeIdRef = useRef(0);

  useEffect(() => {
    let ticking = false;
    const section = document.getElementById("systems");
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cards = document.querySelectorAll(".scroll-card-item");
          if (cards.length === 0) return;
          
          let closestIdx = activeIdRef.current;
          let minDistance = Infinity;
          const centerY = window.innerHeight / 2;

          cards.forEach((card, idx) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const dist = Math.abs(cardCenter - centerY);
            if (dist < minDistance) {
              minDistance = dist;
              closestIdx = idx;
            }
          });

          if (closestIdx !== activeIdRef.current) {
            activeIdRef.current = closestIdx;
            setActiveId(closestIdx);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    }, { rootMargin: "200px" });

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="systems" className="relative bg-background section-y overflow-hidden">
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: STICKY PANEL */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-neon"></span>
                <span className="font-mono text-sm tracking-[0.25em] font-bold text-neon uppercase">
                  Our Products
                </span>
                <span className="w-8 h-[2px] bg-neon"></span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tight">
                WHAT WE BUILD
              </h2>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-md">
                High-performance hardware engineered for extreme environments and tactical precision. 
                Each system is meticulously designed, tested, and field-proven inside our indigenous facility.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: SCROLLING CARDS */}
          <div className="lg:col-span-7 flex flex-col gap-4 relative z-20 pb-12">
            {systems.map((item, i) => {
              const isActive = activeId === i;
              const numLabel = (i + 1).toString().padStart(2, "0");

              return (
                <motion.div
                  key={item.code}
                  layout
                  initial={false}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      activeIdRef.current = i;
                      setActiveId(i);
                    }
                  }}
                  className={cn(
                    "scroll-card-item relative overflow-hidden rounded-[24px] cursor-pointer group flex-shrink-0 w-full transition-all duration-700",
                    isActive 
                      ? "h-[500px] sm:h-[600px] shadow-2xl bg-[var(--navy)]" 
                      : "h-[80px] sm:h-[100px] bg-[var(--navy)]/90 hover:bg-[var(--navy)]"
                  )}
                  onClick={() => {
                    activeIdRef.current = i;
                    setActiveId(i);
                    // Optional: Smooth scroll the clicked card to center
                    const el = document.querySelectorAll(".scroll-card-item")[i];
                    if (el) {
                      const rect = el.getBoundingClientRect();
                      const offset = window.scrollY + rect.top - (window.innerHeight / 2) + (rect.height / 2);
                      window.scrollTo({ top: offset, behavior: "smooth" });
                    }
                  }}
                >
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="bg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0 z-0"
                      >
                        <img 
                          src={getImageForCode(item.code)} 
                          alt={item.title}
                          className="w-full h-full object-cover" 
                        />
                        {/* Dark gradient overlay on bottom half */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                        <div className="absolute inset-0 bg-[var(--navy)]/10 mix-blend-multiply" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative z-10 px-6 sm:px-10 py-6 sm:py-8 h-full flex flex-col justify-between pointer-events-none">
                    {/* Top: Title & Number */}
                    <motion.div layout="position" className="flex justify-between items-center w-full">
                      <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <span 
                        className={cn(
                          "font-display font-black leading-none transition-all duration-500",
                          isActive 
                            ? "text-[80px] sm:text-[100px] text-transparent -mt-4 opacity-50" 
                            : "text-3xl text-white/50"
                        )}
                        style={isActive ? { WebkitTextStroke: "2px rgba(255,255,255,1)" } : {}}
                      >
                        {numLabel}
                      </span>
                    </motion.div>

                    {/* Bottom: Description & Tags */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div 
                          key="content"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="mt-auto pointer-events-auto"
                        >
                          <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-lg drop-shadow-md">
                            {item.spec}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <span className="bg-black/40 text-white text-[11px] uppercase tracking-widest font-bold px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-md">
                              Tactical
                            </span>
                            <span className="bg-black/40 text-white text-[11px] uppercase tracking-widest font-bold px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-md">
                              Enterprise
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
