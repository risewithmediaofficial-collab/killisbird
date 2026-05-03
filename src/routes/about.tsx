import { createFileRoute } from "@tanstack/react-router";
import { Check, Compass, Cpu, Globe, Layers, Target } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Killis Bird LLP" },
      {
        name: "description",
        content:
          "Killis Bird is a forward-thinking engineering firm advancing the UAV industry through indigenous, high-performance components and systems.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Identity"
        title={
          <>
            Empowering UAV innovation with <span className="text-neon">indigenous excellence</span>.
          </>
        }
        subtitle="Killis Bird is dedicated to delivering indigenous, cutting-edge solutions for the ever-growing unmanned aerial vehicles market — premium components that form the backbone of UAV systems."
      />

      <section className="container-edge grid gap-12 py-20 md:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7 space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p>
            We understand the critical importance of each component in achieving optimal performance
            and reliability in UAVs. That's why we focus on delivering solutions that not only meet
            but exceed industry standards — ensuring products are both innovative and robust.
          </p>
          <p>
            We believe in empowering customers with full autonomy in their selection process. Our
            extensive catalogue is designed to offer a wide range of options — from commercial to
            industrial to specialized applications.
          </p>
          <p>
            With deep expertise and dedication to excellence, we aim to be the trusted partner for
            businesses leveraging advanced UAV technologies. We are not just suppliers — we are
            collaborators in pushing the boundaries of what's possible in unmanned aerial systems.
          </p>
        </div>
        <aside className="bg-surface-elevated border border-border shadow-soft rounded-[24px] space-y-6 p-8 sm:p-10 lg:col-span-5 h-fit relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-neon opacity-20" />
          <div className="font-mono text-[10px] tracking-[0.3em] text-neon uppercase">// Manifesto</div>
          <p className="text-3xl font-semibold leading-snug">
            "We're not just part of the UAV market — we help{" "}
            <span className="text-neon">shape its future</span>."
          </p>
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground pt-6 border-t border-border/50">
            — KILLIS BIRD LLP · 2026
          </div>
        </aside>
      </section>

      <section className="container-edge grid gap-px bg-border/40 py-20 md:grid-cols-2 md:py-32">
        {[
          {
            label: "Mission",
            icon: Target,
            text: "To deliver premium, high-performance UAV components and systems that empower clients with reliability, flexibility, and complete autonomy in their operations.",
          },
          {
            label: "Vision",
            icon: Compass,
            text: "To become the most trusted and innovative partner in the UAV ecosystem, delivering unmatched value through robust, adaptable, and forward-thinking technologies.",
          },
        ].map(({ label, icon: Icon, text }) => (
          <div key={label} className="bg-white border border-border rounded-[32px] p-10 sm:p-14 md:p-16 shadow-sm hover:shadow-md transition-shadow">
            <div className="card-content">
              <div className="mb-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-neon uppercase">
                <Icon size={16} /> OUR {label}
              </div>
              <p className="text-2xl leading-relaxed text-foreground/90 font-medium">{text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="container-edge py-20 md:py-32">
        <SectionLabel index="03" label="What we do" />
        <h2 className="heading-lg mt-8 max-w-4xl">Engineering UAV systems end-to-end.</h2>
        <ul className="mt-16 grid md:grid-cols-2 gap-px bg-border/40">
          {[
            "Designing and manufacturing core UAV components",
            "Customizing solutions for commercial, industrial, and specialized applications",
            "Providing technical support and consultation for UAV integration",
            "Ensuring all components exceed industry performance and reliability standards",
          ].map((t) => (
            <li key={t} className="card-stat flex items-start gap-4 p-8 sm:p-10">
              <Check className="mt-1 shrink-0 text-neon" size={20} />
              <span className="text-lg">{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border/50 bg-surface/30 py-20 md:py-32">
        <div className="container-edge">
          <SectionLabel index="04" label="Why Killis Bird" />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                t: "Indigenous Solutions",
                d: "Proudly developed and manufactured with local expertise.",
              },
              {
                icon: Cpu,
                t: "Component Precision",
                d: "We understand how every part contributes to UAV performance.",
              },
              {
                icon: Layers,
                t: "Customer Empowerment",
                d: "Full autonomy in selecting and customizing components.",
              },
              {
                icon: Target,
                t: "Technology Driven",
                d: "Focused on innovation, R&D, and future-ready design.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-surface-elevated border border-border shadow-soft rounded-[24px] p-8 md:p-10 hover:border-neon/30 transition-colors">
                <div className="card-content">
                  <Icon className="mb-6 text-neon" size={28} />
                  <h3 className="text-xl font-semibold">{t}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-edge py-20 md:py-32">
        <div className="relative overflow-hidden bg-white border border-border rounded-[32px] shadow-sm p-10 sm:p-16 md:p-24 text-center max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-grid-fine opacity-10" />
          <div className="relative">
            <SectionLabel index="05" label="Application Areas" />
            <h2 className="heading-lg mt-8 leading-[1.2] mx-auto">
              Whether you're building for <span className="text-neon">precision agriculture</span>,{" "}
              <span className="text-violet">industrial logistics</span>, or{" "}
              <span className="text-neon">advanced surveillance</span> — Killis Bird is your trusted
              collaborator in flight.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
