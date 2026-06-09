import { motion } from "framer-motion";
import { systems } from "@/data/home";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import imgFcc from "@/assets/fcc.jpg";
import imgFrame from "@/assets/frame.jpg";
import imgProp from "@/assets/propeller.jpg";
import imgSwarm from "@/assets/swarm.jpg";

const productVisuals = {
  "FCC-H743": {
    src: imgFcc,
    chips: ["Tactical", "Enterprise", "Precision Build"],
    designation: "Flight intelligence module",
  },
  "FRM-5IN": {
    src: imgFrame,
    chips: ["Carbon Body", "Rigid Frame", "Lightweight"],
    designation: "Aerospace structural platform",
  },
  "PRP-1045": {
    src: imgProp,
    chips: ["Balanced Lift", "Fast Response", "Stable Motion"],
    designation: "Propulsion and control layer",
  },
  "SWM-100X": {
    src: imgSwarm,
    chips: ["Autonomous Fleet", "Mission Sync", "AI Control"],
    designation: "Ground control and swarm layer",
  },
};

function SystemsSection() {
  const testimonials = systems.map((item, index) => {
    const visual = productVisuals[item.code];

    return {
      title: item.title,
      eyebrow: item.code,
      designation: visual.designation,
      quote: item.spec,
      description: item.spec,
      src: visual.src,
      number: String(index + 1).padStart(2, "0"),
      chips: visual.chips,
    };
  });

  return (
    <section id="systems" className="relative overflow-hidden bg-background section-y">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <span className="h-[2px] w-8 bg-neon" />
          <span className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-neon">
            Our Products
          </span>
          <span className="h-[2px] w-8 bg-neon" />
        </motion.div>

        <AnimatedTestimonials testimonials={testimonials} className="max-w-[72rem]" />
      </div>
    </section>
  );
}

export { SystemsSection };
