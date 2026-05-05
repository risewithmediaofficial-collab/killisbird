import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Layers, Wind, Network } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";

import p01_1 from "@/assets/drone-parts/FLIGHT-CONTROL-CARD1.png";
import p01_2 from "@/assets/drone-parts/FLIGHT-CONTROL-CARD2.png";
import p02_1 from "@/assets/drone-parts/FRAMES1.png";
import p02_2 from "@/assets/drone-parts/FRAMES2.png";
import p02_3 from "@/assets/drone-parts/FRAMES3.png";
import p03_1 from "@/assets/drone-parts/Propellers1.png";
import p03_2 from "@/assets/drone-parts/Propellers2.png";
import p03_3 from "@/assets/drone-parts/Propellers3.png";
import p04_1 from "@/assets/drone-parts/Swarm – GCS1.png";
import p04_2 from "@/assets/drone-parts/Swarm – GCS2.png";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Systems — Killis Bird UAV Components" },
      {
        name: "description",
        content:
          "Flight control cards, aerospace frames, propellers, and swarm GCS — engineered for next-generation UAVs.",
      },
    ],
  }),
  component: ProductsPage,
});

type Spec = { k: string; v: string };
type Product = {
  code: string;
  name: string;
  icon: typeof Cpu;
  images: string[];
  blurb: string;
  description: string;
  specs: Spec[];
  highlights?: string[];
};

const products: Product[] = [
  {
    code: "01 · FCC-H743",
    name: "Flight Control Card",
    icon: Cpu,
    images: [p01_1, p01_2],
    blurb: "The brain of the drone — sensor fusion, stabilization, and navigation in real-time.",
    description:
      "Engineered for next-generation UAVs requiring ultra-fast processing, precise sensor integration, and robust expandability — all within a compact footprint. Built around the powerful STM32H743 microcontroller, it delivers exceptional computational performance for real-time control, stabilization, and navigation.",
    specs: [
      { k: "MCU", v: "STM32H743 @ 480 MHz" },
      { k: "IMU", v: "ICM42688 (6-axis)" },
      { k: "Barometer", v: "MS5611" },
      { k: "OSD", v: "Inbuilt OSD chip" },
      { k: "Motor Outputs", v: "Up to 8" },
      { k: "UART Ports", v: "5x" },
      { k: "I²C Buses", v: "2x" },
      { k: "Logging", v: "MicroSD blackbox" },
      { k: "USB", v: "Type-C" },
      { k: "Dimensions", v: "36 × 36 mm" },
      { k: "Platforms", v: "Multirotor · Fixed-wing · Hybrid" },
    ],
  },
  {
    code: "02 · FRM-5IN",
    name: "Aerospace Frame",
    icon: Layers,
    images: [p02_1, p02_2, p02_3],
    blurb: "Aerospace-grade carbon body. Engineered for racing, freestyle, and tactical use.",
    description:
      "A high-performance 5-inch class drone frame engineered for durability, precision, and versatility. True X-configuration with high-strength carbon fiber and AL7075 aluminum — exceptional rigidity and impact resistance, lightweight profile.",
    specs: [
      { k: "Frame Size", v: "5-inch class" },
      { k: "Dry Weight", v: "108 grams" },
      { k: "Motor Mount", v: "16×16 / 19×19 mm" },
      { k: "Propeller Support", v: "Up to 5.1 inches" },
      { k: "Layout", v: "True X-configuration" },
      { k: "Materials", v: "Carbon fiber + AL7075" },
    ],
  },
  {
    code: "03 · PRP-NYLON",
    name: "Propeller System",
    icon: Wind,
    images: [p03_1, p03_2, p03_3],
    blurb: "Precision-molded glass-filled nylon. Vibration-free flight.",
    description:
      "High-performance precision-molded propellers with glass-filled nylon construction for consistent aerodynamic performance and vibration-free flight. Available in CW and CCW for all quadcopter configurations.",
    specs: [
      { k: "Model 1045", v: '10" diameter · 4.5" pitch' },
      { k: "Model 5045", v: '5" diameter · 4.5" pitch' },
      { k: "Material", v: "Glass-filled nylon" },
      { k: "Rotation", v: "CW + CCW available" },
    ],
    highlights: [
      "Precision molded for consistent aerodynamics",
      "High rigidity and durability",
      "Balanced design — smoother flight",
      "Available in CW and CCW configurations",
    ],
  },
  {
    code: "04 · SWM-GCS",
    name: "Swarm — Ground Control",
    icon: Network,
    images: [p04_1, p04_2],
    blurb: "Coordinate 5–100+ drones in real-time. Mission-critical command.",
    description:
      "Cutting-edge Drone Swarm Management System enabling seamless coordination of 5 to 100+ drones in real-time. Designed for mission-critical operations across defense, industrial, agricultural, and research applications.",
    specs: [
      { k: "Swarm Scale", v: "5 to 100+ drones" },
      { k: "Control Type", v: "Centralized / distributed" },
      { k: "Telemetry", v: "2.4 GHz / 900 MHz" },
      { k: "Networking", v: "Wi-Fi · LTE · Mesh" },
      { k: "Navigation", v: "Precise waypoint routing" },
      { k: "Geofencing", v: "Operational boundaries" },
      { k: "No-Fly Zones", v: "Regulatory enforcement" },
      { k: "Autonomy", v: "Independent launch · hover · RTH" },
    ],
    highlights: [
      "Battery status real-time",
      "GPS coordinates per unit",
      "Orientation telemetry",
      "Speed monitoring",
      "Signal strength tracking",
    ],
  },
];

