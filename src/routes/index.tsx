import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Layers, Radar, Shield, Sparkles, Target, Zap, Eye, Network, Rocket } from "lucide-react";
import heroDrone from "@/assets/hero-drone.jpg";
import intelImg from "@/assets/intelligence.jpg";
import swarmImg from "@/assets/swarm.jpg";
import { SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Killis Bird — Autonomous Flight. Engineered." },
      { name: "description", content: "Indigenous UAV systems built for precision, intelligence, and control. Defense-grade autonomous aerospace from Killis Bird LLP." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        {/* particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i}
              className="absolute w-1 h-1 rounded-full bg-neon/60 animate-blink"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                animationDelay: `${(i % 8) * 0.4}s`,
                opacity: 0.4,
              }}
            />
          ))}
        </div>

        <div className="container-edge relative z-10 grid lg:grid-cols-12 gap-10 items-center pt-32 pb-20 w-full">
          <div className="lg:col-span-6 space-y-8 animate-fade-up">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-neon uppercase">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse-ring" />
              SYSTEM ONLINE · 2026
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter leading-[0.95]">
              Autonomous Flight.<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-neon)" }}>Engineered.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Indigenous UAV systems built for precision, intelligence, and control. Operating at the intersection of defense, industry, and autonomy.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/products" className="group inline-flex items-center gap-3 px-6 py-3.5 bg-neon text-background font-mono text-[11px] tracking-[0.25em] uppercase hover:shadow-neon transition-all">
                Enter Systems <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-3 px-6 py-3.5 border border-border text-foreground font-mono text-[11px] tracking-[0.25em] uppercase hover:border-neon hover:text-neon transition neon-border">
                Explore Technology
              </Link>
            </div>

            {/* metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50 max-w-md">
              {[["100+", "DRONES / SWARM"], ["480MHz", "FLIGHT MCU"], ["48H", "DEPLOYMENT"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-semibold text-glow">{n}</div>
                  <div className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative animate-float-slow">
              <div className="absolute -inset-12 rounded-full opacity-60" style={{ background: "radial-gradient(circle, oklch(0.55 0.2 250 / 0.4), transparent 60%)", filter: "blur(40px)" }} />
              <img src={heroDrone} alt="Killis Bird stealth UAV" width={1536} height={1024} className="relative w-full object-contain" />
            </div>
            {/* HUD overlays */}
            <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-neon">
              <div>● TARGET LOCK</div>
              <div className="text-muted-foreground mt-1">ALT 12,340 FT</div>
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-[0.2em] text-neon text-right">
              <div>UAV-KB-07</div>
              <div className="text-muted-foreground mt-1">CLASSIFIED</div>
            </div>
          </div>
        </div>

        {/* ticker */}
        <div className="absolute bottom-0 inset-x-0 border-y border-border/40 bg-background/40 backdrop-blur overflow-hidden">
          <div className="flex animate-ticker font-mono text-[10px] tracking-[0.3em] text-muted-foreground py-3 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex shrink-0">
                {["INDIGENOUS · MADE IN BHARAT", "STM32H743 · 480MHz", "MIL-STD-810G COMPLIANT", "SWARM CAPABLE 100+", "AEROSPACE GRADE CARBON", "OPERATION SINDOOR PROVEN", "AI-DRIVEN AUTONOMY"].map((t) => (
                  <span key={t} className="px-8 flex items-center gap-8"><span className="text-neon">◆</span>{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDENTITY LAYER */}
      <section className="container-edge py-32 relative">
        <SectionLabel index="01" label="Identity Layer" />
        <div className="mt-10 grid lg:grid-cols-12 gap-12 items-end">
          <h2 className="lg:col-span-8 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            We don't <span className="text-muted-foreground">supply</span> drones.<br />
            We engineer <span className="text-neon text-glow">aerial intelligence</span>.
          </h2>
          <p className="lg:col-span-4 text-muted-foreground leading-relaxed">
            Killis Bird operates as a deep-tech engineering firm building indigenous UAV components from first principles — collaborators in pushing the boundaries of unmanned flight.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border/40">
          {[
            { icon: Sparkles, title: "Imagine", text: "Concepts conceived inside classified labs." },
            { icon: Cpu, title: "Ideate", text: "Engineered through indigenous R&D." },
            { icon: Rocket, title: "Innovative", text: "Deployed across defense and industry." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-10 group hover:bg-surface transition relative">
              <Icon className="text-neon mb-6" size={28} />
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-2">PRINCIPLE</div>
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEMS LAYER */}
      <section className="relative py-32 border-y border-border/50 bg-surface/30">
        <div className="absolute inset-0 bg-grid-fine opacity-20" />
        <div className="container-edge relative">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <SectionLabel index="02" label="Systems Layer" />
              <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl">
                Modular UAV systems. Engineered to exceed.
              </h2>
            </div>
            <Link to="/products" className="font-mono text-[11px] tracking-[0.25em] uppercase text-neon hover:underline inline-flex items-center gap-2">
              View All Systems <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Cpu, code: "FCC-H743", title: "Flight Control Card", spec: "STM32H743 · 480 MHz · 8 motor outputs" },
              { icon: Layers, code: "FRM-5IN", title: "Aerospace Frame", spec: "Carbon fiber + AL7075 · 108g dry · True-X" },
              { icon: Zap, code: "PRP-1045", title: "Propeller System", spec: "Glass-filled nylon · CW/CCW configurations" },
              { icon: Network, code: "SWM-GCS", title: "Swarm Ground Control", spec: "5–100+ drones · centralized & distributed" },
              { icon: Shield, code: "JMR-BPK", title: "Backpack Jammer", spec: "1.5–2 km · 400W · 400MHz–5.8GHz" },
              { icon: Target, code: "JMR-HND", title: "Handheld Jammer", spec: "2 km range · 200W · trigger-ready" },
            ].map(({ icon: Icon, code, title, spec }) => (
              <div key={code} className="group relative glass p-7 hover:border-neon/60 transition-all duration-500 corner-brackets overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.78 0.18 230 / 0.15), transparent 70%)" }} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-8">
                    <Icon className="text-neon" size={24} />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">{code}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{spec}</p>
                  <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-neon">VIEW SPEC →</span>
                    <span className="font-mono text-[10px] text-muted-foreground">● ACTIVE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTELLIGENCE LAYER */}
      <section className="container-edge py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-sm opacity-50" style={{ background: "radial-gradient(circle, oklch(0.55 0.2 250 / 0.3), transparent 70%)", filter: "blur(30px)" }} />
            <div className="relative scan-line border border-neon/40 overflow-hidden">
              <img src={intelImg} alt="Flight controller schematic" loading="lazy" width={1280} height={896} className="w-full" />
              <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] text-neon">SCHEMATIC · FCC-H743</div>
              <div className="absolute bottom-3 right-3 font-mono text-[10px] tracking-[0.2em] text-neon">REV 7.2</div>
            </div>
          </div>
          <div className="space-y-8">
            <SectionLabel index="03" label="Intelligence Layer" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Avionics built around <span className="text-neon">real-time autonomy</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Custom flight control firmware, sensor fusion at 1kHz, and ICM42688 IMU stabilization — engineered for split-second decisions in contested airspace.
            </p>
            <div className="grid grid-cols-2 gap-px bg-border/40">
              {[
                ["480MHz", "STM32H743 MCU"],
                ["6-AXIS", "ICM42688 IMU"],
                ["8x", "MOTOR OUTPUTS"],
                ["5x", "UART / 2x I²C"],
              ].map(([n, l]) => (
                <div key={l} className="bg-background p-6">
                  <div className="text-2xl font-semibold text-glow">{n}</div>
                  <div className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY LAYER */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={swarmImg} alt="" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 0%, transparent 50%, var(--background) 100%)" }} />
        </div>
        <div className="container-edge relative">
          <div className="max-w-3xl">
            <SectionLabel index="04" label="Capability Layer" />
            <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Defense. Surveillance. Industry.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl">
              Operationally validated across mission-critical environments. From Operation Sindoor to precision agriculture.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {[
              { icon: Shield, t: "Defense Grade", d: "Combat-proven FPV strikers and tactical UAVs deployed with the Indian Armed Forces." },
              { icon: Eye, t: "Surveillance & ISR", d: "Long-range telemetry, geofencing, and real-time situational awareness." },
              { icon: Radar, t: "Industrial Intelligence", d: "Precision agriculture, logistics, and infrastructure inspection at scale." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="glass-strong p-8 relative corner-brackets">
                <Icon className="text-violet" size={28} />
                <h3 className="mt-6 text-xl font-semibold">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D / CTA */}
      <section className="container-edge py-32">
        <div className="relative glass-strong p-12 md:p-20 overflow-hidden corner-brackets">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30" style={{ background: "radial-gradient(circle, oklch(0.65 0.22 295 / 0.6), transparent 70%)" }} />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-30" style={{ background: "radial-gradient(circle, oklch(0.78 0.18 230 / 0.6), transparent 70%)" }} />
          <div className="relative grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-6">
              <SectionLabel index="05" label="R&D · Innovation Layer" />
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                Building the future from a <span className="text-neon">classified lab</span>.
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Our engineers prototype, simulate, and field-test every component in-house. If it flies under the Killis Bird name, it was forged here.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link to="/contact" className="inline-flex items-center justify-between gap-3 px-6 py-4 bg-neon text-background font-mono text-[11px] tracking-[0.25em] uppercase hover:shadow-neon transition">
                Initiate Contact <ArrowRight size={14} />
              </Link>
              <Link to="/careers" className="inline-flex items-center justify-between gap-3 px-6 py-4 border border-border text-foreground font-mono text-[11px] tracking-[0.25em] uppercase hover:border-neon hover:text-neon transition">
                Join the Mission <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
