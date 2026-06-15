import { memo, useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { systems } from "@/data/home";
import imgFcc from "@/assets/fcc.jpg";
import imgFrame from "@/assets/frame.jpg";
import imgProp from "@/assets/propeller.jpg";
import imgSwarm from "@/assets/swarm.jpg";
import fccRemoveBg from "@/assets/FLIGHT-CONTROL-CARD1-removebg-preview.png";
import frameRemoveBg from "@/assets/FRAMES1-removebg-preview.png";
import propRemoveBg from "@/assets/Propellers3-removebg-preview.png";
import droneRemoveBg from "@/assets/DRONE1-removebg-preview.png";

gsap.registerPlugin(ScrollTrigger);

const productData = [
  {
    code: "FCC-H743",
    title: "Flight Control Card",
    designation: "Flight Intelligence Module",
    spec: "A Flight Control Card in a drone is like the brain of the drone. It reads sensor data and pilot commands to keep the drone balanced and flying smoothly.",
    bgImg: imgFcc,
    productImg: fccRemoveBg,
    chips: ["Tactical", "Enterprise", "Precision Build"],
    specs: [
      { label: "MCU", value: "480MHz" },
      { label: "IMU", value: "6-AXIS" },
      { label: "Outputs", value: "8x Motor" },
    ],
    accent: "#e8450a",
    number: "01",
  },
  {
    code: "FRM-5IN",
    title: "Aerospace Frames",
    designation: "Structural Platform",
    spec: "A drone frame is the body or structure of the drone. It holds all the parts together and gives shape and strength for flying.",
    bgImg: imgFrame,
    productImg: frameRemoveBg,
    chips: ["Carbon Body", "Rigid Frame", "Lightweight"],
    specs: [
      { label: "Material", value: "Carbon" },
      { label: "Size", value: "5 inch" },
      { label: "Class", value: "Aerospace" },
    ],
    accent: "#1b2d6b",
    number: "02",
  },
  {
    code: "PRP-1045",
    title: "Propellers",
    designation: "Propulsion & Control Layer",
    spec: "A drone propeller is the blade that spins to lift the drone into the air. It controls movement and direction by changing speed and rotation.",
    bgImg: imgProp,
    productImg: propRemoveBg,
    chips: ["Balanced Lift", "Fast Response", "Stable Motion"],
    specs: [
      { label: "Size", value: "10x45" },
      { label: "Pitch", value: "4.5 in" },
      { label: "Balance", value: "CNC Cut" },
    ],
    accent: "#e8450a",
    number: "03",
  },
  {
    code: "SWM-100X",
    title: "Swarm Drones",
    designation: "Ground Control & Fleet Layer",
    spec: "A coordinated fleet of 100+ autonomous drones operating in unison with AI-driven precision for defense and industrial applications.",
    bgImg: imgSwarm,
    productImg: droneRemoveBg,
    chips: ["Autonomous Fleet", "Mission Sync", "AI Control"],
    specs: [
      { label: "Fleet", value: "100+" },
      { label: "Sync", value: "Real-time" },
      { label: "AI", value: "Onboard" },
    ],
    accent: "#1b2d6b",
    number: "04",
  },
];

// ── Single Product Card ──────────────────────────────────────
const ProductCard = memo(function ProductCard({ product, index, isActive, onClick, cardRef }) {
  const imgRef = useRef(null);

  return (
    <button
      ref={cardRef}
      onClick={onClick}
      className="kb-prod-card"
      data-active={isActive}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        cursor: "pointer",
        background: "none",
        border: "none",
        padding: 0,
        textAlign: "left",
        width: "100%",
        // Active card grows, inactive cards shrink
        flex: isActive ? "2.6 1 0" : "1 1 0",
        minWidth: isActive ? "min(340px, 100%)" : "min(120px, 100%)",
        transition: "flex 0.65s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Background image with parallax */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
        }}
      >
        <img
          ref={imgRef}
          src={product.bgImg}
          alt={product.title}
          style={{
            width: "100%",
            height: "115%",
            objectFit: "cover",
            display: "block",
            transform: "translateY(-7.5%)",
            willChange: "transform",
            transition: "opacity 0.5s ease",
          }}
        />
        {/* Gradient overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(5,8,20,0.25) 0%, rgba(5,8,20,0.5) 40%, rgba(5,8,20,0.92) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${product.accent}22 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Card number — always visible */}
      <div
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.25rem",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem,4vw,3.5rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: `1.5px ${isActive ? product.accent : "rgba(255,255,255,0.25)"}`,
          transition: "all 0.4s ease",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        {product.number}
      </div>

      {/* Code badge */}
      <div
        style={{
          position: "absolute",
          top: "1.25rem",
          left: "1.25rem",
          padding: "0.3rem 0.7rem",
          background: `${product.accent}22`,
          border: `1px solid ${product.accent}55`,
          backdropFilter: "blur(8px)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: product.accent,
          }}
        >
          {product.code}
        </span>
      </div>

      {/* Collapsed — vertical title */}
      <AnimatePresence>
        {!isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "flex-end",
              padding: "1.5rem 1rem",
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              {product.title}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "clamp(1.25rem,3vw,2.5rem)",
              zIndex: 3,
            }}
          >
            {/* Title */}
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem,3.5vw,2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 0.95,
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: "0.75rem",
              }}
            >
              {product.title}
            </h3>

            {/* Designation */}
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: product.accent,
                marginBottom: "1rem",
              }}
            >
              {product.designation}
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.68)",
                maxWidth: "28rem",
                marginBottom: "1.5rem",
              }}
            >
              {product.spec}
            </p>

            {/* Spec row */}
            <div
              style={{
                display: "flex",
                gap: "1px",
                background: "rgba(255,255,255,0.08)",
                marginBottom: "1.5rem",
                borderTop: `1px solid ${product.accent}33`,
                paddingTop: "1rem",
              }}
            >
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    padding: "0.75rem 0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(0.9rem,2vw,1.2rem)",
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.38)",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Chip tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {product.chips.map((chip) => (
                <span
                  key={chip}
                  style={{
                    padding: "0.3rem 0.75rem",
                    border: "1px solid rgba(255,255,255,0.16)",
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(8px)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: product.accent,
          transform: isActive ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1)",
          zIndex: 4,
        }}
      />
    </button>
  );
}