function ProductGallery({ images, code }: { images: string[]; code: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative overflow-hidden group aspect-square w-full bg-white/5">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="h-full w-full shrink-0 flex items-center justify-center bg-white"
          >
            <img
              src={src}
              alt={`${code} view ${idx + 1}`}
              loading="lazy"
              className="h-full w-full object-contain mix-blend-multiply"
            />
          </div>
        ))}
      </div>

      <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.25em] text-neon z-10 bg-background/80 px-2 py-1 backdrop-blur-md rounded-sm border border-border/50">
        {code}
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-[0.25em] text-neon z-10 bg-background/80 px-2 py-1 backdrop-blur-md rounded-sm border border-border/50">
        ● ACTIVE
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? "bg-neon w-8" : "bg-foreground/20 w-2 hover:bg-foreground/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-background/50 text-foreground/70 hover:text-neon hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-all z-10 backdrop-blur-sm border border-border/50"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-background/50 text-foreground/70 hover:text-neon hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-all z-10 backdrop-blur-sm border border-border/50"
          >
            →
          </button>
        </>
      )}
    </div>
  );
}

function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Systems Layer"
        title={
          <>
            Modular UAV systems. <span className="text-neon">Premium-grade.</span>
          </>
        }
        subtitle="Each component is engineered, tested, and field-proven inside our facility. Browse the catalog of indigenous systems."
      />

      {/* Quick-Nav strip */}
      <div className="sticky top-[80px] z-30 border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="container-edge flex gap-1 overflow-x-auto py-2 scrollbar-none">
          {products.map((p) => (
            <a
              key={p.code}
              href={`#${p.code.split(" ")[0]}`}
              className="shrink-0 rounded-sm px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground whitespace-nowrap"
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>

      <div className="container-edge grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-24 md:pb-32">
        {products.map((p, i) => (
          <article
            key={p.code}
            id={p.code.split(" ")[0]}
            className="scroll-mt-40 card-surface flex flex-col h-full"
          >
            <div className="w-full shrink-0 border-b border-border/50">
              <ProductGallery images={p.images} code={p.code} />
            </div>
            <div className="flex flex-col flex-1 p-6 space-y-5 text-left">
              <SectionLabel
                index={String(i + 1).padStart(2, "0")}
                label={p.code.split("·")[1]?.trim() ?? p.name}
              />
              <div className="flex items-center gap-4">
                <p.icon className="shrink-0 text-neon" size={28} />
                <h2 className="text-2xl font-bold text-foreground leading-tight">{p.name}</h2>
              </div>
              <p className="text-base font-medium text-foreground leading-snug">{p.blurb}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

              <div className="grid gap-px bg-border/40 grid-cols-2 pt-2">
                {p.specs.map((s) => (
                  <div key={s.k} className="bg-background min-w-0 p-4 flex flex-col justify-center">
                    <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                      {s.k}
                    </div>
                    <div className="mt-1 break-words text-sm font-semibold text-foreground">{s.v}</div>
                  </div>
                ))}
              </div>

              {p.highlights && (
                <ul className="space-y-2 pt-4 border-t border-border/50">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-neon mt-0.5">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
