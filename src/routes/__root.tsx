import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <>
      <Nav />
      <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-24">
        <div className="max-w-md text-center">
          <div className="font-mono text-xs tracking-[0.3em] text-neon mb-4">// SIGNAL_LOST</div>
          <h1 className="text-8xl font-semibold text-foreground text-glow">404</h1>
          <h2 className="mt-4 text-xl font-semibold">Coordinates not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">This sector is outside operational airspace.</p>
          <div className="mt-8">
            <Link to="/" className="font-mono text-[11px] tracking-[0.2em] uppercase px-5 py-3 border border-neon text-neon hover:bg-neon hover:text-background transition">
              Return to base
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Killis Bird — Autonomous Flight. Engineered." },
      { name: "description", content: "Indigenous UAV systems built for precision, intelligence, and control. Killis Bird LLP — next-generation aerospace and autonomous systems." },
      { name: "author", content: "Killis Bird LLP" },
      { property: "og:title", content: "Killis Bird — Autonomous Flight. Engineered." },
      { property: "og:description", content: "Indigenous UAV systems built for precision, intelligence, and control." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
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
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
