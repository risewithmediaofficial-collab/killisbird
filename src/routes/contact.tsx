import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, ArrowRight, Send } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Killis Bird" },
      { name: "description", content: "Initiate contact with Killis Bird LLP. Reach our facility in Krishnagiri, Tamil Nadu." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  number: z.string().trim().min(6, "Phone required").max(20),
  city: z.string().trim().min(2, "City required").max(80),
  inquiry: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Transmission received. Our team will be in contact.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <>
      <Toaster />
      <PageHero
        kicker="Transmission"
        title={<>We'd love to <span className="text-neon">hear from you</span>.</>}
        subtitle="Initiate contact for partnership inquiries, custom UAV development, or classified briefings."
      />

      <section className="container-edge pb-24 grid lg:grid-cols-12 gap-10">
        <form onSubmit={onSubmit} className="lg:col-span-7 glass-strong p-8 md:p-10 space-y-6 corner-brackets relative">
          <SectionLabel index="01" label="Secure Channel" />
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your Name" name="name" placeholder="Operative ID" />
            <Field label="Your Email" name="email" type="email" placeholder="you@domain.com" />
            <Field label="Your Number" name="number" placeholder="+91" />
            <Field label="Your City" name="city" placeholder="Coordinates" />
          </div>
          <div>
            <label className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">// Inquiry</label>
            <textarea name="inquiry" rows={5} placeholder="Describe your mission requirements..."
              className="mt-2 w-full bg-background border border-border focus:border-neon focus:outline-none px-4 py-3 text-sm transition placeholder:text-muted-foreground/60" />
          </div>
          <button disabled={submitting} type="submit"
            className="group inline-flex items-center gap-3 px-6 py-3.5 bg-neon text-background font-mono text-[11px] tracking-[0.25em] uppercase hover:shadow-neon transition disabled:opacity-50">
            {submitting ? "Transmitting..." : <>Send Transmission <Send size={14} className="group-hover:translate-x-1 transition" /></>}
          </button>
        </form>

        <aside className="lg:col-span-5 space-y-5">
          <div className="glass p-7 corner-brackets relative">
            <div className="font-mono text-[10px] tracking-[0.3em] text-neon mb-5">// FACILITY</div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-neon mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium">Headquarters</div>
                  <div className="text-muted-foreground mt-1">Plot No.107, Pollupalli SIDCO Industrial Estate, Gangasandiram, Krishnagiri – 635115, Tamil Nadu, India</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-neon" />
                <a href="tel:+917200743683" className="hover:text-neon transition">+91 72007 43683</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-neon" />
                <a href="mailto:info@killisbird.com" className="hover:text-neon transition">info@killisbird.com</a>
              </div>
            </div>
            <a href="https://maps.google.com/?q=Krishnagiri+Tamil+Nadu" target="_blank" rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-neon hover:underline">
              Google Maps Direction <ArrowRight size={14} />
            </a>
          </div>

          <div className="glass p-7 corner-brackets relative">
            <div className="font-mono text-[10px] tracking-[0.3em] text-neon mb-3">// STATUS</div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              All transmissions are reviewed by our engineering desk within 48 hours. Priority requests are handled by senior systems leads.
            </div>
            <div className="mt-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-neon">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse-ring" /> CHANNEL ACTIVE
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">// {label}</label>
      <input name={name} type={type} placeholder={placeholder}
        className="mt-2 w-full bg-background border border-border focus:border-neon focus:outline-none px-4 py-3 text-sm transition placeholder:text-muted-foreground/60" />
    </div>
  );
}
