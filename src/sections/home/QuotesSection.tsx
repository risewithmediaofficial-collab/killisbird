import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    quote:
      "Killis Bird's FCC-H743 is the most reliable flight controller we've used in our FPV builds. Zero compromises on precision.",
    author: "Arjun Mehta",
    role: "Lead Drone Engineer, AeroDef Solutions",
  },
  {
    quote:
      "The carbon fiber frames are aerospace-grade. They survived conditions our previous components couldn't handle.",
    author: "Priya Nair",
    role: "Founder, Skyvision Robotics",
  },
  {
    quote:
      "Outstanding indigenous product. The swarm capability has redefined how we think about coordinated surveillance missions.",
    author: "Col. (Retd.) Rajesh Kumar",
    role: "Defense Technology Consultant",
  },
  {
    quote:
      "From ordering to delivery, the Killis Bird team was professional. The propellers are smooth, balanced, and powerful.",
    author: "Siddharth Rao",
    role: "Hobbyist & Competitive FPV Pilot",
  },
];

export function QuotesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".quote-card");
    const card = cards[idx] as HTMLElement;
    if (!card) return;

    // Calculate the scroll position to center the card
    const containerWidth = el.offsetWidth;
    const cardWidth = card.offsetWidth;
    const targetScroll = card.offsetLeft - containerWidth / 2 + cardWidth / 2;

    el.scrollTo({ left: targetScroll, behavior: "smooth" });
    setActiveIdx(idx);
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const containerWidth = el.offsetWidth;
    const containerCenter = el.scrollLeft + containerWidth / 2;

    const cards = el.querySelectorAll(".quote-card");
    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, i) => {
      const cardCenter = (card as HTMLElement).offsetLeft + (card as HTMLElement).offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = i;
      }
    });

    if (closestIdx !== activeIdx) {
      setActiveIdx(closestIdx);
    }
  };

  const prev = () => scrollTo(Math.max(0, activeIdx - 1));
  const next = () => scrollTo(Math.min(quotes.length - 1, activeIdx + 1));

  return (
    <section className="section-y bg-background border-t border-border/50 overflow-hidden">
      <div className="container-edge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 mb-8"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-neon" />
            <span className="font-mono text-sm tracking-[0.25em] font-bold text-neon uppercase">
              What They Say
            </span>
            <span className="w-8 h-[2px] bg-neon" />
          </div>
          <h2 className="heading-lg font-black text-foreground">VOICES THAT TRUST US</h2>
        </motion.div>

        {/* Horizontal Scroll Cards */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        >
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="quote-card snap-start"
            >
              <span className="quote-card__mark">"</span>
              <p className="quote-card__text">{q.quote}</p>
              <hr className="quote-card__divider" />
              <div>
                <div className="quote-card__author">{q.author}</div>
                <div className="quote-card__role">{q.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 mt-8">
          <button onClick={prev} className="quote-nav-btn" aria-label="Previous quote">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="quote-nav-btn" aria-label="Next quote">
            <ChevronRight size={20} />
          </button>
          <div className="flex items-center gap-2 ml-2">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`quote-dot${i === activeIdx ? " quote-dot--active" : ""}`}
                aria-label={`Go to quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
