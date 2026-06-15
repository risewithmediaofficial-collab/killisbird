import { memo, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const IdentitySection = memo(function IdentitySection() {
  const sectionRef = useRef(null);
  const paraRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!paraRef.current) return;

    // SVG-style underline draw animation on the heading
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }

    // Words/paragraphs slide up
    const words = sectionRef.current?.querySelectorAll("[data-gsap-up]") || [];
    words.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="welcome"
      className="container-edge section-y relative bg-background border-t border-border/50"
    >
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20 lg:items-start">
        {/* Left — big statement */}
        <div>
          <div data-gsap-up className="flex items-center gap-3 mb-10">
            <span className="h-[2px] w-10 bg-neon" />
            <span className="font-mono text-xs tracking-[0.25em] font-bold text-foreground/70 uppercase">
              Welcome to Killis Bird
            </span>
            <span className="h-[2px] w-10 bg-neon" />
          </div>

          <h2
            data-gsap-up
            className="heading-lg font-black relative inline-block"
          >
            Delivering Cutting-Edge UAV Components for a Smarter Future.
          </h2>

          {/* Orange underline bar */}
          <div
            ref={lineRef}
            style={{
              height: "3px",
              background: "var(--neon)",
              marginTop: "1.5rem",
              maxWidth: "12rem",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Right — supporting copy + stats */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            paddingTop: "0.75rem",
          }}
        >
          <p
            data-gsap-up
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl"
          >
            At Killis Bird, we are redefining what is possible in unmanned aerial
            systems through innovative, indigenous solutions designed to elevate
            performance and reliability.
          </p>

          {/* Stats row */}
          <div
            data-gsap-up
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "rgba(0,0,0,0.07)",
            }}
          >
            {[
              { value: "5+", label: "Years" },
              { value: "1000+", label: "Products" },
              { value: "500+", label: "Customers" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--background)",
                  padding: "1.5rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem,3vw,2.25rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "var(--foreground)",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted-foreground)",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <motion.a
            data-gsap-up
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--neon)",
            }}
          >
            <span>LEARN ABOUT US</span>
            <span style={{ fontSize: "1.1rem" }}>→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
});

export { IdentitySection };
