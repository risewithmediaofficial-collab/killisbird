import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
function IdentitySection() {
  return /* @__PURE__ */ jsx("section", {
    id: "welcome",
    className: "container-edge section-y relative bg-background border-t border-border/50",
    children: /* @__PURE__ */ jsx("div", {
      className: "max-w-4xl mx-auto flex flex-col items-center text-center",
      children: /* @__PURE__ */ jsxs(motion.div, {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10%" },
        transition: { duration: 0.8 },
        className: "flex flex-col items-center gap-8",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsx("span", { className: "w-10 h-[2px] bg-neon" }),
              /* @__PURE__ */ jsx("span", {
                className:
                  "font-mono text-xs sm:text-sm tracking-[0.25em] font-bold text-foreground/80 uppercase",
                children: "Welcome to Killis Bird",
              }),
              /* @__PURE__ */ jsx("span", { className: "w-10 h-[2px] bg-neon" }),
            ],
          }),
          /* @__PURE__ */ jsx(motion.h2, {
            initial: { color: "rgba(85,85,85,0.72)" },
            whileInView: { color: "var(--neon)" },
            viewport: { once: true, amount: 0.7 },
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            className: "heading-lg font-black",
            children: "Delivering Cutting-Edge UAV Components for a Smarter Future.",
          }),
          /* @__PURE__ */ jsx("p", {
            className:
              "text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium",
            children:
              "At Killis Bird, we are redefining what is possible in unmanned aerial systems through innovative, indigenous solutions designed to elevate performance and reliability.",
          }),
        ],
      }),
    }),
  });
}
export { IdentitySection };
