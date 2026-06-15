import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dronePrimary from "@/assets/drone-parts/DRONE1.png";
import droneSecondary from "@/assets/drone-parts/DRONE2.png";
import flightCard from "@/assets/drone-parts/FLIGHT-CONTROL-CARD1.png";
import frame from "@/assets/drone-parts/FRAMES2.png";
import propeller from "@/assets/drone-parts/Propellers1.png";
import swarm from "@/assets/drone-parts/swarm-gcs1.png";
import landingVideo from "@/assets/landing page video.mp4";
import { HeroDroneCardsCarousel } from "@/components/site/HeroDroneCardsCarousel";

gsap.registerPlugin(ScrollTrigger);

const heroStats = [
  { value: "100+", label: "Swarm capable fleet" },
  { value: "480MHz", label: "Flight MCU power" },
  { value: "MIL-STD", label: "Mission-grade build" },
];

const heroDetails = [
  {
    title: "Flight Control Card",
    text: "Fast onboard control for balance, telemetry, and precise autonomous decision making.",
    image: flightCard,
  },
  {
    title: "Aerospace Frame",
    text: "Rigid carbon structure designed to carry payloads while staying stable in aggressive flight.",
    image: frame,
  },
  {
    title: "Propeller System",
    text: "Balanced propulsion components tuned for lift, speed response, and smoother directional control.",
    image: propeller,
  },
];

const heroSlides = [
  {
    kicker: "Landing Visual",
    title: "Autonomous Flight System",
    image: dronePrimary,
    description:
      "Primary multi-rotor presentation focused on stable autonomous flight, payload balance, and real-world deployment readiness.",
  },
  {
    kicker: "Alternate Render",
    title: "Agile Drone Platform",
    image: droneSecondary,
    description:
      "Compact high-response drone configuration designed for rapid maneuvering, inspection tasks, and tactical adaptability.",
  },
  {
    kicker: "Mission Core",
    title: "Flight Control Precision",
    image: flightCard,
    description:
      "High-speed onboard electronics tuned for telemetry, stabilization, and decision-making across demanding flight conditions.",
  },
  {
    kicker: "Structure Layer",
    title: "Aerospace Frame Build",
    image: frame,
    description:
      "Lightweight carbon architecture engineered for rigidity, cleaner airflow, and improved payload support during aggressive use.",
  },
  {
    kicker: "Swarm Layer",
    title: "Coordinated Fleet Control",
    image: swarm,
    description:
      "Ground-control and swarm orchestration visuals built around synchronized missions, fleet awareness, and scalable command logic.",
  },
];

const TYPING_WORDS = ["BOLD.", "AUTONOMOUS.", "MISSION-READY."];

