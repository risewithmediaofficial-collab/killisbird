import { createFileRoute } from "@tanstack/react-router";
import { Check, Compass, Cpu, Globe, Layers, Target } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";
import { ScrollStack, ScrollStackItem } from "@/components/ui/scroll-stack";

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

const missionVision = [
  {
    label: "Our Mission",
    icon: Target,
    text: "To deliver premium, high-performance UAV components and systems that empower clients with reliability, flexibility, and complete autonomy in their operations.",
  },
  {
    label: "Our Vision",
    icon: Compass,
    text: "To become the most trusted and innovative partner in the UAV ecosystem, delivering unmatched value through robust, adaptable, and forward-thinking technologies.",
  },
];

const whatWeDo = [
  "Designing and manufacturing core UAV components",
  "Customizing solutions for commercial, industrial, and specialized applications",
  "Providing technical support and consultation for UAV integration",
  "Ensuring all components exceed industry performance and reliability standards",
];

const whyKillisBird = [
  {
    icon: Globe,
    title: "Indigenous Solutions",
    description: "Proudly developed and manufactured with local expertise.",
  },
  {
    icon: Cpu,
    title: "Component Precision",
    description: "We understand how every part contributes to UAV performance.",
  },
  {
    icon: Layers,
    title: "Customer Empowerment",
    description: "Full autonomy in selecting and customizing components.",
  },
  {
    icon: Target,
    title: "Technology Driven",
    description: "Focused on innovation, R&D, and future-ready design.",
  },
];

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
        <div className="space-y-8 text-lg leading-8 text-slate-600 lg:col-span-7">
          <p>
            We understand the critical importance of each component in achieving optimal performance
            and reliability in UAVs. That&apos;s why we focus on delivering solutions that not only
            meet but exceed industry standards — ensuring products are both innovative and robust.
          </p>
          <p>
            We believe in empowering customers with full autonomy in their selection process. Our
            extensive catalogue is designed to offer a wide range of options — from commercial to
            industrial to specialized applications.
          </p>
          <p>
            With deep expertise and dedication to excellence, we aim to be the trusted partner for
            businesses leveraging advanced UAV technologies. We are not just suppliers — we are
            collaborators in pushing the boundaries of what&apos;s possible in unmanned aerial
            systems.
          </p>
        </div>

        <aside className="space-y-6 lg:col-span-5 lg:pl-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
            // Manifesto
          </div>
          <p className="text-3xl font-semibold leading-tight text-neon">
            {"We're not just part of the UAV market — we help "}
            <span className="text-neon">shape its future</span>.
          </p>
          <div className="font-mono text-[10px] tracking-[0.3em] text-slate-500">
            — KILLIS BIRD LLP · 2026
          </div>
        </aside>
      </section>

      <section className="container-edge py-20 md:py-32">
        <ScrollStack
          className="mx-auto max-w-5xl"
          itemDistance={100}
          itemStackDistance={34}
          baseScale={0.9}
        >
          {missionVision.map(({ label, icon: Icon, text }, index) => (
            <ScrollStackItem key={label}>
              <div className="card-surface h-full rounded-[28px] border border-black/6 bg-white/95 p-8 sm:p-10">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                  <Icon size={16} />
                  {label}
                </div>
                <p className="mt-8 text-[1.55rem] leading-[1.6] text-neon sm:text-[1.75rem]">
                  {text}
                </p>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>

      <section className="container-edge py-20 md:py-32">
        <SectionLabel index="03" label="What we do" />
        <h2 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium uppercase leading-[0.98] tracking-[-0.04em] text-neon">
          Engineering UAV systems end-to-end.
        </h2>

        <div className="mt-16">
          <ScrollStack
            className="mx-auto max-w-5xl"
            itemDistance={72}
            itemStackDistance={24}
            baseScale={0.92}
          >
            {whatWeDo.map((item, index) => (
              <ScrollStackItem key={item}>
                <div className="card-surface rounded-[24px] border border-black/6 bg-white/95 p-8 sm:p-10">
                  <div className="flex items-start gap-4">
                    <Check className="mt-1 shrink-0 text-neon" size={20} />
                    <p className="text-xl leading-9 text-slate-900">{item}</p>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container-edge">
          <SectionLabel index="04" label="Why Killis Bird" />
          <div className="mt-16">
            <ScrollStack
              className="mx-auto max-w-5xl"
              itemDistance={84}
              itemStackDistance={28}
              baseScale={0.9}
            >
              {whyKillisBird.map(({ icon: Icon, title, description }, index) => (
                <ScrollStackItem key={title}>
                  <div className="card-surface h-full rounded-[24px] border border-black/6 bg-white/95 p-8 sm:p-10">
                    <Icon className="text-neon" size={28} />
                    <h3 className="mt-6 text-2xl font-semibold text-neon">{title}</h3>
                    <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">{description}</p>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </section>

      <section className="container-edge py-20 text-center md:py-32">
        <div className="mx-auto max-w-5xl">
          <SectionLabel index="05" label="Application Areas" />
          <h2 className="mt-8 text-[clamp(1.7rem,4.2vw,3.6rem)] font-medium uppercase leading-[1.08] tracking-[-0.04em] text-neon">
            Whether you&apos;re building for{" "}
            <span className="text-neon">precision agriculture</span>,{" "}
            <span className="text-violet">industrial logistics</span>, or{" "}
            <span className="text-neon">advanced surveillance</span> — Killis Bird is your trusted
            collaborator in flight.
          </h2>
        </div>
      </section>
    </>
  );
}
