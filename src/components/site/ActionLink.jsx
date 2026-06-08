import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
function ActionLink({ children, className, variant = "primary", icon = true, ...props }) {
  return /* @__PURE__ */ jsxs(Link, {
    ...props,
    className: cn(
      "group inline-flex min-h-11 items-center justify-center gap-3 px-5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.20em] transition-all duration-250 active:translate-y-px sm:px-6",
      variant === "primary" && "btn-primary bg-foreground text-background",
      variant === "secondary" &&
        "btn-primary border border-foreground/20 bg-transparent text-foreground hover:border-foreground/40 hover:bg-foreground/5",
      variant === "ghost" && "link-animated px-0 text-neon",
      className,
    ),
    children: [
      /* @__PURE__ */ jsx("span", { children }),
      icon &&
        /* @__PURE__ */ jsx(ArrowRight, {
          size: 13,
          className: "shrink-0 transition-transform duration-250 group-hover:translate-x-1",
        }),
    ],
  });
}
export { ActionLink };
