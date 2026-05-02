import { createFileRoute } from "@tanstack/react-router";
import { Cpu, MapPin, GraduationCap, Briefcase, Wrench, ArrowUpRight } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Killis Bird" },
      { name: "description", content: "Join the team building the future of UAV and electronics innovation. Open positions for hardware engineers and prototyping technicians." },
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
        title={<>Build the future of <span className="text-neon">UAV & electronics</span>.</>}
        subtitle="As part of our team, you will be responsible for end-to-end electronic hardware development — building advanced UAV systems with a strong focus on innovation, reliability, and performance."
      />

      <section className="container-edge pb-24 space-y-6">
        <SectionLabel index="01" label="Open Positions" />
        <div className="grid gap-5 mt-6">
          {positions.map((p, i) => (
            <article key={p.id} className="glass p-8 md:p-10 grid lg:grid-cols-12 gap-8 corner-brackets relative hover:border-neon/60 transition">
              <div className="lg:col-span-4 space-y-4">
                <div className="font-mono text-[10px] tracking-[0.3em] text-neon">POS-{String(i + 1).padStart(3, "0")}</div>
                <div className="flex items-center gap-3">
                  <p.icon className="text-neon" size={28} />
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">{p.title}</h2>
                    <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground mt-1">// {p.dept.toUpperCase()}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-neon" /> {p.location}
                </div>
              </div>

              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-px bg-border/40">
                <div className="bg-background p-5">
                  <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase mb-2">
                    <GraduationCap size={12} className="text-neon" /> Qualification
                  </div>
                  <div className="text-sm">{p.qualification}</div>
                </div>
                <div className="bg-background p-5">
                  <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase mb-2">
                    <Briefcase size={12} className="text-neon" /> Experience
                  </div>
                  <div className="text-sm">{p.experience}</div>
                </div>
                <div className="bg-background p-5 sm:col-span-2">
                  <div className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase mb-3">// Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {p.skills.map((s) => (
                      <span key={s} className="px-3 py-1 border border-border text-xs font-mono tracking-wider">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 flex lg:flex-col items-start lg:items-end justify-end gap-3">
                <a href="https://www.killisbird.com/apply.php" target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 px-5 py-3 bg-neon text-background font-mono text-[11px] tracking-[0.2em] uppercase hover:shadow-neon transition w-full justify-center">
                  Apply <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 glass-strong p-12 md:p-16 text-center corner-brackets relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-fine opacity-20" />
          <p className="relative text-2xl md:text-4xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
            "At Killis Bird, you don't just build products — you build the <span className="text-neon">future of electronics</span>. Ready to innovate with us?"
          </p>
        </div>
      </section>
    </>
  );
}
