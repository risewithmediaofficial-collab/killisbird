import dronePrimary from "@/assets/drone-parts/DRONE1.png";
import droneSecondary from "@/assets/drone-parts/DRONE2.png";
import flightCard from "@/assets/drone-parts/FLIGHT-CONTROL-CARD1.png";
import frame from "@/assets/drone-parts/FRAMES2.png";
import propeller from "@/assets/drone-parts/Propellers1.png";
import swarm from "@/assets/drone-parts/swarm-gcs1.png";
import { motion } from "framer-motion";
import { HeroDroneCardsCarousel } from "@/components/site/HeroDroneCardsCarousel";

const heroStats = [
  { value: "100+", label: "Swarm capable fleet" },
  { value: "480MHz", label: "Flight MCU power" },
  { value: "MIL-STD", label: "Mission-grade build" },
];

const heroDetails = [
  {
    title: "Flight Control Card",
    text: "Fast onboard control for balance, telemetry, and precise autonomous decision making.",
    image: flightCard,
  },
  {
    title: "Aerospace Frame",
    text: "Rigid carbon structure designed to carry payloads while staying stable in aggressive flight.",
    image: frame,
  },
  {
    title: "Propeller System",
    text: "Balanced propulsion components tuned for lift, speed response, and smoother directional control.",
    image: propeller,
  },
];

const heroSlides = [
  {
    kicker: "Landing Visual",
    title: "Autonomous Flight System",
    image: dronePrimary,
    description:
      "Primary multi-rotor presentation focused on stable autonomous flight, payload balance, and real-world deployment readiness.",
  },
  {
    kicker: "Alternate Render",
    title: "Agile Drone Platform",
    image: droneSecondary,
    description:
      "Compact high-response drone configuration designed for rapid maneuvering, inspection tasks, and tactical adaptability.",
  },
  {
    kicker: "Mission Core",
    title: "Flight Control Precision",
    image: flightCard,
    description:
      "High-speed onboard electronics tuned for telemetry, stabilization, and decision-making across demanding flight conditions.",
  },
  {
    kicker: "Structure Layer",
    title: "Aerospace Frame Build",
    image: frame,
    description:
      "Lightweight carbon architecture engineered for rigidity, cleaner airflow, and improved payload support during aggressive use.",
  },
  {
    kicker: "Swarm Layer",
    title: "Coordinated Fleet Control",
    image: swarm,
    description:
      "Ground-control and swarm orchestration visuals built around synchronized missions, fleet awareness, and scalable command logic.",
  },
];

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background pt-28 sm:pt-32"
    >
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 bg-grid opacity-45 [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
      <div className="absolute left-[-10rem] top-[32rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(27,45,107,0.12)_0%,_transparent_72%)] blur-3xl" />
      <div className="absolute right-[-8rem] top-10 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(232,69,10,0.14)_0%,_transparent_70%)] blur-3xl" />

      <div className="container-edge relative z-10 flex min-h-[100svh] flex-col justify-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center justify-center gap-3 sm:mb-10"
        >
          <span className="h-[2px] w-10 bg-neon" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/72 sm:text-xs">
            Killis Bird :: Imagine, Ideate, Innovative
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="heading-h1 mx-auto max-w-[13ch] text-center text-[clamp(4rem,11vw,9.5rem)] leading-[0.9] tracking-[0.02em]"
        >
          <span className="block tracking-[-0.035em] sm:tracking-[-0.045em]">
            PRECISION ENGINEERED
          </span>
          <span className="block text-neon">BOLD.</span>
        </motion.h1>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.9 }}
            className="grid gap-5"
          >
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(15rem,0.65fr)]">
              <div className="card-surface card-glass overflow-hidden rounded-[2rem] p-6 sm:p-8">
                <HeroDroneCardsCarousel slides={heroSlides} />
              </div>

              <div className="grid gap-5">
                <div className="card-surface overflow-hidden rounded-[1.6rem] border border-border/60 bg-white/90 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    Live Secondary View
                  </p>
                  <div className="mt-4 flex min-h-[10rem] items-center justify-center rounded-[1.2rem] bg-secondary/35 p-4">
                    <img
                      src={droneSecondary}
                      alt="Secondary drone render"
                      className="h-full max-h-[9rem] w-full object-contain transition-transform duration-700 hover:scale-[1.04]"
                      draggable={false}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {heroStats.map((item) => (
                    <div
                      key={item.label}
                      className="glass rounded-[1.4rem] px-5 py-4"
                    >
                      <div className="font-display text-2xl font-semibold tracking-[0.06em] text-foreground">
                        {item.value}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.9 }}
            className="grid gap-4"
          >
            {heroDetails.map((item) => (
              <article
                key={item.title}
                className="card-surface card-flat flex items-center gap-4 rounded-[1.5rem] p-4 sm:gap-5 sm:p-5"
              >
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.15rem] bg-white p-3 shadow-soft sm:h-28 sm:w-28">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain mix-blend-multiply"
                    draggable={false}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold uppercase tracking-[0.08em] text-foreground sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-[15px]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
