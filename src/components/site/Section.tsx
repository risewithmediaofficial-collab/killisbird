import { type ReactNode } from "react";

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex max-w-full items-center gap-3 font-mono text-[0.60rem] uppercase tracking-[0.26em] text-muted-foreground sm:tracking-[0.34em]">
      <span className="text-neon/70">{index}</span>
      <span className="h-px w-8 shrink-0 sm:w-10" style={{ background: "var(--gradient-line)" }} />
      <span className="min-w-0 break-words">{label}</span>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="container-edge relative pb-20 pt-40 sm:pb-32 sm:pt-48">
      {/* Very light grid */}
      <div
        className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden="true"
      />
      {/* Soft hero gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)", opacity: 0.7 }}
        aria-hidden="true"
      />
      <div className="relative space-y-8 max-w-4xl">
        <SectionLabel index="00" label={kicker} />
        <h1 className="text-[clamp(3.2rem,10vw,5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
