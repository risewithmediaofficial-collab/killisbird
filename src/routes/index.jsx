import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

// Route-level lazy import of HomePage (TanStack + React.lazy double code-split)
const HomePage = lazy(() => import("@/pages/home/index.jsx"));

function SectionSkeleton() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
      }}
    />
  );
}

const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: [
        { title: "Killis Bird — Autonomous Flight. Engineered." },
        {
          name: "description",
          content:
            "Indigenous UAV systems built for precision, intelligence, and control. Defense-grade autonomous aerospace from Killis Bird LLP.",
        },
      ],
    }),
    component: Home,
  }
);

function Home() {
  return (
    <Suspense fallback={<SectionSkeleton />}>
      <HomePage />
    </Suspense>
  );
}

export { Route };