// ─── Product Showcase (below hero) ────────────────────────────────────────────
function ProductShowcase() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const detailsRef = useRef(null);
  const imgRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Stats — stagger fade up
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 82%", once: true },
        }
      );
    }

    // Detail cards — slide from right
    if (detailsRef.current) {
      gsap.fromTo(
        detailsRef.current.children,
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, stagger: 0.13, ease: "power3.out",
          scrollTrigger: { trigger: detailsRef.current, start: "top 80%", once: true },
        }
      );
    }

    // Parallax on product images
    imgRefs.current.forEach((img) => {
      if (!img) return;
      gsap.to(img, {
        y: "10%",
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#ffffff", position: "relative", overflow: "hidden" }}
    >
      {/* ── Stats strip — white bg, dark text ── */}
      <div
        ref={statsRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        {heroStats.map((s, i) => (
          <div
            key={s.label}
            style={{
              background: "#ffffff",
              padding: "clamp(1.75rem,4vw,3rem) clamp(1.5rem,3vw,2.5rem)",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              borderRight: i < 2 ? "1px solid rgba(0,0,0,0.07)" : "none",
              borderBottom: "3px solid transparent",
              transition: "border-color 0.3s ease, background 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottomColor = "var(--neon)";
              e.currentTarget.style.background = "rgba(232,69,10,0.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottomColor = "transparent";
              e.currentTarget.style.background = "#ffffff";
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem,5vw,3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "var(--foreground)",
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--muted-foreground)",
                fontWeight: 500,
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Two-column content ── */}
      <div
        className="container-edge"
        style={{ paddingTop: 0, paddingBottom: 0 }}
      >
        <div className="hero-showcase-grid" style={{ display: "grid", gridTemplateColumns: "1fr" }}>

          {/* ── Left: carousel ── */}
          <div
            style={{
              padding: "clamp(2rem,4vw,3.5rem) 0",
              borderRight: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <span style={{ height: "2px", width: "2rem", background: "var(--neon)", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--neon)",
                }}
              >
                Our Systems
              </span>
            </div>
            <div
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                background: "rgba(0,0,0,0.015)",
                borderRadius: "4px",
                overflow: "hidden",
                padding: "1.25rem",
              }}
            >
              <HeroDroneCardsCarousel slides={heroSlides} />
            </div>
          </div>

          {/* ── Right: product list ── */}
          <div
            ref={detailsRef}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {heroDetails.map((item, i) => (
              <div
                key={item.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  alignItems: "center",
                  gap: "0",
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                  transition: "background 0.25s ease",
                  cursor: "default",
                  minHeight: "116px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(232,69,10,0.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {/* Image box */}
                <div
                  style={{
                    width: "clamp(80px,10vw,120px)",
                    height: "100%",
                    minHeight: "116px",
                    background: "rgba(0,0,0,0.03)",
                    borderRight: "1px solid rgba(0,0,0,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1.25rem",
                    flexShrink: 0,
                  }}
                >
                  <img
                    ref={(el) => (imgRefs.current[i] = el)}
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "72px",
                      objectFit: "contain",
                      willChange: "transform",
                    }}
                    draggable={false}
                  />
                </div>

                {/* Text */}
                <div style={{ padding: "1.25rem clamp(1rem,2vw,1.75rem)", minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.58rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        color: "var(--neon)",
                        flexShrink: 0,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <div style={{ height: "1px", width: "1.25rem", background: "rgba(0,0,0,0.12)", flexShrink: 0 }} />
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(0.85rem,1.5vw,1rem)",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        color: "var(--foreground)",
                        lineHeight: 1.1,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      lineHeight: 1.7,
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {item.text}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  style={{
                    paddingRight: "1.5rem",
                    fontSize: "1rem",
                    color: "rgba(0,0,0,0.18)",
                    flexShrink: 0,
                  }}
                >
                  →
                </div>
              </div>
            ))}

            {/* CTA footer */}
            <div
              style={{
                padding: "1.25rem clamp(1rem,2vw,1.75rem)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid rgba(0,0,0,0.06)",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "auto",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--muted-foreground)",
                }}
              >
                Indigenous · Made in Bharat
              </span>
              <a
                href="/products"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--neon)",
                  textDecoration: "none",
                  transition: "gap 0.25s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "0.85rem")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "0.5rem")}
              >
                View All Products <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-showcase-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function HeroSection() {

  const sectionRef = useRef(null);
  const word1Ref = useRef(null);
  const word2Ref = useRef(null);
  const scrollBadgeRef = useRef(null);

  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    const isWordComplete = typedText === currentWord;
    const isWordRemoved = typedText === "";

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          setTypedText(currentWord.slice(0, typedText.length + 1));
          if (isWordComplete) setIsDeleting(true);
        } else {
          setTypedText(currentWord.slice(0, typedText.length - 1));
          if (isWordRemoved) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
          }
        }
      },
      isWordComplete && !isDeleting ? 1100 : isDeleting ? 50 : 95,
    );
    return () => window.clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex]);

  // GSAP Entrance — Skyroot-style word slide-in
  useEffect(() => {
    if (!word1Ref.current || !word2Ref.current) return;

    const words = [word1Ref.current, word2Ref.current];

    // Set initial state
    words.forEach((word, i) => {
      const initialX = i % 2 === 0 ? -120 : 120;
      gsap.set(word, { x: initialX, scale: 0.82, opacity: 0, filter: "blur(6px)" });
    });

    const tl = gsap.timeline({ delay: 0.4 });

    tl.to(words, {
      x: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      stagger: 0.18,
      ease: "power4.out",
    });

    // Scroll indicator bounce
    if (scrollBadgeRef.current) {
      gsap.to(scrollBadgeRef.current, {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.4,
        ease: "sine.inOut",
        delay: 1.5,
      });
    }

    // Parallax on hero section
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
      onUpdate: (self) => {
        if (word1Ref.current) {
          gsap.set(word1Ref.current, { y: self.progress * -40 });
        }
        if (word2Ref.current) {
          gsap.set(word2Ref.current, { y: self.progress * 40 });
        }
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* ── HERO VIEWPORT ── */}
      <section
        ref={sectionRef}
        id="hero"
        className="relative min-h-screen overflow-hidden bg-background pt-28 sm:pt-32"
      >
        {/* Background video */}
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center sm:block">
          <video
            className="w-full h-full object-cover sm:w-full sm:h-full"
            style={{ aspectRatio: "9 / 16" }}
            src={landingVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.72)_0%,rgba(18,18,18,0.48)_28%,rgba(25,25,25,0.28)_55%,rgba(28,28,28,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.02)_35%,rgba(245,245,240,0.12)_100%)]" />

        {/* Orange accent blob */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%",
            right: "-5%",
            width: "clamp(20rem,40vw,50rem)",
            height: "clamp(20rem,40vw,50rem)",
            background: "radial-gradient(circle, rgba(232,69,10,0.18) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />

        {/* Content */}
        <div className="container-edge relative z-10 flex min-h-[calc(100svh-7rem)] flex-col justify-center pb-20 sm:pb-24 lg:min-h-[calc(100svh-8rem)] lg:pb-28">
          <div className="max-w-[52rem]">
            {/* Eyebrow kicker */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 flex items-center gap-3 sm:mb-10"
            >
              <span className="h-[2px] w-10 bg-neon" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-white/80 sm:text-xs">
                Killis Bird :: Imagine, Ideate, Innovative
              </span>
            </motion.div>

            {/* Big headline — Skyroot-style 3 words */}
            <h1
              className="font-display uppercase text-white leading-[0.93]"
              style={{
                fontSize: "clamp(3.5rem,9vw,8.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 0.93,
                display: "flex",
                flexDirection: "column",
                gap: "0.05em",
              }}
            >
              <span
                ref={word1Ref}
                style={{
                  display: "block",
                  textAlign: "left",
                  willChange: "transform, opacity, filter",
                }}
              >
                PRECISION
              </span>
              <span
                ref={word2Ref}
                style={{
                  display: "block",
                  textAlign: "left",
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(255,255,255,0.55)",
                  willChange: "transform, opacity, filter",
                }}
              >
                ENGINEERED
              </span>
              {/* Typing word */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="mt-3 block min-h-[1.1em]"
                style={{ color: "var(--neon)" }}
              >
                {typedText}
                <span
                  className="ml-1 inline-block h-[0.9em] w-[3px] animate-pulse align-middle"
                  style={{ background: "var(--neon)" }}
                />
              </motion.span>
            </h1>
          </div>


        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollBadgeRef}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            right: "clamp(1.25rem,4vw,4rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: "1.5px",
              height: "3rem",
              background: "rgba(255,255,255,0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "1.5px",
                height: "0.8rem",
                background: "var(--neon)",
                animation: "scrollDotHero 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        <style>{`
          @keyframes scrollDotHero {
            0% { top: -100%; }
            100% { top: 110%; }
          }
        `}</style>
      </section>

      {/* ── PRODUCT SHOWCASE — redesigned ── */}
      <ProductShowcase />
    </>
  );
}

export { HeroSection };
