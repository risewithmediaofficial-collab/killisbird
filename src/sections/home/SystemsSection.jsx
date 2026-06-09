import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { systems } from "@/data/home";
import { cn } from "@/lib/utils";
import imgFcc from "@/assets/fcc.jpg";
import imgFrame from "@/assets/frame.jpg";
import imgProp from "@/assets/propeller.jpg";
import imgSwarm from "@/assets/swarm.jpg";
import imgHero from "@/assets/hero-drone.jpg";

gsap.registerPlugin(ScrollTrigger);

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

const getImageForCode = (code) => {
  if (code.includes("FCC")) return imgFcc;
  if (code.includes("FRM")) return imgFrame;
  if (code.includes("PRP")) return imgProp;
  if (code.includes("SWM")) return imgSwarm;
  return imgHero;
};

function ProductStackCard({
  item,
  index,
  isActive,
  numLabel,
  cardRefs,
  imageRefs,
  setActiveId,
  isMobile,
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const tiltX = useSpring(rotateX, { stiffness: 180, damping: 22, mass: 0.55 });
  const tiltY = useSpring(rotateY, { stiffness: 180, damping: 22, mass: 0.55 });
  const glowX = useTransform(tiltY, [-8, 8], ["42%", "58%"]);
  const glowY = useTransform(tiltX, [-8, 8], ["58%", "42%"]);

  const handlePointerMove = (event) => {
    if (
      isMobile ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    rotateY.set((x - 0.5) * 10);
    rotateX.set((0.5 - y) * 8);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={(element) => {
        cardRefs.current[index] = element;
      }}
      className={cn(isMobile ? "relative" : "sticky scroll-card-item")}
      style={isMobile ? undefined : { top: `calc(5.2rem + ${index * 1.55}rem)` }}
    >
      <motion.article
        layout
        onMouseEnter={() => setActiveId(index)}
        onFocus={() => setActiveId(index)}
        onMouseMove={handlePointerMove}
        onMouseLeave={resetTilt}
        onBlur={resetTilt}
        style={{
          rotateX: isMobile ? 0 : tiltX,
          rotateY: isMobile ? 0 : tiltY,
          transformPerspective: isMobile ? 0 : 1600,
        }}
        whileHover={
          isMobile
            ? undefined
            : {
                y: -6,
                scale: 1.01,
                transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
              }
        }
        className={cn(
          "group relative overflow-hidden rounded-[1.85rem] border border-white/20 shadow-[0_30px_80px_rgba(15,15,15,0.14)] backdrop-blur-sm transition-all duration-500 will-change-transform",
          isActive ? "bg-[var(--navy)]" : "bg-[var(--navy)]/94",
        )}
      >
        <div className="absolute inset-0">
          <div
            ref={(element) => {
              imageRefs.current[index] = element;
            }}
            className="h-full w-full"
          >
            <img
              src={getImageForCode(item.code)}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(27,45,107,0.14),rgba(27,45,107,0.58))]" />
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(255,255,255,0.28), transparent 32%)",
              "--glow-x": glowX,
              "--glow-y": glowY,
            }}
          />
        </div>

        <div className="relative z-10 flex min-h-[23rem] flex-col justify-between px-6 py-6 sm:min-h-[27rem] sm:px-8 sm:py-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-neon/90">
                {item.code}
              </div>
              <h3 className="mt-4 text-2xl font-bold uppercase tracking-[0.05em] text-white sm:text-4xl">
                {item.title}
              </h3>
            </div>

            <span
              className={cn(
                "font-display font-black leading-none text-transparent transition-all duration-500",
                isActive
                  ? "mt-0 text-[4.8rem] opacity-60 sm:text-[7.4rem]"
                  : "mt-1 text-[3rem] opacity-42 sm:text-[4.2rem]",
              )}
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.92)" }}
            >
              {numLabel}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl"
            >
              <p className="text-base leading-relaxed text-white/88 sm:text-lg sm:leading-9">
                {item.spec}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/20 bg-black/28 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                  Tactical
                </span>
                <span className="rounded-full border border-white/20 bg-black/28 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                  Enterprise
                </span>
                <span className="rounded-full border border-white/20 bg-black/28 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                  Precision Build
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.article>
    </div>
  );
}

function SystemsSection() {
  const [activeId, setActiveId] = useState(0);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    if (isMobile) {
      setActiveId(0);
      return undefined;
    }

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        const image = imageRefs.current[index];
        if (!card) return;

        gsap.set(card, { transformOrigin: "top center" });

        gsap.fromTo(
          card,
          {
            y: 170,
            scale: 0.88,
            opacity: 0.68,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 24%",
              scrub: true,
              onEnter: () => setActiveId(index),
              onEnterBack: () => setActiveId(index),
            },
          },
        );

        gsap.to(card, {
          scale: Math.max(0.76, 1 - (systems.length - index - 1) * 0.055),
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 22%",
            end: "bottom top",
            scrub: true,
          },
        });

        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.24, yPercent: -12 },
            {
              scale: 1.02,
              yPercent: 14,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id="systems"
      className="relative overflow-hidden bg-background section-y"
    >
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <span className="h-[2px] w-8 bg-neon" />
          <span className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-neon">
            Our Products
          </span>
          <span className="h-[2px] w-8 bg-neon" />
        </motion.div>

        <div className="mx-auto flex w-full max-w-[68rem] flex-col gap-6">
          {systems.map((item, index) => (
            <ProductStackCard
              key={item.code}
              item={item}
              index={index}
              isActive={activeId === index}
              numLabel={String(index + 1).padStart(2, "0")}
              cardRefs={cardRefs}
              imageRefs={imageRefs}
              setActiveId={setActiveId}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { SystemsSection };
