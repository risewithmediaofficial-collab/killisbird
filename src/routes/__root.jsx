import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Preloader } from "@/components/site/Preloader";
import { ScrollToTop } from "@/components/site/ScrollToTop";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4 pt-24",
    children: /* @__PURE__ */ jsxs("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ jsx("div", {
          className: "font-mono text-xs tracking-[0.3em] text-neon mb-4",
          children: "// SIGNAL_LOST",
        }),
        /* @__PURE__ */ jsx("h1", {
          className: "text-8xl font-semibold text-foreground text-glow",
          children: "404",
        }),
        /* @__PURE__ */ jsx("h2", {
          className: "mt-4 text-xl font-semibold",
          children: "Coordinates not found",
        }),
        /* @__PURE__ */ jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "This sector is outside operational airspace.",
        }),
        /* @__PURE__ */ jsx("div", {
          className: "mt-8",
          children: /* @__PURE__ */ jsx(Link, {
            to: "/",
            className:
              "inline-flex min-h-11 items-center border border-neon px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-neon transition hover:bg-neon hover:text-background",
            children: "Return to base",
          }),
        }),
      ],
    }),
  });
}
const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Killis Bird \u2014 Autonomous Flight. Engineered." },
      {
        name: "description",
        content:
          "Indigenous UAV systems built for precision, intelligence, and control. Killis Bird LLP \u2014 next-generation aerospace and autonomous systems.",
      },
      { name: "author", content: "Killis Bird LLP" },
      { property: "og:title", content: "Killis Bird \u2014 Autonomous Flight. Engineered." },
      {
        property: "og:description",
        content: "Indigenous UAV systems built for precision, intelligence, and control.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
      /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] }),
    ],
  });
}
function RootComponent() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const prefersReducedMotion = useReducedMotion();

  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(ScrollToTop, {}),
      /* @__PURE__ */ jsx(Preloader, {}),
      /* @__PURE__ */ jsx(Nav, {}),
      /* @__PURE__ */ jsx("main", {
        className: "overflow-x-clip",
        children: /* @__PURE__ */ jsx(AnimatePresence, {
          mode: "wait",
          initial: false,
          children: /* @__PURE__ */ jsx(motion.div, {
            key: pathname,
            initial: prefersReducedMotion ? false : { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            exit: prefersReducedMotion ? undefined : { opacity: 0, y: -8 },
            transition: {
              duration: prefersReducedMotion ? 0 : 0.28,
              ease: [0.22, 1, 0.36, 1],
            },
            children: /* @__PURE__ */ jsx(Outlet, {}),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(Footer, {}),
    ],
  });
}
export { Route };
