import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { CapabilitySection } from "@/sections/home/CapabilitySection";
import { CtaSection } from "@/sections/home/CtaSection";
import { HeroSection } from "@/sections/home/HeroSection";
import { IdentitySection } from "@/sections/home/IdentitySection";
import { SystemsSection } from "@/sections/home/SystemsSection";
import { QuotesSection } from "@/sections/home/QuotesSection";
import { ClientsSection } from "@/sections/home/ClientsSection";
const Route = createFileRoute("/")({
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
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(IdentitySection, {}),
      /* @__PURE__ */ jsx(SystemsSection, {}),
      /* @__PURE__ */ jsx(QuotesSection, {}),
      /* @__PURE__ */ jsx(ClientsSection, {}),
      /* @__PURE__ */ jsx(CapabilitySection, {}),
      /* @__PURE__ */ jsx(CtaSection, {}),
    ],
  });
}
export { Route };
