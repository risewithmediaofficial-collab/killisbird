import { createFileRoute } from "@tanstack/react-router";
import { Check, Compass, Cpu, Globe, Layers, Target } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Killis Bird LLP" },
      { name: "description", content: "Killis Bird is a forward-thinking engineering firm advancing the UAV industry through indigenous, high-performance components and systems." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Identity"
        title={<>Empowering UAV innovation with <span className="text-neon">indigenous excellence</span>.</>}
        subtitle="Killis Bird is dedicated to delivering indigenous, cutting-edge solutions for the ever-growing unmanned aerial vehicles market — premium components that form the backbone of UAV systems."
      />

      <section className="container-edge py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
          <p>We understand the critical importance of each component in achieving optimal performance and reliability in UAVs. That's why we focus on delivering solutions that not only meet but exceed industry standards — ensuring products are both innovative and robust.</p>
          <p>We believe in empowering customers with full autonomy in their selection process. Our extensive catalogue is designed to offer a wide range of options — from commercial to industrial to specialized applications.</p>
          <p>With deep expertise and dedication to excellence, we aim to be the trusted partner for businesses leveraging advanced UAV technologies. We are not just suppliers — we are collaborators in pushing the boundaries of what's possible in unmanned aerial systems.</p>
        </div>
        <aside className="lg:col-span-5 glass p-8 space-y-5 relative corner-brackets">
          <div className="font-mono text-[10px] tracking-[0.3em] text-neon">// MANIFESTO</div>
          <p className="text-2xl font-semibold leading-snug">
            "We're not just part of the UAV market — we help <span className="text-neon">shape its future</span>."
          </p>
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground pt-4 border-t border-border/50">
            — KILLIS BIRD LLP · 2026
          </div>
        </aside>
      </section>

      <section className="container-edge py-20 grid md:grid-cols-2 gap-px bg-border/40">
        {[
          { label: "Mission", icon: Target, text: "To deliver premium, high-performance UAV components and systems that empower clients with reliability, flexibility, and complete autonomy in their operations." },
          { label: "Vision", icon: Compass, text: "To become the most trusted and innovative partner in the UAV ecosystem, delivering unmatched value through robust, adaptable, and forward-thinking technologies." },
        ].map(({ label, icon: Icon, text }) => (
          <div key={label} className="bg-background p-12">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-neon mb-6">
              <Icon size={14} /> OUR {label.toUpperCase()}
            </div>
            <p className="text-xl leading-relaxed">{text}</p>
          </div>
        ))}
      </section>

      <section className="container-edge py-24">
        <SectionLabel index="03" label="What we do" />
        <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">Engineering UAV systems end-to-end.</h2>
        <ul className="mt-12 grid md:grid-cols-2 gap-px bg-border/40">
          {[
            "Designing and manufacturing core UAV components",
            "Customizing solutions for commercial, industrial, and specialized applications",
            "Providing technical support and consultation for UAV integration",
            "Ensuring all components exceed industry performance and reliability standards",
          ].map((t) => (
            <li key={t} className="bg-background p-8 flex items-start gap-4">
              <Check className="text-neon mt-1 shrink-0" size={18} />
              <span className="text-base">{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-surface/30 border-y border-border/50 py-24">
        <div className="container-edge">
          <SectionLabel index="04" label="Why Killis Bird" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Globe, t: "Indigenous Solutions", d: "Proudly developed and manufactured with local expertise." },
              { icon: Cpu, t: "Component Precision", d: "We understand how every part contributes to UAV performance." },
              { icon: Layers, t: "Customer Empowerment", d: "Full autonomy in selecting and customizing components." },
              { icon: Target, t: "Technology Driven", d: "Focused on innovation, R&D, and future-ready design." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="glass p-7 corner-brackets relative hover:border-neon/60 transition">
                <Icon className="text-neon mb-5" size={24} />
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-edge py-24">
        <div className="glass-strong p-12 md:p-16 corner-brackets relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-fine opacity-20" />
          <div className="relative">
            <SectionLabel index="05" label="Application Areas" />
            <h2 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-tight">
              Whether you're building for <span className="text-neon">precision agriculture</span>, <span className="text-violet">industrial logistics</span>, or <span className="text-neon">advanced surveillance</span> — Killis Bird is your trusted collaborator in flight.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
