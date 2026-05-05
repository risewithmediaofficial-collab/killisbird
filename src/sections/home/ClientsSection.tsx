import { motion } from "framer-motion";

const clients = [
  "AeroDef Solutions",
  "Skyvision Robotics",
  "TechForce India",
  "DroneVentures",
  "AeroTech Systems",
  "SkySolutions",
  "DefenceCore",
  "Bharat Aerospace",
];

export function ClientsSection() {
  const doubled = [...clients, ...clients];

  return (
    <section className="section-y bg-background border-t border-border/50 overflow-hidden">
      <div className="container-edge mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-neon" />
            <span className="font-mono text-sm tracking-[0.25em] font-bold text-neon uppercase">
              Trusted By
            </span>
            <span className="w-8 h-[2px] bg-neon" />
          </div>
          <h2 className="heading-lg font-black text-foreground">OUR CLIENTS</h2>
        </motion.div>
      </div>

      {/* Infinite scrolling logos */}
      <div className="clients-marquee-wrap">
        <div className="clients-marquee">
          {doubled.map((client, i) => (
            <div key={i} className="clients-logo-item">
              <span className="font-display font-black text-xs tracking-widest uppercase">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
