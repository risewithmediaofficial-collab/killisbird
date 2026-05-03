import { createFileRoute } from "@tanstack/react-router";
import { Cpu, MapPin, GraduationCap, Briefcase, Wrench, ArrowUpRight } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Killis Bird" },
      {
        name: "description",
        content:
          "Join the team building the future of UAV and electronics innovation. Open positions for hardware engineers and prototyping technicians.",
      },
    ],
  }),
  component: CareersPage,
});

const positions = [
  {
    id: "hde",
    title: "Hardware Design Engineer",
    dept: "Electronics",
    icon: Cpu,
    location: "Krishnagiri, Tamil Nadu",
    qualification: "B.E / B.Tech or M.E / M.Tech in ECE / EEE / Embedded / Power Electronics",
    experience: "0–1+ Years",
    skills: ["Power electronics", "PCB design", "Motor drives", "ECAD tools"],
  },
  {
    id: "pt",
    title: "Prototyping Technician",
    dept: "Electronics",
    icon: Wrench,
    location: "Krishnagiri, Tamil Nadu",
    qualification: "Diploma in ECE / EEE",
    experience: "Freshers / 1+ year",
    skills: ["Soldering (SMD/through-hole)", "PCB assembly", "Test equipment handling"],
  },
];

function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Recruit"
        title={
          <>
            Build the future of <span className="text-neon">UAV & electronics</span>.
          </>
        }
        subtitle="As part of our team, you will be responsible for end-to-end electronic hardware development — building advanced UAV systems with a strong focus on innovation, reliability, and performance."
      />

      <section className="container-edge space-y-6 pb-20 md:pb-24">
        <SectionLabel index="01" label="Open Positions" />
        <div className="grid gap-5 mt-6">
          {positions.map((p, i) => (
            <article
              key={p.id}
              className="bg-surface-elevated border border-border shadow-soft rounded-[24px] grid gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-12 hover:border-neon/30 transition-colors"
            >
              <div className="lg:col-span-4 space-y-4">
                <div className="font-mono text-[10px] tracking-[0.3em] text-neon">
                  POS-{String(i + 1).padStart(3, "0")}
                </div>
                <div className="flex items-start gap-3">
                  <p.icon className="mt-1 shrink-0 text-neon" size={28} />
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">{p.title}</h2>
                    <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground mt-1">
                      // {p.dept.toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-neon" /> {p.location}
                </div>
              </div>

              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/50">
                <div className="bg-background p-5 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase mb-2">
                    <GraduationCap size={12} className="text-neon" /> Qualification
                  </div>
                  <div className="text-sm font-medium">{p.qualification}</div>
                </div>
                <div className="bg-background p-5 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase mb-2">
                    <Briefcase size={12} className="text-neon" /> Experience
                  </div>
                  <div className="text-sm font-medium">{p.experience}</div>
                </div>
                <div className="bg-background p-5 sm:col-span-2">
                  <div className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase mb-3">
                    // Skills
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 border border-border text-xs font-mono tracking-wider"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-end gap-3 lg:col-span-2 lg:flex-col lg:items-end">
                <a
                  href="https://www.killisbird.com/apply.php"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-neon rounded-full px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background transition hover:scale-105 shadow-md hover:shadow-neon/50"
                >
                  Apply Now <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="relative mt-12 overflow-hidden bg-white border border-border rounded-[32px] shadow-sm p-10 text-center sm:p-12 md:mt-16 md:p-20">
          <div className="absolute inset-0 bg-grid-fine opacity-10" />
          <p className="relative mx-auto max-w-4xl text-[clamp(1.55rem,5vw,2.5rem)] font-semibold leading-tight tracking-tight text-foreground/90">
            "At Killis Bird, you don't just build products — you build the{" "}
            <span className="text-neon">future of electronics</span>. Ready to innovate with us?"
          </p>
        </div>
      </section>
    </>
  );
}
