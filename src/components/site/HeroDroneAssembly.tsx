import { type CSSProperties, useEffect, useRef } from "react";
import bodyPng from "@/assets/drone-parts/FRAMES1.png";
import armsPng from "@/assets/drone-parts/FRAMES2.png";
import propellersPng from "@/assets/drone-parts/Propellers1.png";
import cameraPng from "@/assets/drone-parts/FLIGHT-CONTROL-CARD1.png";

const parts = [
  { src: armsPng, alt: "", className: "drone-part-arms", order: 1, x: -34, y: 22, rotate: -7 },
  { src: bodyPng, alt: "", className: "drone-part-body", order: 2, x: 20, y: -28, rotate: 4 },
  { src: propellersPng, alt: "", className: "drone-part-props", order: 3, x: 38, y: 20, rotate: 8 },
  { src: cameraPng, alt: "", className: "drone-part-camera", order: 4, x: -18, y: 34, rotate: -5 },
] as const;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function easeInOut(value: number) {
  return value * value * (3 - 2 * value);
}

export function HeroDroneAssembly() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const setProgress = (value: number) => {
      const inverse = 1 - value;
      const scale = 0.95 + value * 0.05;
      root.style.setProperty("--assembly-progress", value.toFixed(4));
      root.querySelectorAll<HTMLElement>("[data-drone-part]").forEach((part) => {
        const x = Number(part.dataset.scatterX ?? 0) * inverse;
        const y = Number(part.dataset.scatterY ?? 0) * inverse;
        const rotate = Number(part.dataset.scatterRotate ?? 0) * inverse;
        const startOpacity = Number(part.dataset.startOpacity ?? 0.2);

        part.style.opacity = String(startOpacity + (1 - startOpacity) * value);
        part.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`;
      });
    };

    const desktopMotion = window.matchMedia(
      "(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const canRunFullMotion =
      desktopMotion && (navigator.hardwareConcurrency ?? 8) > 4 && memory > 4;

    if (!canRunFullMotion) {
      root.dataset.motion = "static";
      setProgress(1);
      return;
    }

    const hero = root.closest("section") as HTMLElement | null;
    let frame = 0;

    const update = () => {
      frame = 0;
      const target = hero ?? root;
      const top = target.getBoundingClientRect().top + window.scrollY;
      const range = Math.max(target.offsetHeight * 0.48, 320);
      const raw = clamp((window.scrollY - top) / range);
      setProgress(easeInOut(raw));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="hero-drone-assembly"
      style={{ "--assembly-progress": 0 } as CSSProperties}
      aria-label="Drone parts assembling into a complete UAV"
      role="img"
    >
      <div className="hero-drone-assembly__glow" />
      <div className="hero-drone-assembly__frame">
        {parts.map((part) => (
          <img
            key={part.className}
            src={part.src}
            alt={part.alt}
            width={1000}
            height={650}
            className={`hero-drone-assembly__part ${part.className}`}
            style={{ zIndex: part.order }}
            data-drone-part
            data-scatter-x={part.x}
            data-scatter-y={part.y}
            data-scatter-rotate={part.rotate}
            data-start-opacity={part.order === 2 ? 0.28 : 0.16}
            draggable={false}
          />
        ))}
      </div>
      <div className="hero-drone-assembly__scan" />
    </div>
  );
}
