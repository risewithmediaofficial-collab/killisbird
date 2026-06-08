import { jsx, jsxs } from "react/jsx-runtime";
function SectionLabel({ index, label }) {
  return /* @__PURE__ */ jsxs("div", {
    className:
      "flex max-w-full items-center gap-3 font-mono text-[0.60rem] uppercase tracking-[0.26em] text-muted-foreground sm:tracking-[0.34em]",
    children: [
      /* @__PURE__ */ jsx("span", { className: "text-neon/70", children: index }),
      /* @__PURE__ */ jsx("span", {
        className: "h-px w-8 shrink-0 sm:w-10",
        style: { background: "var(--gradient-line)" },
      }),
      /* @__PURE__ */ jsx("span", { className: "min-w-0 break-words", children: label }),
    ],
  });
}
function PageHero({ kicker, title, subtitle }) {
  return /* @__PURE__ */ jsxs("section", {
    className: "container-edge relative pb-20 pt-40 sm:pb-32 sm:pt-48",
    children: [
      /* @__PURE__ */ jsx("div", {
        className:
          "absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]",
        "aria-hidden": "true",
      }),
      /* @__PURE__ */ jsx("div", {
        className: "absolute inset-0",
        style: { background: "var(--gradient-hero)", opacity: 0.7 },
        "aria-hidden": "true",
      }),
      /* @__PURE__ */ jsxs("div", {
        className: "relative space-y-8 max-w-4xl",
        children: [
          /* @__PURE__ */ jsx(SectionLabel, { index: "00", label: kicker }),
          /* @__PURE__ */ jsx("h1", {
            className:
              "text-[clamp(3.2rem,10vw,5rem)] font-semibold leading-[1.05] tracking-tight text-foreground",
            children: title,
          }),
          subtitle &&
            /* @__PURE__ */ jsx("p", {
              className: "max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl",
              children: subtitle,
            }),
        ],
      }),
    ],
  });
}
export { PageHero, SectionLabel };