// ── Main Systems Section ───────────────────────────────
function SystemsSectionBase() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const cardRefs = useRef([]);

  // Parallax scroll — bg images move at different speeds
  useEffect(() => {
    if (!cardsRef.current) return;

    // Header slide-up
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    }

    // Cards entrance — stagger slide-up from below
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }

    // Parallax on each card's bg image
    productData.forEach((_, i) => {
      const card = cardRefs.current[i];
      if (!card) return;
      const img = card.querySelector("img");
      if (!img) return;

      gsap.to(img, {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="systems"
      style={{
        background: "var(--background)",
        padding: "var(--section-y, clamp(4rem,8vw,7rem)) 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(232,69,10,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,69,10,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="container-edge" style={{ position: "relative" }}>
        {/* Section header */}
        <div
          ref={headerRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "clamp(2.5rem,5vw,4rem)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ height: "2px", width: "2rem", background: "var(--neon)" }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--neon)",
              }}
            >
              Our Products
            </span>
            <span style={{ height: "2px", width: "2rem", background: "var(--neon)" }} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem,6vw,4.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.0,
                color: "var(--foreground)",
                textTransform: "uppercase",
              }}
            >
              SYSTEMS BUILT<br />TO PERFORM
            </h2>

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--muted-foreground)",
                maxWidth: "28rem",
                lineHeight: 1.75,
                paddingBottom: "0.25rem",
              }}
            >
              Click any product to explore our indigenous UAV components,
              engineered for precision and built to last.
            </p>
          </div>
        </div>

        {/* Cards row — accordion expand on click */}
        <div
          ref={cardsRef}
          style={{
            display: "flex",
            gap: "3px",
            height: "clamp(400px,55vh,620px)",
            overflow: "hidden",
            borderRadius: 0,
          }}
        >
          {productData.map((product, i) => (
            <ProductCard
              key={product.code}
              product={product}
              index={i}
              isActive={active === i}
              onClick={() => setActive(i)}
              cardRef={(el) => (cardRefs.current[i] = el)}
            />
          ))}
        </div>

        {/* Bottom product selector row */}
        <div
          style={{
            display: "flex",
            gap: "1px",
            background: "rgba(0,0,0,0.06)",
            marginTop: "3px",
          }}
        >
          {productData.map((p, i) => (
            <button
              key={p.code}
              onClick={() => setActive(i)}
              style={{
                flex: 1,
                padding: "1.25rem 1rem",
                background: active === i ? "var(--foreground)" : "var(--background)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.75rem",
                transition: "background 0.3s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: active === i ? p.accent : "var(--muted-foreground)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {p.code}
                </span>
                <span
                  className="hidden sm:block"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: active === i ? "#fff" : "var(--foreground)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {p.title}
                </span>
              </div>
              {/* Active indicator dot */}
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: active === i ? p.accent : "transparent",
                  border: `1.5px solid ${active === i ? p.accent : "rgba(0,0,0,0.15)"}`,
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                }}
              />
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div
          style={{
            height: "2px",
            background: "rgba(0,0,0,0.06)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ x: `${active * (100 / productData.length)}%` }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${100 / productData.length}%`,
              height: "100%",
              background: productData[active].accent,
            }}
          />
        </div>
      </div>
    </section>
  );
}

const SystemsSection = memo(SystemsSectionBase);

export { SystemsSection };
