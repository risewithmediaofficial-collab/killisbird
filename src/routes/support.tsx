import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, FileText, Wrench, Mail, Clock } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support & Warranty — Killis Bird" },
      {
        name: "description",
        content: "Customer support, warranty registration, and technical assistance for Killis Bird UAV components.",
      },
    ],
  }),
  component: SupportPage,
});

const supportCategories = [
  {
    icon: Shield,
    title: "Warranty Registration",
    desc: "Register your Killis Bird products within 5 days of purchase to activate your 6 to 12 months warranty.",
    action: "Register Now",
    href: "/contact",
  },
  {
    icon: FileText,
    title: "Warranty Terms",
    desc: "Covers manufacturing defects only. Excludes physical damage, liquid damage, or misuse. Photos required for assessment.",
    action: "Read Policy",
    href: "#terms",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    desc: "Need help with integration, Betaflight configuration, or wiring diagrams? Our engineers are here to assist.",
    action: "Get Help",
    href: "/contact",
  },
];

const faqs = [
  {
    q: "How do I claim warranty for a defective part?",
    a: "Contact our support team with your original invoice, product serial number, and clear photos/videos demonstrating the defect. We will assess the claim and provide return instructions if approved.",
  },
  {
    q: "What is not covered under warranty?",
    a: "Physical crash damage, burnt components due to reversed polarity or over-voltage, liquid damage, and modifications to the original hardware are strictly excluded from warranty coverage.",
  },
  {
    q: "Where can I find wiring diagrams for the FCC-H743?",
    a: "Detailed pinout diagrams and Betaflight/INAV configuration targets are provided with your purchase. If lost, please request a digital copy via email with your order ID.",
  },
  {
    q: "Do you offer repair services for crashed drones?",
    a: "Yes, we offer diagnostic and repair services for custom builds and enterprise fleets. Assessment fees apply. Shipping costs are borne by the customer.",
  },
];

function SupportPage() {
  return (
    <>
      <PageHero
        kicker="Help Center"
        title={
          <>
            Client <span className="text-neon">Support</span>
          </>
        }
        subtitle="Comprehensive technical assistance, warranty services, and documentation for your Killis Bird systems."
      />

      {/* Support Categories */}
      <section className="container-edge pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {supportCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div
                key={i}
                className="card-surface p-8 rounded-2xl border border-border bg-surface-elevated flex flex-col gap-6 items-start transition-colors hover:border-neon/40 group"
              >
                <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:bg-neon group-hover:text-black transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {category.desc}
                </p>
                <Link
                  to={category.href.startsWith("/") ? (category.href as any) : undefined}
                  hash={category.href.startsWith("#") ? category.href.replace("#", "") : undefined}
                  className="font-mono text-[11px] tracking-[0.25em] uppercase text-neon hover:underline inline-flex items-center gap-2 mt-2"
                >
                  {category.action} <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Warranty Terms Details */}
      <section id="terms" className="container-edge pb-24 md:pb-32">
        <div className="max-w-4xl border-t border-border pt-16">
          <SectionLabel index="01" label="Warranty Policy" />
          <h2 className="heading-lg mt-8 mb-6">Terms & Conditions</h2>
          
          <div className="prose prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none space-y-6">
            <p>
              Killis Bird LLP stands behind the quality and engineering of our products. We offer a limited warranty 
              of <strong>6 to 12 months</strong> (depending on the product category) against manufacturing defects, 
              valid from the date of delivery.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-black/40 border border-border rounded-lg">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span> Covered
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>DOA (Dead on Arrival) components</li>
                  <li>Inherent manufacturing defects</li>
                  <li>Premature component failure under normal operating conditions</li>
                </ul>
              </div>
              <div className="p-6 bg-black/40 border border-border rounded-lg">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-red-500">✕</span> Not Covered
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Crash damage or physical impact</li>
                  <li>Burnt ESCs/FCs due to incorrect wiring</li>
                  <li>Water or moisture damage</li>
                  <li>Unauthorized modifications or soldering damage</li>
                </ul>
              </div>
            </div>
            <p>
              To initiate a warranty claim, the product must be registered on our website within 5 days of purchase. 
              Claims must be submitted to <strong>info@killisbird.com</strong> with your invoice, serial number, 
              and clear photographic or video evidence of the issue.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface-elevated border-y border-border py-24 md:py-32">
        <div className="container-edge">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 sm:p-8 border border-border bg-background rounded-2xl">
                <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="container-edge py-24 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-neon/10 text-neon flex items-center justify-center">
            <Mail size={24} />
          </div>
          <h2 className="text-3xl font-bold">Still need help?</h2>
          <p className="text-muted-foreground">
            Our engineering support team usually responds within 24-48 hours.
          </p>
          <a
            href="mailto:info@killisbird.com"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 font-mono text-[11px] uppercase tracking-[0.2em] text-black font-bold transition-all hover:scale-105 hover:bg-neon mt-2"
          >
            Email Support
          </a>
        </div>
      </section>
    </>
  );
}
