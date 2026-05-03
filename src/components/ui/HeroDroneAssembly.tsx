import { type CSSProperties, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PartConfig {
  id: string;
  ix: number; // initial x scatter offset (px)
  iy: number; // initial y scatter offset (px)
  ir: number; // initial rotation offset (deg)
  is: number; // initial scale (0–1)
  opacity: number; // initial opacity
}

// ─── Part scatter config ───────────────────────────────────────────────────────

const PARTS: PartConfig[] = [
  { id: "arms", ix: -48, iy: -55, ir: 9, is: 0.82, opacity: 0.18 },
  { id: "motors", ix: 55, iy: -42, ir: -7, is: 0.84, opacity: 0.15 },
  { id: "legs", ix: 8, iy: 60, ir: 3, is: 0.88, opacity: 0.2 },
  { id: "body", ix: 22, iy: -30, ir: -4, is: 0.86, opacity: 0.25 },
  { id: "props", ix: -60, iy: 45, ir: 11, is: 0.8, opacity: 0.15 },
  { id: "camera", ix: -20, iy: 38, ir: -6, is: 0.87, opacity: 0.2 },
  { id: "shadow", ix: 0, iy: 28, ir: 0, is: 0.9, opacity: 0.0 },
  { id: "glow", ix: 0, iy: 0, ir: 0, is: 1.0, opacity: 0.0 },
];

const STATUS_LABELS = [
  "Scroll to assemble",
  "Aligning parts…",
  "Mounting arms",
  "Installing motors",
  "Calibrating camera",
  "Assembly complete",
];

// ─── Easing ───────────────────────────────────────────────────────────────────

function clamp(v: number, mn = 0, mx = 1) {
  return Math.min(mx, Math.max(mn, v));
}

function cubicEaseInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// ─── SVG layers ───────────────────────────────────────────────────────────────

function ShadowLayer() {
  return (
    <svg
      id="drone-shadow"
      className="drone-part"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="shadowBlur">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <ellipse
        cx="210"
        cy="310"
        rx="90"
        ry="14"
        fill="rgba(0,0,0,0.35)"
        filter="url(#shadowBlur)"
      />
    </svg>
  );
}

function ArmsLayer() {
  return (
    <svg
      id="drone-arms"
      className="drone-part"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2e3340" />
          <stop offset="50%" stopColor="#1e2228" />
          <stop offset="100%" stopColor="#141618" />
        </linearGradient>
      </defs>
      <g transform="translate(210,210)">
        {/* NW arm */}
        <g transform="rotate(-45)">
          <rect x="-130" y="-9" width="116" height="18" rx="6" fill="url(#armGrad)" />
          <rect x="-130" y="-9" width="116" height="3" rx="2" fill="#3d4450" opacity={0.7} />
          <rect x="-130" y="6" width="116" height="2" rx="1" fill="#111315" />
          <rect x="-50" y="-5" width="32" height="10" rx="3" fill="#252930" />
          <rect x="-42" y="-3" width="16" height="6" rx="2" fill="#1a1d22" />
          {/* SE arm */}
          <rect x="14" y="-9" width="116" height="18" rx="6" fill="url(#armGrad)" />
          <rect x="14" y="-9" width="116" height="3" rx="2" fill="#3d4450" opacity={0.7} />
          <rect x="14" y="6" width="116" height="2" rx="1" fill="#111315" />
          <rect x="18" y="-5" width="32" height="10" rx="3" fill="#252930" />
          <rect x="26" y="-3" width="16" height="6" rx="2" fill="#1a1d22" />
        </g>
        {/* NE / SW arms */}
        <g transform="rotate(45)">
          <rect x="-130" y="-9" width="116" height="18" rx="6" fill="url(#armGrad)" />
          <rect x="-130" y="-9" width="116" height="3" rx="2" fill="#3d4450" opacity={0.7} />
          <rect x="-50" y="-5" width="32" height="10" rx="3" fill="#252930" />
          <rect x="14" y="-9" width="116" height="18" rx="6" fill="url(#armGrad)" />
          <rect x="14" y="-9" width="116" height="3" rx="2" fill="#3d4450" opacity={0.7} />
          <rect x="18" y="-5" width="32" height="10" rx="3" fill="#252930" />
        </g>
      </g>
    </svg>
  );
}

function MotorsLayer() {
  const motorPositions = [
    { transform: "rotate(-45) translate(-130,0)" },
    { transform: "rotate(-45) translate(130,0)" },
    { transform: "rotate(45) translate(-130,0)" },
    { transform: "rotate(45) translate(130,0)" },
  ];

  return (
    <svg
      id="drone-motors"
      className="drone-part"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="motorGrad" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#3a3f4a" />
          <stop offset="60%" stopColor="#1e2228" />
          <stop offset="100%" stopColor="#0f1114" />
        </radialGradient>
        <radialGradient id="motorTop" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#5a6070" />
          <stop offset="100%" stopColor="#2a2e36" />
        </radialGradient>
      </defs>
      <g transform="translate(210,210)">
        {motorPositions.map((pos, i) => (
          <g key={i} transform={pos.transform}>
            <circle cx="0" cy="0" r="19" fill="#141618" />
            <circle cx="0" cy="0" r="17" fill="url(#motorGrad)" />
            <circle cx="0" cy="0" r="12" fill="url(#motorTop)" />
            <circle cx="0" cy="0" r="5" fill="#3a8fd4" opacity={0.7} />
            <circle cx="0" cy="0" r="3" fill="#5ab0f0" />
            {i === 0 && <circle cx="-4" cy="-4" r="1.5" fill="#6a8090" opacity={0.6} />}
          </g>
        ))}
      </g>
    </svg>
  );
}

function PropsLayer() {
  const propPositions = [
    { transform: "rotate(-45) translate(-130,0)", bladeAngle: -12 },
    { transform: "rotate(-45) translate(130,0)", bladeAngle: 12 },
    { transform: "rotate(45) translate(-130,0)", bladeAngle: 8 },
    { transform: "rotate(45) translate(130,0)", bladeAngle: -8 },
  ];

  return (
    <svg
      id="drone-props"
      className="drone-part"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="propGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3a3f4a" />
          <stop offset="40%" stopColor="#252830" />
          <stop offset="100%" stopColor="#1a1c20" />
        </linearGradient>
        <linearGradient id="propGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3a3f4a" />
          <stop offset="40%" stopColor="#252830" />
          <stop offset="100%" stopColor="#1a1c20" />
        </linearGradient>
      </defs>
      <g transform="translate(210,210)">
        {propPositions.map((pos, i) => (
          <g key={i} transform={pos.transform}>
            <ellipse
              cx="0"
              cy="0"
              rx="36"
              ry="5.5"
              fill="url(#propGrad1)"
              transform={`rotate(${pos.bladeAngle})`}
            />
            <ellipse
              cx="0"
              cy="0"
              rx="36"
              ry="5.5"
              fill="url(#propGrad2)"
              transform={`rotate(${pos.bladeAngle + 90})`}
            />
            <circle cx="0" cy="0" r="4" fill="#1a1d22" />
            <ellipse
              cx="0"
              cy="0"
              rx="34"
              ry="4.5"
              fill="none"
              stroke="#4a5060"
              strokeWidth="0.5"
              opacity={0.4}
              transform={`rotate(${pos.bladeAngle})`}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}

function BodyLayer() {
  return (
    <svg
      id="drone-body"
      className="drone-part"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="bodyGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#353c48" />
          <stop offset="50%" stopColor="#1e2430" />
          <stop offset="100%" stopColor="#0e1016" />
        </radialGradient>
        <radialGradient id="bodyTop" cx="45%" cy="40%">
          <stop offset="0%" stopColor="#4a5260" />
          <stop offset="100%" stopColor="#1e2228" />
        </radialGradient>
      </defs>
      <g transform="translate(210,210)">
        <ellipse cx="0" cy="4" rx="46" ry="20" fill="#0a0c0e" />
        <rect x="-38" y="-22" width="76" height="44" rx="14" fill="url(#bodyGrad)" />
        <rect
          x="-38"
          y="-22"
          width="76"
          height="44"
          rx="14"
          fill="none"
          stroke="#3a4050"
          strokeWidth="0.8"
        />
        {/* top panel */}
        <rect x="-32" y="-16" width="64" height="10" rx="4" fill="url(#bodyTop)" opacity={0.8} />
        <rect x="-26" y="-10" width="52" height="4" rx="2" fill="#5a6478" opacity={0.3} />
        {/* top mount rail */}
        <rect x="-18" y="-22" width="36" height="5" rx="2" fill="#2a3040" />
        <rect x="-16" y="-20" width="32" height="3" rx="1" fill="#3a4558" opacity={0.5} />
        {/* bottom mount */}
        <rect x="-20" y="17" width="40" height="7" rx="3" fill="#1a1e28" />
        <rect x="-18" y="18" width="36" height="4" rx="2" fill="#252a36" />
        <rect x="-8" y="19" width="16" height="2" rx="1" fill="#3a4050" />
        {/* side LEDs */}
        <rect x="-36" y="-4" width="8" height="8" rx="2" fill="#1a1e28" />
        <rect x="-34" y="-2" width="4" height="4" rx="1" fill="#3a8fd4" opacity={0.6} />
        <rect x="28" y="-4" width="8" height="8" rx="2" fill="#1a1e28" />
        <rect x="30" y="-2" width="4" height="4" rx="1" fill="#e8423a" opacity={0.6} />
        {/* center display */}
        <rect x="-10" y="-4" width="20" height="8" rx="3" fill="#141618" />
        <rect x="-8" y="-2" width="16" height="4" rx="2" fill="#1e2228" />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#3a8fd4" strokeWidth="0.8" opacity={0.5} />
        {/* vent dots */}
        <circle cx="-8" cy="6" r="2.5" fill="#1a1c20" />
        <circle cx="0" cy="6" r="2.5" fill="#1a1c20" />
        <circle cx="8" cy="6" r="2.5" fill="#1a1c20" />
      </g>
    </svg>
  );
}

function CameraLayer() {
  return (
    <svg
      id="drone-camera"
      className="drone-part"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="lensGrad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#2a3850" />
          <stop offset="40%" stopColor="#0e1828" />
          <stop offset="100%" stopColor="#050810" />
        </radialGradient>
        <radialGradient id="lensShine" cx="30%" cy="30%">
          <stop offset="0%" stopColor="rgba(100,160,220,0.5)" />
          <stop offset="60%" stopColor="rgba(40,80,140,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <g transform="translate(210,235)">
        <rect x="-20" y="-14" width="40" height="14" rx="3" fill="#1a1c22" />
        <rect x="-18" y="-12" width="36" height="8" rx="2" fill="#222530" />
        <rect x="-20" y="0" width="40" height="20" rx="5" fill="#141618" />
        <rect
          x="-20"
          y="0"
          width="40"
          height="20"
          rx="5"
          fill="none"
          stroke="#2e3340"
          strokeWidth="0.8"
        />
        <circle cx="0" cy="10" r="11" fill="#0e0f12" />
        <circle cx="0" cy="10" r="9" fill="url(#lensGrad)" />
        <circle cx="0" cy="10" r="9" fill="url(#lensShine)" />
        <circle cx="0" cy="10" r="5.5" fill="#080a10" />
        <circle cx="0" cy="10" r="3.5" fill="#0d1520" />
        <circle cx="-2" cy="8" r="1.2" fill="rgba(150,200,255,0.4)" />
        <circle cx="0" cy="10" r="1.5" fill="rgba(58,143,212,0.5)" />
        <circle cx="0" cy="10" r="9" fill="none" stroke="#2a4060" strokeWidth="0.8" />
        <circle cx="0" cy="10" r="7" fill="none" stroke="#1a2840" strokeWidth="0.5" />
        <rect x="-6" y="-11" width="4" height="6" rx="1" fill="#2a2d38" />
        <rect x="2" y="-11" width="4" height="6" rx="1" fill="#2a2d38" />
      </g>
    </svg>
  );
}

function LegsLayer() {
  return (
    <svg
      id="drone-legs"
      className="drone-part"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(210,210)">
        <line
          x1="-16"
          y1="22"
          x2="-28"
          y2="52"
          stroke="#252830"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="22"
          x2="28"
          y2="52"
          stroke="#252830"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="-34"
          y1="52"
          x2="-22"
          y2="52"
          stroke="#1e2228"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="52"
          x2="34"
          y2="52"
          stroke="#1e2228"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="-28" cy="52" r="3.5" fill="#1a1c22" />
        <circle cx="28" cy="52" r="3.5" fill="#1a1c22" />
      </g>
    </svg>
  );
}

function GlowLayer() {
  return (
    <svg
      id="drone-glow"
      className="drone-part"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
    >
      <defs>
        <radialGradient id="glowGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(58,143,212,0.12)" />
          <stop offset="60%" stopColor="rgba(58,143,212,0.04)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="210" cy="210" rx="130" ry="100" fill="url(#glowGrad)" />
    </svg>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function HeroDroneAssembly() {
  const rootRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const lastIdx = useRef(-1);
  const rafRef = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Cache part elements
    const partEls = new Map<string, HTMLElement>();
    PARTS.forEach(({ id }) => {
      const el = root.querySelector<HTMLElement>(`#drone-${id}`);
      if (el) partEls.set(id, el);
    });

    function setProgress(p: number) {
      const e = cubicEaseInOut(clamp(p));

      PARTS.forEach(({ id, ix, iy, ir, is, opacity: baseOpacity }) => {
        const el = partEls.get(id);
        if (!el) return;

        const inv = 1 - e;
        const x = ix * inv;
        const y = iy * inv;
        const r = ir * inv;
        const s = is + (1 - is) * e;

        let opacity: number;
        if (id === "glow") {
          opacity = e > 0.85 ? ((e - 0.85) / 0.15) * 0.8 : 0;
        } else if (id === "shadow") {
          opacity = baseOpacity + (0.4 - baseOpacity) * e;
        } else {
          opacity = baseOpacity + (1 - baseOpacity) * e;
        }

        el.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg) scale(${s})`;
        el.style.opacity = String(opacity);
      });

      // Update progress bar
      if (fillRef.current) {
        fillRef.current.style.width = `${p * 100}%`;
      }

      // Update status label
      const li = Math.min(5, Math.floor(p * 6));
      if (li !== lastIdx.current && labelRef.current) {
        lastIdx.current = li;
        labelRef.current.textContent = STATUS_LABELS[li];
      }
    }

    // Detect reduced motion or low-power device
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setProgress(1);
      return;
    }

    function update() {
      rafRef.current = 0;
      const target = (root!.closest("section") as HTMLElement) ?? root!;
      const rect = target.getBoundingClientRect();
      const winH = window.innerHeight;
      const start = winH * 0.1;
      const end = winH * 0.85;
      const raw = clamp((start - rect.top) / (start - end + rect.height * 0.5));
      setProgress(raw);
    }

    function onScroll() {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(update);
    }

    setProgress(0);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-label="Drone parts assembling into a complete UAV"
      role="img"
      style={
        {
          width: "100%",
          maxWidth: 520,
          margin: "0 auto",
          padding: "40px 0 60px",
          position: "relative",
        } as CSSProperties
      }
    >
      {/* Drone canvas */}
      <div
        style={{
          position: "relative",
          width: 420,
          height: 420,
          margin: "0 auto",
          perspective: 900,
        }}
      >
        {/* Render order: shadow → arms → motors → legs → body → props → camera → glow */}
        <PartWrapper id="shadow" config={PARTS.find((p) => p.id === "shadow")!}>
          <ShadowLayer />
        </PartWrapper>
        <PartWrapper id="arms" config={PARTS.find((p) => p.id === "arms")!}>
          <ArmsLayer />
        </PartWrapper>
        <PartWrapper id="motors" config={PARTS.find((p) => p.id === "motors")!}>
          <MotorsLayer />
        </PartWrapper>
        <PartWrapper id="legs" config={PARTS.find((p) => p.id === "legs")!}>
          <LegsLayer />
        </PartWrapper>
        <PartWrapper id="body" config={PARTS.find((p) => p.id === "body")!}>
          <BodyLayer />
        </PartWrapper>
        <PartWrapper id="props" config={PARTS.find((p) => p.id === "props")!}>
          <PropsLayer />
        </PartWrapper>
        <PartWrapper id="camera" config={PARTS.find((p) => p.id === "camera")!}>
          <CameraLayer />
        </PartWrapper>
        <PartWrapper id="glow" config={PARTS.find((p) => p.id === "glow")!}>
          <GlowLayer />
        </PartWrapper>
      </div>

      {/* Status row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          marginTop: 24,
        }}
      >
        <Dot />
        <span
          ref={labelRef}
          style={{
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--color-text-tertiary, #888)",
            fontFamily: "monospace",
          }}
        >
          Scroll to assemble
        </span>
        <Dot />
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: 120,
          height: 1,
          background: "rgba(255,255,255,0.1)",
          margin: "12px auto 0",
          overflow: "hidden",
        }}
      >
        <div
          ref={fillRef}
          style={{
            height: "100%",
            width: "0%",
            background: "#3a8fd4",
            transition: "width 0.08s linear",
          }}
        />
      </div>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function PartWrapper({
  id,
  config,
  children,
}: {
  id: string;
  config: PartConfig;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: config.opacity,
        transform: `translate(${config.ix}px, ${config.iy}px) rotate(${config.ir}deg) scale(${config.is})`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}

function Dot() {
  return (
    <div
      style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#3a8fd4",
        opacity: 0.6,
        flexShrink: 0,
      }}
    />
  );
}
