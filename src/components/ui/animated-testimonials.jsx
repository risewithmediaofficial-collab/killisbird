"use client";

import { useEffect, useMemo, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultAngles = [0, -7, 6, -4, 8, -6];

function WordReveal({ text, activeKey }) {
  return (
    <motion.p
      key={activeKey}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-6 sm:leading-8 sm:text-[15px] lg:text-base"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${activeKey}-${index}`}
          initial={{ filter: "blur(8px)", opacity: 0, y: 4 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.18,
            ease: "easeOut",
            delay: 0.015 * index,
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
}

export function AnimatedTestimonials({ testimonials, autoplay = false, className }) {
  const [active, setActive] = useState(0);
  const rotations = useMemo(
    () => testimonials.map((_, index) => defaultAngles[index] ?? ((index % 5) - 2) * 3),
    [testimonials],
  );

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return undefined;

    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [autoplay, testimonials.length]);

  if (!testimonials?.length) return null;

  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-5xl grid-cols-1 gap-7 lg:grid-cols-[minmax(0,0.98fr)_minmax(20rem,0.9fr)] lg:items-center lg:gap-10",
        className,
      )}
    >
      <div className="relative order-2 lg:order-1">
        <div className="relative h-[28rem] sm:h-[26rem] lg:h-[27rem] xl:h-[29rem]">
          <AnimatePresence initial={false}>
            {testimonials.map((testimonial, index) => {
              const offset = (index - active + testimonials.length) % testimonials.length;
              const isActive = index === active;
              const isHidden = offset > 2 && !isActive;

              return (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                    rotate: rotations[index],
                    y: 18,
                  }}
                  animate={{
                    opacity: isHidden ? 0 : isActive ? 1 : 0.78,
                    scale: isActive ? 1 : 0.97 - offset * 0.018,
                    rotate: isActive ? 0 : rotations[index] * 0.72,
                    y: isActive ? 0 : offset * 10,
                    x: isActive ? 0 : offset * 8,
                    zIndex: isActive ? 30 : testimonials.length - offset,
                  }}
                  exit={{ opacity: 0, scale: 0.92, y: -12 }}
                  transition={{
                    duration: 0.42,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-[#274887]/25 bg-[#101a35] shadow-[0_22px_58px_rgba(15,23,42,0.2)] sm:rounded-[2rem]">
                    <img
                      src={testimonial.src}
                      alt={testimonial.title}
                      draggable={false}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,16,36,0.12),rgba(15,27,68,0.58))]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,14,28,0.05)_0%,rgba(9,14,28,0.36)_45%,rgba(9,14,28,0.82)_100%)]" />

                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-8">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#f05a12]">
                          {testimonial.eyebrow}
                        </div>
                        <h3 className="mt-3 max-w-[8ch] text-[2.2rem] font-semibold uppercase leading-[0.9] tracking-[0.05em] text-white sm:mt-4 sm:max-w-[12ch] sm:text-4xl lg:text-[2.8rem] xl:text-[3.05rem]">
                          {testimonial.title}
                        </h3>
                      </div>

                      <div
                        className="font-display text-[4rem] font-semibold leading-none text-transparent opacity-55 sm:text-[5.2rem] lg:text-[6.2rem] xl:text-[7rem]"
                        style={{ WebkitTextStroke: "2px rgba(255,255,255,0.45)" }}
                      >
                        {testimonial.number}
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8">
                      <p className="max-w-3xl text-[0.98rem] leading-7 text-white/88 sm:text-lg sm:leading-9">
                        {testimonial.quote}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                        {testimonial.chips?.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-white/18 bg-white/6 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-md sm:px-4 sm:text-[11px] sm:tracking-[0.22em]"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="order-1 flex min-w-0 flex-col justify-between lg:order-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[active].title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-neon sm:text-[11px] sm:tracking-[0.28em]">
              Systems overview
            </div>
            <h3 className="mt-3 text-[1.75rem] font-semibold uppercase leading-tight tracking-[0.03em] text-neon sm:mt-4 sm:text-[2.1rem] lg:text-[2.35rem]">
              {testimonials[active].title}
            </h3>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:mt-3 sm:text-sm sm:tracking-[0.18em]">
              {testimonials[active].designation}
            </p>
            <WordReveal
              text={testimonials[active].description}
              activeKey={testimonials[active].title}
            />
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex flex-col gap-4 border-t border-border/70 pt-5 sm:mt-8 sm:gap-5 sm:pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-full px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] transition-all sm:text-[10px] sm:tracking-[0.22em]",
                  active === index
                    ? "bg-[#fff4ee] text-neon shadow-[inset_0_0_0_1px_rgba(240,90,18,0.14)]"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900",
                )}
              >
                {item.eyebrow}
              </button>
            ))}
          </div>

          <div className="flex shrink-0 gap-3 self-end lg:self-auto">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-slate-900 transition-all hover:border-neon/35 hover:text-neon sm:h-11 sm:w-11"
              aria-label="Previous system"
            >
              <IconArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-slate-900 transition-all hover:border-neon/35 hover:text-neon sm:h-11 sm:w-11"
              aria-label="Next system"
            >
              <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
