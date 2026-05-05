import { createFileRoute } from "@tanstack/react-router";
import { CapabilitySection } from "@/sections/home/CapabilitySection";
import { CtaSection } from "@/sections/home/CtaSection";
import { HeroSection } from "@/sections/home/HeroSection";
import { IdentitySection } from "@/sections/home/IdentitySection";
import { SystemsSection } from "@/sections/home/SystemsSection";
import { BlogSection } from "@/sections/home/BlogSection";
import { QuotesSection } from "@/sections/home/QuotesSection";
import { ClientsSection } from "@/sections/home/ClientsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Killis Bird - Autonomous Flight. Engineered." },
      {
        name: "description",
        content:
          "Indigenous UAV systems built for precision, intelligence, and control. Defense-grade autonomous aerospace from Killis Bird LLP.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <IdentitySection />
      <SystemsSection />
      <BlogSection />
      <QuotesSection />
      <ClientsSection />
      <CapabilitySection />
      <CtaSection />
    </>
  );
}
