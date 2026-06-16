import { memo, useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { capabilities } from "@/data/home";

gsap.registerPlugin(ScrollTrigger);

// ── Individual Timeline Item ───────────────────────────────────────────────────
const TimelineItem = memo(function TimelineItem({ item, index, isLast }) {
  const Icon = item.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      data-cap-item
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: "1 1 0",
        minWidth: 0,
        position: "relative",
      }}
    >
      {/* Connector line + arrow (hidden on last item) */}
      {!isLast && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "2.25rem",
            left: "50%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {/* Line */}
          <div
            style={{
              flex: 1,
              height: "2px",
              background: "rgba(232,69,10,0.18)",
            }}
          />
          {/* Arrow head */}
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            style={{ flexShrink: 0, marginRight: "-1px" }}
          >
            <path
              d="M1 1L7 6L1 11"
              stroke="#e8450a"
              strokeOpacity="0.4"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* Circle */}
      <div
        style={{
          width: "4.5rem",
          height: "4.5rem",
          borderRadius: "50%",
          background: "var(--neon)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          boxShadow: "0 4px 20px rgba(232,69,10,0.25)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        className="cap-circle"
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.15rem",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {num}
        </span>
      </div>

      {/* Icon below circle */}
      {Icon && (
        <div
          style={{
            marginTop: "1.1rem",
            width: "2rem",
            height: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={20} color="var(--neon)" strokeWidth={1.6} />
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(0.85rem,1.4vw,1rem)",
          fontWeight: 700,
          color: "var(--foreground)",
          textAlign: "center",
          marginTop: Icon ? "0.6rem" : "1.1rem",
          marginBottom: "0.55rem",
          letterSpacing: "-0.01em",
          lineHeight: 1.2,
          paddingInline: "0.5rem",
        }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "0.78rem",
          lineHeight: 1.72,
          color: "var(--muted-foreground)",
          textAlign: "center",
          paddingInline: "0.75rem",
          maxWidth: "14rem",
        }}
      >
        {item.text}
      </p>
    </div>
  );
});

// ── Main CapabilitySection ─────────────────────────────────────────────────────
const CapabilitySection = memo(function CapabilitySection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

  const items = useMemo(() => capabilities, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header slide-up
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: headerRef.current, start: "top 84%", once: true },
          }
        );
      }

      // Timeline items stagger in from bottom
      if (timelineRef.current) {
        const cards = timelineRef.current.querySelectorAll("[data-cap-item]");
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.7,
            stagger: { amount: 0.6, from: "start" },
            ease: "power3.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split into two rows of 3
  const row1 = items.slice(0, 3);
  const row2 = items.slice(3, 6);

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      style={{
        background: "#f9f9f8",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(4rem,8vw,7rem) 0",
      }}
    >
      <div className="container-edge" style={{ position: "relative" }}>

        {/* Section header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "clamp(3rem,6vw,5rem)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <span style={{ height: "2px", width: "1.5rem", background: "var(--neon)" }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--neon)",
              }}
            >
              Capabilities
            </span>
            <span style={{ height: "2px", width: "1.5rem", background: "var(--neon)" }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              textTransform: "uppercase",
              color: "var(--foreground)",
            }}
          >
            WHAT WE DO
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--muted-foreground)",
              maxWidth: "30rem",
              margin: "0.9rem auto 0",
              lineHeight: 1.75,
            }}
          >
            End-to-end UAV services — from custom drone development and swarm systems
            to warranty coverage and premium quality assurance.
          </p>
        </div>

        {/* Timeline grid — responsive */}
        <div
          ref={timelineRef}
          className="cap-timeline-wrapper"
          style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem,5vw,4rem)" }}
        >
          {/* Row 1 */}
          <div className="cap-row" style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
            {row1.map((item, i) => (
              <TimelineItem
                key={item.title}
                item={item}
                index={i}
                isLast={i === row1.length - 1}
              />
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "rgba(0,0,0,0.07)",
              margin: "-1rem 0",
            }}
            className="cap-divider"
          />

          {/* Row 2 */}
          <div className="cap-row" style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
            {row2.map((item, i) => (
              <TimelineItem
                key={item.title}
                item={item}
                index={i + 3}
                isLast={i === row2.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hover + mobile responsive styles */}
      <style>{`
        .cap-circle:hover {
          transform: scale(1.1) translateY(-3px) !important;
          box-shadow: 0 8px 28px rgba(232,69,10,0.38) !important;
        }
        @media (max-width: 640px) {
          .cap-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 2rem !important;
          }
          .cap-row > div {
            width: 100% !important;
            max-width: 320px !important;
          }
          /* Hide connector lines on mobile */
          .cap-row > div > div[style*="position: absolute"] {
            display: none !important;
          }
          .cap-divider {
            display: none !important;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          /* 2 rows become 2 items per row */
          .cap-timeline-wrapper > .cap-row {
            flex-wrap: wrap;
          }
          .cap-timeline-wrapper > .cap-row > div {
            flex: 1 1 45% !important;
            min-width: 200px !important;
          }
        }
      `}</style>
    </section>
  );
});

export { CapabilitySection };
