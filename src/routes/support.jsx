import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, Mail, Shield, Wrench } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";
import { ScrollStack, ScrollStackItem } from "@/components/ui/scroll-stack";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support & Warranty — Killis Bird" },
      {
        name: "description",
        content:
          "Customer support, warranty registration, and technical assistance for Killis Bird UAV components.",
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

      <section className="container-edge pt-10 pb-24 md:pt-14 md:pb-28">
        <SectionLabel index="01" label="Support Paths" />
        <div className="mt-10">
          <ScrollStack
            className="mx-auto max-w-5xl"
            itemDistance={90}
            itemStackDistance={26}
            baseScale={0.9}
          >
            {supportCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <ScrollStackItem key={category.title}>
                  <article className="card-surface h-full rounded-[28px] border border-black/6 bg-white/95 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                    <div className="flex h-full flex-col gap-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4ee] text-neon shadow-[0_10px_30px_rgba(240,90,18,0.12)]">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight text-neon">
                        {category.title}
                      </h3>
                      <p className="flex-1 text-sm leading-7 text-slate-600">{category.desc}</p>
                      <Link
                        to={category.href.startsWith("/") ? category.href : undefined}
                        hash={
                          category.href.startsWith("#") ? category.href.replace("#", "") : undefined
                        }
                        className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-neon"
                      >
                        {category.action}
                        <span className="text-base leading-none">→</span>
                      </Link>
                    </div>
                  </article>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </section>

      <section id="terms" className="container-edge pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl border-t border-border pt-16">
          <SectionLabel index="02" label="Warranty Policy" />
          <h2 className="heading-lg mt-8">Terms & Conditions</h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
            Killis Bird LLP stands behind the quality and engineering of our products. We offer a
            limited warranty of <strong>6 to 12 months</strong> depending on the product category,
            valid from the date of delivery.
          </p>

          <div className="mt-12">
            <ScrollStack
              className="mx-auto max-w-4xl"
              itemDistance={84}
              itemStackDistance={24}
              baseScale={0.92}
            >
              {[
                {
                  title: "Covered",
                  icon: "✓",
                  color: "text-emerald-500",
                  items: [
                    "DOA (Dead on Arrival) components",
                    "Inherent manufacturing defects",
                    "Premature component failure under normal operating conditions",
                  ],
                },
                {
                  title: "Not Covered",
                  icon: "✕",
                  color: "text-red-500",
                  items: [
                    "Crash damage or physical impact",
                    "Burnt ESCs/FCs due to incorrect wiring",
                    "Water or moisture damage",
                    "Unauthorized modifications or soldering damage",
                  ],
                },
              ].map((group, index) => (
                <ScrollStackItem key={group.title}>
                  <div className="rounded-[28px] border border-black/6 bg-white/95 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                    <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold text-neon">
                      <span className={group.color}>{group.icon}</span>
                      {group.title}
                    </h3>
                    <ul className="space-y-3 text-sm leading-7 text-slate-600">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

          <p className="mt-10 max-w-4xl text-base leading-8 text-slate-600">
            To initiate a warranty claim, the product must be registered on our website within 5
            days of purchase. Claims must be submitted to <strong>info@killisbird.com</strong> with
            your invoice, serial number, and clear photographic or video evidence of the issue.
          </p>
        </div>
      </section>

      <section className="border-y border-border/50 bg-surface/30 py-24 md:py-32">
        <div className="container-edge">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel index="03" label="FAQ" />
            <h2 className="heading-lg mt-8">Frequently Asked Questions</h2>
          </div>
          <div className="mx-auto mt-14 max-w-5xl">
            <ScrollStack itemDistance={76} itemStackDistance={22} baseScale={0.92}>
              {faqs.map((faq, index) => (
                <ScrollStackItem key={faq.q}>
                  <article className="card-surface h-full rounded-[28px] border border-black/6 bg-white/95 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                    <h3 className="text-lg font-semibold leading-snug text-neon">{faq.q}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
                  </article>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="container-edge py-24 text-center"
      >
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon/10 text-neon">
            <Mail size={24} />
          </div>
          <h2 className="text-3xl font-semibold text-neon">Still need help?</h2>
          <p className="text-slate-600">
            Our engineering support team usually responds within 24–48 hours.
          </p>
          <a
            href="mailto:info@killisbird.com"
            className="inline-flex h-14 items-center justify-center rounded-full bg-neon px-8 font-mono text-[11px] uppercase tracking-[0.2em] text-white font-bold transition-all hover:scale-105"
          >
            Email Support
          </a>
        </div>
      </motion.section>
    </>
  );
}
