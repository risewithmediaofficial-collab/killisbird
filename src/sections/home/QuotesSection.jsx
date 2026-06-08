import { jsx, jsxs } from "react/jsx-runtime";
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
function QuotesSection() {
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollTo = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".quote-card");
    const card = cards[idx];
    if (!card) return;
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
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
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
  return /* @__PURE__ */ jsx("section", {
    className: "section-y bg-background border-t border-border/50 overflow-hidden",
    children: /* @__PURE__ */ jsxs("div", {
      className: "container-edge",
      children: [
        /* @__PURE__ */ jsxs(motion.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "flex flex-col gap-4 mb-8",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsx("span", { className: "w-8 h-[2px] bg-neon" }),
                /* @__PURE__ */ jsx("span", {
                  className: "font-mono text-sm tracking-[0.25em] font-bold text-neon uppercase",
                  children: "What They Say",
                }),
                /* @__PURE__ */ jsx("span", { className: "w-8 h-[2px] bg-neon" }),
              ],
            }),
            /* @__PURE__ */ jsx(motion.h2, {
              initial: { color: "rgba(85,85,85,0.72)" },
              whileInView: { color: "var(--neon)" },
              viewport: { once: true, amount: 0.7 },
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              className: "heading-lg font-black",
              children: "VOICES THAT TRUST US",
            }),
          ],
        }),
        /* @__PURE__ */ jsx("div", {
          ref: scrollRef,
          onScroll,
          style: {
            paddingInline: "max(1rem, calc((100% - min(36rem, 88vw)) / 2))",
          },
          className: "flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4",
          children: quotes.map((q, i) =>
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1, duration: 0.6 },
                className: "quote-card snap-start",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "quote-card__mark", children: '"' }),
                  /* @__PURE__ */ jsx("p", { className: "quote-card__text", children: q.quote }),
                  /* @__PURE__ */ jsx("hr", { className: "quote-card__divider" }),
                  /* @__PURE__ */ jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsx("div", {
                        className: "quote-card__author",
                        children: q.author,
                      }),
                      /* @__PURE__ */ jsx("div", {
                        className: "quote-card__role",
                        children: q.role,
                      }),
                    ],
                  }),
                ],
              },
              i,
            ),
          ),
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "flex items-center gap-4 mt-8",
          children: [
            /* @__PURE__ */ jsx("button", {
              onClick: prev,
              className: "quote-nav-btn",
              "aria-label": "Previous quote",
              children: /* @__PURE__ */ jsx(ChevronLeft, { size: 20 }),
            }),
            /* @__PURE__ */ jsx("button", {
              onClick: next,
              className: "quote-nav-btn",
              "aria-label": "Next quote",
              children: /* @__PURE__ */ jsx(ChevronRight, { size: 20 }),
            }),
            /* @__PURE__ */ jsx("div", {
              className: "flex items-center gap-2 ml-2",
              children: quotes.map((_, i) =>
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => scrollTo(i),
                    className: `quote-dot${i === activeIdx ? " quote-dot--active" : ""}`,
                    "aria-label": `Go to quote ${i + 1}`,
                  },
                  i,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
export { QuotesSection };
