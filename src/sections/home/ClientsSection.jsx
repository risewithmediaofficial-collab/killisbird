import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const clients = [
  "AeroDef Solutions",
  "Skyvision Robotics",
  "TechForce India",
  "DroneVentures",
  "AeroTech Systems",
  "SkySolutions",
  "DefenceCore",
  "Bharat Aerospace",
];
function ClientsSection() {
  const doubled = [...clients, ...clients];
  return /* @__PURE__ */ jsxs("section", {
    className: "section-y bg-background border-t border-border/50 overflow-hidden",
    children: [
      /* @__PURE__ */ jsx("div", {
        className: "container-edge mb-12",
        children: /* @__PURE__ */ jsxs(motion.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "flex flex-col gap-4",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsx("span", { className: "w-8 h-[2px] bg-neon" }),
                /* @__PURE__ */ jsx("span", {
                  className: "font-mono text-sm tracking-[0.25em] font-bold text-neon uppercase",
                  children: "Trusted By",
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
              children: "OUR CLIENTS",
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx("div", {
        className: "clients-marquee-wrap",
        children: /* @__PURE__ */ jsx("div", {
          className: "clients-marquee",
          children: doubled.map((client, i) =>
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "clients-logo-item",
                children: /* @__PURE__ */ jsx("span", {
                  className: "font-display font-black text-xs tracking-widest uppercase",
                  children: client,
                }),
              },
              i,
            ),
          ),
        }),
      }),
    ],
  });
}
export { ClientsSection };
