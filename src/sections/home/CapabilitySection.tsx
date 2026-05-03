import { motion } from "framer-motion";
import { PremiumCard } from "@/components/site/PremiumCard";
import { capabilities } from "@/data/home";

export function CapabilitySection() {
  return (
    <section id="services" className="relative section-y bg-background border-t border-border/50">
      <div className="container-edge relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col gap-4 text-center md:mb-20 items-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-neon"></span>
            <span className="font-mono text-sm tracking-[0.25em] font-bold text-neon uppercase">
              Capabilities
            </span>
            <span className="w-8 h-[2px] bg-neon"></span>
          </div>
          <h2 className="heading-lg max-w-3xl font-black text-foreground">WHAT WE DO?</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <PremiumCard key={i} delay={i * 0.1}>
                <div className="card-surface p-8 sm:p-10 rounded-[24px] border border-border bg-surface-elevated flex flex-col h-full transition-colors hover:border-neon/40 group">
                  <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:bg-neon group-hover:text-black transition-colors">
                    <Icon size={20} />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4 group-hover:text-neon transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {item.text}
                  </p>
                </div>
              </PremiumCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
