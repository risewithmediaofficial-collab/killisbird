import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Layers, Wind, Network } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";
import fccImg from "@/assets/fcc.jpg";
import frameImg from "@/assets/frame.jpg";
import propImg from "@/assets/propeller.jpg";
import swarmImg from "@/assets/swarm.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Systems — Killis Bird UAV Components" },
      { name: "description", content: "Flight control cards, aerospace frames, propellers, and swarm GCS — engineered for next-generation UAVs." },
    ],
  }),
  component: ProductsPage,
});

type Spec = { k: string; v: string };
type Product = {
  code: string;
  name: string;
  icon: typeof Cpu;
  image: string;
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
    image: fccImg,
    blurb: "The brain of the drone — sensor fusion, stabilization, and navigation in real-time.",
    description: "Engineered for next-generation UAVs requiring ultra-fast processing, precise sensor integration, and robust expandability — all within a compact footprint. Built around the powerful STM32H743 microcontroller, it delivers exceptional computational performance for real-time control, stabilization, and navigation.",
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
    image: frameImg,
    blurb: "Aerospace-grade carbon body. Engineered for racing, freestyle, and tactical use.",
    description: "A high-performance 5-inch class drone frame engineered for durability, precision, and versatility. True X-configuration with high-strength carbon fiber and AL7075 aluminum — exceptional rigidity and impact resistance, lightweight profile.",
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
    image: propImg,
    blurb: "Precision-molded glass-filled nylon. Vibration-free flight.",
    description: "High-performance precision-molded propellers with glass-filled nylon construction for consistent aerodynamic performance and vibration-free flight. Available in CW and CCW for all quadcopter configurations.",
    specs: [
      { k: "Model 1045", v: "10\" diameter · 4.5\" pitch" },
      { k: "Model 5045", v: "5\" diameter · 4.5\" pitch" },
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
    image: swarmImg,
    blurb: "Coordinate 5–100+ drones in real-time. Mission-critical command.",
    description: "Cutting-edge Drone Swarm Management System enabling seamless coordination of 5 to 100+ drones in real-time. Designed for mission-critical operations across defense, industrial, agricultural, and research applications.",
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

function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Systems Layer"
        title={<>Modular UAV systems. <span className="text-neon">Premium-grade.</span></>}
        subtitle="Each component is engineered, tested, and field-proven inside our facility. Browse the catalog of indigenous systems."
      />

      <div className="container-edge space-y-24 pb-24">
        {products.map((p, i) => (
          <article key={p.code} id={p.code.split(" ")[0]} className="grid lg:grid-cols-12 gap-10 items-start">
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative scan-line border border-border/60 overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024} className="w-full aspect-square object-cover" />
                <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.25em] text-neon">{p.code}</div>
                <div className="absolute bottom-3 right-3 font-mono text-[10px] tracking-[0.25em] text-neon">● ACTIVE</div>
                <div className="absolute inset-0 pointer-events-none border border-neon/0 hover:border-neon/40 transition" />
              </div>
            </div>
            <div className={`lg:col-span-6 space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <SectionLabel index={String(i + 1).padStart(2, "0")} label={p.code.split("·")[1]?.trim() ?? p.name} />
              <div className="flex items-center gap-4">
                <p.icon className="text-neon" size={32} />
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{p.name}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">{p.blurb}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

              <div className="grid grid-cols-2 gap-px bg-border/40 mt-6">
                {p.specs.map((s) => (
                  <div key={s.k} className="bg-background p-4">
                    <div className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase">{s.k}</div>
                    <div className="text-sm mt-1.5 font-medium">{s.v}</div>
                  </div>
                ))}
              </div>

              {p.highlights && (
                <ul className="space-y-2 pt-4">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-neon mt-1">▸</span>{h}
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
