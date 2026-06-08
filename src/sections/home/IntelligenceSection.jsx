import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const blogs = [
  {
    title: "The Future of Tactical Warfare for Bharat",
    date: "MAY 03, 2026",
  },
  {
    title: "FPV Striker Drones: The Future of Tactical Warfare for Bharat",
    date: "APR 28, 2026",
  },
  {
    title: "How Anti-Drone Jammers Are Redefining Modern Warfare in India",
    date: "APR 15, 2026",
  },
];
function IntelligenceSection() {
  return /* @__PURE__ */ jsx("section", {
    id: "blog",
    className: "container-edge section-y bg-background border-t border-border/50",
    children: /* @__PURE__ */ jsxs("div", {
      className: "grid lg:grid-cols-2 gap-20",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col gap-10",
          children: [
            /* @__PURE__ */ jsxs(motion.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-10%" },
              transition: { duration: 0.8 },
              className: "flex flex-col gap-2",
              children: [
                /* @__PURE__ */ jsx(motion.h2, {
                  initial: { color: "rgba(85,85,85,0.72)" },
                  whileInView: { color: "var(--neon)" },
                  viewport: { once: true, amount: 0.7 },
                  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  className: "heading-lg font-black",
                  children: "OUR BLOG",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-muted-foreground",
                  children: "Latest insights from our defense and engineering teams.",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className: "flex flex-col gap-6",
              children: blogs.map((blog, i) =>
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { delay: i * 0.1, duration: 0.5 },
                    className:
                      "group cursor-pointer p-6 rounded-2xl border border-border bg-surface-elevated hover:border-neon transition-colors flex flex-col gap-3",
                    children: [
                      /* @__PURE__ */ jsx("div", {
                        className:
                          "font-mono text-xs text-muted-foreground tracking-widest uppercase group-hover:text-neon transition-colors",
                        children: blog.date,
                      }),
                      /* @__PURE__ */ jsx("h3", {
                        className:
                          "text-xl sm:text-2xl font-bold leading-snug group-hover:text-neon transition-colors",
                        children: blog.title,
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
          ],
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col gap-10",
          children: [
            /* @__PURE__ */ jsxs(motion.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-10%" },
              transition: { duration: 0.8 },
              className: "flex flex-col gap-2",
              children: [
                /* @__PURE__ */ jsx(motion.h2, {
                  initial: { color: "rgba(85,85,85,0.72)" },
                  whileInView: { color: "var(--neon)" },
                  viewport: { once: true, amount: 0.7 },
                  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  className: "heading-lg font-black",
                  children: "TRUSTED CLIENTS",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-muted-foreground",
                  children: "Powering defense and industry leaders.",
                }),
              ],
            }),
            /* @__PURE__ */ jsx(motion.div, {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { delay: 0.2, duration: 0.8 },
              className: "grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1",
              children: Array.from({ length: 6 }).map((_, i) =>
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className:
                      "h-32 rounded-xl border border-border/50 bg-black/5 flex items-center justify-center filter grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300",
                    children: /* @__PURE__ */ jsxs("div", {
                      className: "font-mono text-xs tracking-widest text-muted-foreground/30",
                      children: ["LOGO ", i + 1],
                    }),
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
export { IntelligenceSection };
