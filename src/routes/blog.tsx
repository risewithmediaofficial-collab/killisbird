import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Intel — Killis Bird Field Reports" },
      { name: "description", content: "Field reports and intelligence briefings from the frontier of UAV warfare and aerospace innovation." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    id: "fpv-future-bharat",
    code: "FR-013",
    title: "The Future of Tactical Warfare for Bharat",
    date: "13 Sep 2025",
    excerpt: "FPV Striker Drones — kamikaze-style UAVs designed for precision strikes. Combat-proven during Operation Sindoor with the Indian Army.",
    body: [
      { h: "What Are FPV Striker Drones?", p: "FPV (First-Person View) Striker Drones are kamikaze-style unmanned aerial vehicles designed for precision strikes in hostile environments. Unlike traditional drones built mainly for surveillance, FPV Strikers are lightweight, agile, and equipped with explosive payloads that can neutralize enemy assets with pinpoint accuracy. By streaming live video directly to the operator's goggles, these drones allow real-time battlefield control — making them one of the most effective tools in modern asymmetric warfare." },
      { h: "Why They Matter", list: [
        "Precision Strikes — neutralize tanks, bunkers, and artillery with minimal collateral damage",
        "Low Cost, High Impact — fraction of the cost of missiles or fighter jets",
        "Difficult to Detect — small size and high maneuverability evade enemy radar",
        "Real-Time Control — split-second battlefield decisions via FPV technology",
      ] },
      { h: "Indigenous vs Imported", list: [
        "Complete Atmanirbhar Bharat alignment — reducing reliance on foreign defence tech",
        "Customization for Indian Armed Forces — local terrains, climates, missions",
        "Rapid deployment within 48 hours across India",
        "Cost-effective scalable production",
      ] },
      { h: "Operation Sindoor", p: "During Operation Sindoor, FPV Striker drones played a combat-proven role with the Indian Army." },
    ],
  },
  {
    id: "fpv-strikers",
    code: "FR-010",
    title: "FPV Striker Drones: The Future of Tactical Warfare for Bharat",
    date: "10 Sep 2025",
    excerpt: "A deeper field analysis of FPV Striker capabilities, indigenous production advantages, and operational deployment with Indian forces.",
    body: [
      { h: "Asymmetric Warfare, Reimagined", p: "FPV Strikers shift the calculus of modern combat — small, agile, and devastatingly effective. They give field operators the ability to engage hardened targets with precision previously reserved for guided munitions costing 100x more." },
      { h: "Operational Edge", list: [
        "48-hour rapid deployment across theatres",
        "Tailored payloads for specific mission profiles",
        "Compatible with existing Indian command infrastructure",
      ] },
    ],
  },
  {
    id: "anti-drone-jammers",
    code: "FR-010-B",
    title: "How Anti-Drone Jammers Are Redefining Modern Warfare in India",
    date: "10 Sep 2025",
    excerpt: "From cross-border smuggling to terror threats — non-kinetic, portable, cost-effective electronic warfare systems are India's answer.",
    body: [
      { h: "The New Battlefield", p: "Modern warfare has moved beyond tanks, jets, and artillery. Drones have become central to battlefields — used for surveillance, reconnaissance, and even precision attacks. But the same technology is also being misused by terror outfits, insurgents, and smugglers. India's response: anti-drone jammers." },
      { h: "How Jammers Neutralize Threats", list: [
        "Signal Disruption — cuts the radio link between drone and operator",
        "GPS Jamming — blocks satellite navigation, forcing disorientation",
        "Fail-Safe Neutralization — drone hovers, lands, or crashes harmlessly",
      ] },
      { h: "Why India Needs Them", list: [
        "Cross-Border Security — disable drones smuggling weapons and narcotics",
        "Terrorism & Insurgency — protect VIP events, military bases, infrastructure",
        "Battlefield Protection — defense against kamikaze FPV swarms",
        "Airspace Safety — safeguard airports, nuclear plants, refineries",
        "Future Threats — scalable systems for faster, cheaper enemy drones",
      ] },
      { h: "Backpack Drone Jammer", list: [
        "Range: 1.5–2 km · Frequencies: 400 MHz – 5.8 GHz",
        "Antenna: Omni + directional · Power: 400W",
        "Deployment: < 1 minute · Weight: 24 kg",
      ] },
      { h: "Handheld Jammer Shield", list: [
        "Range: up to 2 km · Frequencies: 900 MHz – 5.8 GHz",
        "Trigger-ready operation · Power: 200W",
        "Battery: 1 hour · Weight: 5.3 kg",
      ] },
      { h: "Compliance", p: "Both systems are MIL-STD-810G compliant, dust/water resistant, and Made in Bharat for Bharat." },
    ],
  },
];

function BlogPage() {
  return (
    <>
      <PageHero
        kicker="Intelligence Feed"
        title={<>Field reports from the <span className="text-neon">frontier</span>.</>}
        subtitle="Briefings, doctrine, and combat-validated insights from the Killis Bird research desk."
      />

      <section className="container-edge pb-24 space-y-12">
        {posts.map((p, i) => (
          <article key={p.id} className="grid lg:grid-cols-12 gap-8 group glass p-8 md:p-12 corner-brackets relative hover:border-neon/60 transition">
            <div className="lg:col-span-3 space-y-3">
              <div className="font-mono text-[10px] tracking-[0.3em] text-neon">{p.code}</div>
              <div className="font-mono text-xs text-muted-foreground tracking-[0.15em]">{p.date}</div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground pt-3 border-t border-border/50">// ADMIN</div>
            </div>
            <div className="lg:col-span-9 space-y-6">
              <SectionLabel index={String(i + 1).padStart(2, "0")} label="Briefing" />
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight">{p.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{p.excerpt}</p>

              <div className="space-y-6 pt-4">
                {p.body.map((s, j) => (
                  <div key={j} className="space-y-3">
                    <h3 className="text-sm font-mono tracking-[0.2em] text-neon uppercase">▸ {s.h}</h3>
                    {"p" in s && <p className="text-sm text-muted-foreground leading-relaxed">{s.p}</p>}
                    {"list" in s && (
                      <ul className="space-y-2">
                        {s.list!.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="text-violet mt-1">●</span>{item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}

        <div className="text-center pt-8">
          <Link to="/contact" className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase text-neon hover:underline">
            Request classified briefing <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
