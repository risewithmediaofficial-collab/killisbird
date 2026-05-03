import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function CtaSection() {
  return (
    <section id="cta" className="py-32 bg-black text-white overflow-hidden relative border-t border-border/50">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      
      <div className="container-edge relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-neon"></span>
            <span className="font-mono text-sm tracking-[0.25em] font-bold text-neon uppercase">
              Call To Action
            </span>
            <span className="w-8 h-[2px] bg-neon"></span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-10 tracking-tight">
            Ready to elevate your operations?
          </h2>

          <Link
            to="/contact"
            className="inline-flex h-16 items-center justify-center rounded-full bg-neon px-12 font-mono text-sm uppercase tracking-[0.2em] text-black font-bold transition-all hover:scale-105 shadow-[0_0_40px_rgba(232,69,10,0.4)]"
          >
            Request A Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
