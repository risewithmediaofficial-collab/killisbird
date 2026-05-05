import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import droneBg from "@/assets/hero-drone.jpg";

export function CtaSection() {
  return (
    <section id="cta" className="relative py-28 md:py-36 bg-black text-white overflow-hidden border-t border-border/50">
      {/* Faint drone silhouette background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={droneBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.06] mix-blend-luminosity"
        />
      </div>

      {/* Subtle animated gradient overlay behind text */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, color-mix(in srgb, var(--neon) 12%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="absolute inset-0 bg-grid opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

      <div className="container-edge relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-neon" />
            <span className="font-mono text-sm tracking-[0.25em] font-bold text-neon uppercase">
              Call To Action
            </span>
            <span className="w-8 h-[2px] bg-neon" />
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight tracking-tight">
            Ready to elevate your operations?
          </h2>

          {/* Two buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex h-14 items-center justify-center rounded-full bg-neon px-10 font-mono text-sm uppercase tracking-[0.18em] text-white font-bold transition-all hover:scale-105 hover:shadow-[0_8px_32px_rgba(232,69,10,0.5)] shadow-[0_4px_20px_rgba(232,69,10,0.3)]"
            >
              Request A Call
            </Link>
            <a
              href="mailto:info@killisbird.com"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 px-10 font-mono text-sm uppercase tracking-[0.18em] text-white font-bold transition-all hover:border-neon hover:text-neon hover:scale-105"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
