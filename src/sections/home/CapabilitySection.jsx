import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { capabilities } from "@/data/home";
function CapabilitySection() {
  const [openIdx, setOpenIdx] = useState(null);
  return /* @__PURE__ */ jsx("section", {
    id: "services",
    className: "relative section-y bg-background border-t border-border/50",
    children: /* @__PURE__ */ jsxs("div", {
      className: "container-edge",
      children: [
        /* @__PURE__ */ jsxs(motion.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "flex flex-col gap-4 mb-12",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsx("span", { className: "w-8 h-[2px] bg-neon" }),
                /* @__PURE__ */ jsx("span", {
                  className: "font-mono text-sm tracking-[0.25em] font-bold text-neon uppercase",
                  children: "Capabilities",
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
              children: "WHAT WE DO?",
            }),
          ],
        }),
        /* @__PURE__ */ jsx("div", {
          className: "flex flex-col divide-y divide-border",
          children: capabilities.map((item, i) => {
            const isOpen = openIdx === i;
            const num = (i + 1).toString().padStart(2, "0");
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.07, duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsxs("button", {
                    onClick: () => setOpenIdx(isOpen ? null : i),
                    className:
                      "group w-full flex items-center justify-between py-6 sm:py-7 text-left hover:bg-neon/[0.04] transition-colors rounded-lg px-3 -mx-3",
                    "aria-expanded": isOpen,
                    "aria-controls": `capability-content-${i}`,
                    id: `capability-button-${i}`,
                    children: [
                      /* @__PURE__ */ jsxs("div", {
                        className: "flex items-center gap-6",
                        children: [
                          /* @__PURE__ */ jsx("span", {
                            className:
                              "font-display text-xl sm:text-2xl font-black text-neon w-10 shrink-0 tabular-nums",
                            children: num,
                          }),
                          /* @__PURE__ */ jsx("span", {
                            className:
                              "text-lg sm:text-2xl font-bold text-foreground group-hover:text-neon transition-colors",
                            children: item.title,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsx("span", {
                        className:
                          "text-neon text-xl shrink-0 ml-4 transition-transform duration-300 inline-block",
                        style: { transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" },
                        "aria-hidden": "true",
                        children: "\u2192",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsx(AnimatePresence, {
                    initial: false,
                    children:
                      isOpen &&
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          id: `capability-content-${i}`,
                          role: "region",
                          "aria-labelledby": `capability-button-${i}`,
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                          className: "overflow-hidden",
                          children: /* @__PURE__ */ jsx("p", {
                            className:
                              "pb-7 pl-12 sm:pl-16 pr-4 text-muted-foreground leading-relaxed text-base sm:text-lg max-w-2xl",
                            children: item.text,
                          }),
                        },
                        "content",
                      ),
                  }),
                ],
              },
              i,
            );
          }),
        }),
      ],
    }),
  });
}
export { CapabilitySection };
