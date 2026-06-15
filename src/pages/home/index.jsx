import { Suspense, lazy, memo } from "react";
// Above-fold — loaded eagerly (critical path)
import { HeroSection } from "./sections/HeroSection";

// Below-fold — lazy loaded (code-split, loads only when needed)
const IdentitySection   = lazy(() => import("./sections/IdentitySection").then(m => ({ default: m.IdentitySection })));
const SystemsSection    = lazy(() => import("./sections/SystemsSection").then(m => ({ default: m.SystemsSection })));
const QuotesSection     = lazy(() => import("./sections/QuotesSection").then(m => ({ default: m.QuotesSection })));
const ClientsSection    = lazy(() => import("./sections/ClientsSection").then(m => ({ default: m.ClientsSection })));
const CapabilitySection = lazy(() => import("./sections/CapabilitySection").then(m => ({ default: m.CapabilitySection })));
const CtaSection        = lazy(() => import("./sections/CtaSection").then(m => ({ default: m.CtaSection })));

// Minimal skeleton shown while lazy sections load
function SectionSkeleton() {
  return (
    <div
      aria-hidden="true"
      style={{
        minHeight: "400px",
        background: "linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.4s infinite",
      }}
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}

/**
 * HomePage — Home route page component.
 *
 * Performance strategy:
 * - HeroSection: eagerly imported (above-fold, critical)
 * - All other sections: React.lazy + Suspense (code-split, below-fold)
 * - Heavy section components are wrapped in React.memo (see individual files)
 */
const HomePage = memo(function HomePage() {
  return (
    <>
      {/* ── Above fold — eager ── */}
      <HeroSection />

      {/* ── Below fold — lazy loaded ── */}
      <Suspense fallback={<SectionSkeleton />}>
        <IdentitySection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SystemsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <QuotesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ClientsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CapabilitySection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CtaSection />
      </Suspense>
    </>
  );
});

export default HomePage;
