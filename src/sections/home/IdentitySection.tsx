import { motion } from "framer-motion";

export function IdentitySection() {
  return (
    <section
      id="welcome"
      className="container-edge section-y relative bg-background border-t border-border/50"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[2px] bg-neon"></span>
            <span className="font-mono text-xs sm:text-sm tracking-[0.25em] font-bold text-foreground/80 uppercase">
              Welcome to Killis Bird
            </span>
            <span className="w-10 h-[2px] bg-neon"></span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tight mb-10">
            Delivering Cutting-Edge UAV Components for a Smarter Future.
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
            At Killis Bird, we are redefining what is possible in unmanned aerial systems through innovative, indigenous solutions designed to elevate performance and reliability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
