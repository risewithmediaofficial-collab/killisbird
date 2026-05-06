import img1 from "@/assets/drone-parts/DRONE1.png";
import img2 from "@/assets/drone-parts/DRONE2.png";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const particles = Array.from({ length: 16 }, (_, index) => index);
const heroImages = [img1, img2];

export function HeroSection() {
  const [imgIdx, setImgIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const droneY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const droneScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-background"
    >
      {/* Background base */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

      {/* Hero Background Glows — orange bottom-left, navy top-right */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          bottom: "-100px",
          left: "-80px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--neon) 15%, transparent) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: "-60px",
          right: "-60px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, color-mix(in srgb, #1B2D6B 12%, transparent) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
        aria-hidden="true"
      />

      {/* Subtle Particles — hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-hidden="true">
        {particles.map((index) => (
          <span
            key={index}
            className="absolute h-0.5 w-0.5 rounded-full bg-neon/20 transition-opacity duration-1000"
            style={{
              left: `${(index * 41) % 100}%`,
              top: `${(index * 57) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Drone Image - Dramatic Asymmetric Right Placement */}
      <motion.div
        style={{ y: droneY, scale: droneScale }}
        className="absolute top-1/2 -translate-y-1/2 right-[0%] sm:right-[5%] lg:right-[10%] w-[80%] sm:w-[45%] lg:w-[35%] max-w-[600px] z-10 pointer-events-none"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={imgIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 25, mass: 1 }}
            src={heroImages[imgIdx]}
            alt="Autonomous Drone"
            className="w-full h-auto object-contain animate-float-slow drop-shadow-2xl"
            draggable={false}
          />
        </AnimatePresence>
      </motion.div>

      {/* Main Hero Content */}
      <div className="container-edge relative z-20 w-full h-full flex flex-col justify-center pt-32 pb-24 md:pt-44 md:pb-32">
        {/* Left-Aligned Massive Typography */}
        <div className="relative w-full max-w-4xl flex flex-col items-start text-left z-10 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="w-10 h-[2px] bg-neon"></span>
            <span className="font-mono text-xs sm:text-sm tracking-[0.25em] font-bold text-foreground/80 uppercase">
              Killis Bird :: Imagine, Ideate, Innovative
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="heading-h1 flex flex-col gap-4 lg:gap-6 leading-[0.95]"
          >
            <span className="block">PRECISION</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
              FLIGHT.
            </span>
            <span className="block">ENGINEERED</span>
            <span className="block text-neon">BOLD.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-[480px] text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed"
          >
            High-end aerial systems crafted for absolute precision, intelligent autonomy, and
            premium design.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
          >
            <button
              onClick={() =>
                document.getElementById("systems")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-10 h-16 rounded-full bg-neon text-white flex items-center justify-center shadow-[0_8px_32px_rgba(232,69,10,0.4)] hover:scale-105 transition-transform group gap-3 font-bold uppercase tracking-widest animate-cta-bounce"
            >
              Explore
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-white/80 text-lg"
              >
                ↓
              </motion.span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute inset-x-0 bottom-0 bg-black text-white border-t border-border/50 z-20 py-4"
      >
        {/* Ticker row */}
        <div className="w-full overflow-hidden flex items-center">
          <div className="flex animate-ticker whitespace-nowrap items-center font-display text-sm tracking-widest font-bold">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex shrink-0 items-center">
                <span className="flex items-center gap-6 px-6">
                  MADE IN BHARAT <span className="text-neon/80">★</span>
                  STM32H743 <span className="text-neon/80">★</span>
                  MIL-STD-810G <span className="text-neon/80">★</span>
                  SWARM 100+ <span className="text-neon/80">★</span>
                  OPERATION SINDOOR PROVEN <span className="text-neon/80">★</span>
                  AI-DRIVEN AUTONOMY <span className="text-neon/80">★</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rotating circular badge */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden sm:flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-neon flex items-center justify-center animate-spin-badge">
            <span className="text-white text-[10px] font-black text-center leading-tight tracking-wide uppercase">
              BUILT
              <br />
              FOR
              <br />
              PROS
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
