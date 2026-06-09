import { useEffect, useState } from "react";
import dronePrimary from "@/assets/drone-parts/DRONE1.png";
import droneSecondary from "@/assets/drone-parts/DRONE2.png";
import flightCard from "@/assets/drone-parts/FLIGHT-CONTROL-CARD1.png";
import frame from "@/assets/drone-parts/FRAMES2.png";
import landingVideo from "@/assets/landing page video.mp4";
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

const typingWords = ["BOLD.", "AUTONOMOUS.", "MISSION-READY."];

function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    const isWordComplete = typedText === currentWord;
    const isWordRemoved = typedText === "";

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          setTypedText(currentWord.slice(0, typedText.length + 1));
          if (isWordComplete) {
            setIsDeleting(true);
          }
        } else {
          setTypedText(currentWord.slice(0, typedText.length - 1));
          if (isWordRemoved) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % typingWords.length);
          }
        }
      },
      isWordComplete && !isDeleting ? 1100 : isDeleting ? 50 : 95,
    );

    return () => window.clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-background pt-28 sm:pt-32"
      >
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center sm:block">
          <video
            className="w-full h-full object-cover sm:w-full sm:h-full"
            style={{
              aspectRatio: "9 / 16",
            }}
            src={landingVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.66)_0%,rgba(18,18,18,0.42)_28%,rgba(25,25,25,0.22)_55%,rgba(28,28,28,0.34)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_35%,rgba(0,0,0,0.08)_100%)]" />

        <div className="container-edge relative z-10 flex min-h-[calc(100svh-7rem)] flex-col justify-center pb-20 sm:pb-24 lg:min-h-[calc(100svh-8rem)] lg:pb-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="max-w-[42rem]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8 flex items-center gap-3 sm:mb-10"
              >
                <span className="h-[2px] w-10 bg-neon" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-white/80 sm:text-xs">
                  Killis Bird :: Imagine, Ideate, Innovative
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[7ch] text-left font-display text-[clamp(3.1rem,6.2vw,6.4rem)] font-semibold uppercase leading-[0.94] tracking-[-0.04em] text-white"
              >
                <span className="block tracking-[-0.035em] sm:tracking-[-0.045em]">
                  PRECISION ENGINEERED
                </span>
                <span className="mt-3 block min-h-[1.1em] text-neon">
                  {typedText}
                  <span className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-neon align-middle" />
                </span>
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-background py-24 sm:py-28 lg:py-32">
        <div className="container-edge">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.9 }}
              className="grid gap-5"
            >
              <div className="grid gap-5 lg:grid-cols-[minmax(0,1.42fr)_minmax(14rem,0.58fr)]">
                <div className="card-surface card-glass overflow-hidden rounded-[2rem] p-6 sm:p-8">
                  <HeroDroneCardsCarousel slides={heroSlides} />
                </div>

                <div className="grid gap-5 content-start">
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    {heroStats.map((item) => (
                      <div key={item.label} className="glass rounded-[1.4rem] px-5 py-4">
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
                  <div className="hidden lg:block min-w-0">
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
    </>
  );
}

export { HeroSection };
