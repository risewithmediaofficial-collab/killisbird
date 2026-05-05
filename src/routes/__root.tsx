import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Preloader } from "@/components/site/Preloader";
import { CustomCursor } from "@/components/site/CustomCursor";
import { ScrollToTop } from "@/components/site/ScrollToTop";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-24">
      <div className="max-w-md text-center">
        <div className="font-mono text-xs tracking-[0.3em] text-neon mb-4">// SIGNAL_LOST</div>
        <h1 className="text-8xl font-semibold text-foreground text-glow">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Coordinates not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This sector is outside operational airspace.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center border border-neon px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-neon transition hover:bg-neon hover:text-background"
          >
            Return to base
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Killis Bird — Autonomous Flight. Engineered." },
      {
        name: "description",
        content:
          "Indigenous UAV systems built for precision, intelligence, and control. Killis Bird LLP — next-generation aerospace and autonomous systems.",
      },
      { name: "author", content: "Killis Bird LLP" },
      { property: "og:title", content: "Killis Bird — Autonomous Flight. Engineered." },
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

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <ScrollToTop />
      <Preloader />
      <CustomCursor />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
