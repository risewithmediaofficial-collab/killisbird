import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cpu, Layers, Network, Wind } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";
import p01 from "@/assets/FLIGHT-CONTROL-CARD1-removebg-preview.png";
import p02 from "@/assets/FRAMES1-removebg-preview.png";
import p03 from "@/assets/Propellers3-removebg-preview.png";
import p04 from "@/assets/DRONE1-removebg-preview.png";

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

const products = [
  {
    code: "01 · FCC-H743",
    name: "Flight Control Card",
    icon: Cpu,
    images: [p01],
    blurb:
      "The brain of the drone — sensor fusion, stabilization, and navigation in real-time.",
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
    gradient: ["hsl(15 100% 57%)", "hsl(34 95% 68%)"],
  },
  {
    code: "02 · FRM-5IN",
    name: "Aerospace Frame",
    icon: Layers,
    images: [p02],
    blurb:
      "Aerospace-grade carbon body. Engineered for racing, freestyle, and tactical use.",
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
    gradient: ["hsl(205 88% 64%)", "hsl(232 90% 74%)"],
  },
  {
    code: "03 · PRP-NYLON",
    name: "Propeller System",
    icon: Wind,
    images: [p03],
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
    gradient: ["hsl(88 66% 58%)", "hsl(145 65% 58%)"],
  },
  {
    code: "04 · SWM-GCS",
    name: "Swarm — Ground Control",
    icon: Network,
    images: [p04],
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
    gradient: ["hsl(260 84% 66%)", "hsl(318 90% 68%)"],
  },
];

const cardVariants = {
  offscreen: {
    y: 260,
    rotate: 0,
    opacity: 1,
  },
  onscreen: (index) => ({
    y: 42,
    rotate: index % 2 === 0 ? -6 : 6,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.34,
      duration: 0.95,
      delay: index * 0.08,
    },
  }),
};

function ProductGallery({ images, code }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative h-[360px] sm:h-[420px] lg:h-[520px]">
      <div className="absolute inset-[10%_7%_10%_7%] overflow-visible">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative flex h-full w-full shrink-0 items-center justify-center p-6 sm:p-8"
            >
              <motion.img
                src={src}
                alt={`${code} view ${idx + 1}`}
                loading="lazy"
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_30px_40px_rgba(15,23,42,0.18)]"
                initial={{ y: 120, opacity: 0, scale: 0.72, rotate: -6 }}
                whileInView={{ y: -8, opacity: 1, scale: 1.06, rotate: 0 }}
                viewport={{ once: true, amount: 0.65 }}
                transition={{ type: "spring", bounce: 0.42, duration: 1.05 }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-4 top-4 rounded-full border border-black/8 bg-white/85 px-4 py-2 font-mono text-[10px] tracking-[0.32em] text-[#f05a12] shadow-sm backdrop-blur-md">
        {code}
      </div>

      <div className="absolute bottom-4 right-4 rounded-full border border-black/8 bg-white/90 px-4 py-2 font-mono text-[10px] tracking-[0.32em] text-[#f05a12] shadow-sm backdrop-blur-md">
        ● ACTIVE
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx
                  ? "w-10 bg-[#f05a12]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product, index }) {
  const Icon = product.icon;
  const isZigZag = index % 2 === 1;

  return (
    <section
      id={product.code.split(" ")[0]}
      className="relative scroll-mt-40 px-4 sm:px-6"
      style={sectionContainer}
    >
      <div
        className={`mx-auto grid w-full max-w-[1180px] items-start gap-10 lg:grid-cols-[minmax(320px,520px)_minmax(0,1fr)] lg:gap-12 ${isZigZag ? "lg:[&_.product-copy]:order-1 lg:[&_.product-media]:order-2 lg:[&_.product-copy]:text-right" : ""}`}
      >
        <div className="product-media" style={cardContainer}>
          <motion.div
            className="relative z-10 w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[500px]"
            custom={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.55 }}
            variants={cardVariants}
            style={card}
          >
            <ProductGallery images={product.images} code={product.code} />
          </motion.div>
        </div>

        <div className="product-copy pt-4 lg:pt-10">
          <SectionLabel
            index={String(index + 1).padStart(2, "0")}
            label={product.code.split("·")[1]?.trim() ?? product.name}
          />

          <div className={`mt-5 flex items-center gap-4 ${isZigZag ? "lg:justify-end" : ""}`}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4ee] text-[#f05a12] shadow-[0_10px_30px_rgba(240,90,18,0.16)]">
              <Icon size={26} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold leading-tight text-neon sm:text-[2rem]">
                {product.name}
              </h2>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
                {product.blurb}
              </p>
            </div>
          </div>

          <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.32em] text-slate-500">
            Product briefing
          </div>
          <p className={`mt-4 text-[15px] leading-8 text-slate-700 sm:text-[1.02rem] ${isZigZag ? "lg:ml-auto lg:max-w-[44rem]" : "max-w-[44rem]"}`}>
            {product.description}
          </p>

          <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {product.specs.map((spec) => (
              <div key={spec.k} className="pb-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  {spec.k}
                </div>
                <div className="mt-2 text-sm font-semibold leading-6 text-slate-900">
                  {spec.v}
                </div>
              </div>
            ))}
          </div>

          {product.highlights && (
            <div className="mt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-slate-500">
                Mission highlights
              </div>
              <ul className="mt-4 grid gap-x-10 gap-y-3 text-sm text-slate-600 sm:grid-cols-2">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 text-[#f05a12]">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
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

      <div className="sticky top-[80px] z-30 border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="container-edge flex gap-1 overflow-x-auto py-2 scrollbar-none">
          {products.map((product) => (
            <a
              key={product.code}
              href={`#${product.code.split(" ")[0]}`}
              className="shrink-0 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground whitespace-nowrap"
            >
              {product.name}
            </a>
          ))}
        </div>
      </div>

      <div style={container}>
        {products.map((product, index) => (
          <ProductCard key={product.code} product={product} index={index} />
        ))}
      </div>
    </>
  );
}

const container = {
  margin: "64px auto 0",
  maxWidth: "1320px",
  paddingBottom: "140px",
  width: "100%",
};

const sectionContainer = {
  marginBottom: "28px",
  paddingTop: "18px",
  position: "relative",
};

const cardContainer = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  paddingBottom: "28px",
  paddingTop: "20px",
  position: "relative",
};

const card = {
  transformOrigin: "10% 60%",
};
