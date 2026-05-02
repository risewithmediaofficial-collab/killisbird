import { type ReactNode } from "react";

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.35em] text-neon uppercase">
      <span>{index}</span>
      <span className="h-px w-10 bg-neon/60" />
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}

export function PageHero({ kicker, title, subtitle }: { kicker: string; title: ReactNode; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-20 container-edge">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative space-y-6 max-w-4xl">
        <SectionLabel index="00" label={kicker} />
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">{title}</h1>
        {subtitle && <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
