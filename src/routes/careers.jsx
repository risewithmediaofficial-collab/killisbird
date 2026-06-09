import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Cpu,
  GraduationCap,
  MapPin,
  Wrench,
} from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";
import { ScrollStack, ScrollStackItem } from "@/components/ui/scroll-stack";

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

export function CareersPage() {
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
        <div className="mt-8">
          <ScrollStack
            className="mx-auto max-w-6xl"
            itemDistance={92}
            itemStackDistance={28}
            baseScale={0.9}
          >
          {positions.map((position, index) => {
            const Icon = position.icon;
            return (
              <ScrollStackItem key={position.id}>
                <article className="card-surface rounded-[28px] border border-black/6 bg-white/95 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8 md:p-10">
                  <div className="grid gap-8 lg:grid-cols-12">
                    <div className="space-y-4 lg:col-span-4">
                      <div className="font-mono text-[10px] tracking-[0.3em] text-neon">
                        POS-{String(index + 1).padStart(3, "0")}
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4ee] text-neon shadow-[0_10px_30px_rgba(240,90,18,0.12)]">
                          <Icon size={28} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-semibold tracking-tight text-neon">
                            {position.title}
                          </h2>
                          <div className="mt-1 font-mono text-[11px] tracking-[0.2em] text-slate-500">
                            // {position.dept.toUpperCase()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin size={14} className="text-neon" />
                        {position.location}
                      </div>
                    </div>

                    <div className="grid gap-6 lg:col-span-6 sm:grid-cols-2">
                      <div>
                        <div className="mb-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
                          <GraduationCap size={12} className="text-neon" />
                          Qualification
                        </div>
                        <div className="text-sm leading-7 text-slate-700">
                          {position.qualification}
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
                          <Briefcase size={12} className="text-neon" />
                          Experience
                        </div>
                        <div className="text-sm leading-7 text-slate-700">
                          {position.experience}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
                          // Skills
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-black/8 bg-[#fff8f4] px-3 py-1.5 text-xs font-mono tracking-[0.12em] text-slate-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start justify-end lg:col-span-2">
                      <Link
                        to="/contact"
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-neon px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition hover:scale-105 lg:w-auto"
                      >
                        Apply Now
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollStackItem>
            );
          })}
          </ScrollStack>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-16 text-center"
        >
          <SectionLabel index="02" label="Why Join" />
          <p className="mx-auto mt-8 max-w-4xl text-[clamp(1.55rem,5vw,2.5rem)] font-semibold leading-tight tracking-tight text-neon">
            {"At Killis Bird, you don't just build products — you build the "}
            <span className="text-neon">future of electronics</span>
            {". Ready to innovate with us?"}
          </p>
        </motion.div>
      </section>
    </>
  );
}
