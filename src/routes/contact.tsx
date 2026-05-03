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
      {
        name: "description",
        content:
          "Initiate contact with Killis Bird LLP. Reach our facility in Krishnagiri, Tamil Nadu.",
      },
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

type ContactFields = z.infer<typeof schema>;
type FieldErrors = Partial<Record<keyof ContactFields, string>>;

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFields | undefined;
        if (field) nextErrors[field] = issue.message;
      });
      setErrors(nextErrors);
      toast.error(parsed.error.issues[0]?.message ?? "Please review the highlighted fields.");
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Transmission received. Our team will be in contact.");
      form.reset();
    }, 800);
  }

  return (
    <>
      <Toaster />
      <PageHero
        kicker="Transmission"
        title={
          <>
            We'd love to <span className="text-neon">hear from you</span>.
          </>
        }
        subtitle="Initiate contact for partnership inquiries, custom UAV development, or classified briefings."
      />

      <section className="container-edge pb-32 grid lg:grid-cols-12 gap-12">
        <form
          onSubmit={onSubmit}
          noValidate
          className="bg-white border border-border shadow-sm rounded-[32px] space-y-8 p-8 sm:p-10 md:p-12 lg:col-span-7 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-neon opacity-20" />
          <SectionLabel index="01" label="Secure Channel" />
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Your Name" name="name" placeholder="Operative ID" error={errors.name} />
            <Field
              label="Your Email"
              name="email"
              type="email"
              placeholder="you@domain.com"
              error={errors.email}
            />
            <Field
              label="Your Number"
              name="number"
              type="tel"
              placeholder="+91"
              error={errors.number}
            />
            <Field label="Your City" name="city" placeholder="Coordinates" error={errors.city} />
          </div>
          <div>
            <label
              htmlFor="inquiry"
              className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase"
            >
              // Inquiry
            </label>
            <textarea
              id="inquiry"
              name="inquiry"
              rows={5}
              required
              aria-invalid={Boolean(errors.inquiry)}
              aria-describedby={errors.inquiry ? "inquiry-error" : undefined}
              placeholder="Describe your mission requirements..."
              className="mt-2 w-full bg-background border border-border focus:border-neon focus:ring-1 focus:ring-neon rounded-xl px-4 py-3 text-sm transition placeholder:text-muted-foreground/60"
            />
            {errors.inquiry && (
              <p id="inquiry-error" className="mt-2 text-xs text-destructive">
                {errors.inquiry}
              </p>
            )}
          </div>
          <button
            disabled={submitting}
            type="submit"
            className="btn-primary group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-neon px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-background transition hover:scale-105 shadow-md disabled:opacity-50 sm:w-auto rounded-full"
          >
            {submitting ? (
              "Transmitting..."
            ) : (
              <>
                Send Transmission{" "}
                <Send size={15} className="group-hover:translate-x-1 transition" />
              </>
            )}
          </button>
        </form>

        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-surface-elevated border border-border shadow-soft rounded-[24px] p-8 sm:p-10">
            <div className="font-mono text-[10px] tracking-[0.3em] text-neon mb-5">// FACILITY</div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-neon mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium">Headquarters</div>
                  <div className="text-muted-foreground mt-1">
                    Plot No.107, Pollupalli SIDCO Industrial Estate, Gangasandiram, Krishnagiri –
                    635115, Tamil Nadu, India
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-neon" />
                <a href="tel:+917200743683" className="hover:text-neon transition">
                  +91 72007 43683
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-neon" />
                <a href="mailto:info@killisbird.com" className="hover:text-neon transition">
                  info@killisbird.com
                </a>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Krishnagiri+Tamil+Nadu"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-neon hover:underline"
            >
              Google Maps Direction <ArrowRight size={14} />
            </a>
          </div>

          <div className="bg-white border border-border rounded-[24px] p-8 sm:p-10 shadow-sm">
            <div className="font-mono text-[10px] tracking-[0.3em] text-neon mb-4">// STATUS</div>
            <div className="text-base text-muted-foreground leading-relaxed">
              All transmissions are reviewed by our engineering desk within 48 hours. Priority
              requests are handled by senior systems leads.
            </div>
            <div className="mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-neon">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse-ring" /> CHANNEL ACTIVE
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: keyof ContactFields;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase"
      >
        // {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full bg-background border border-border focus:border-neon focus:ring-1 focus:ring-neon rounded-xl px-4 py-3 text-sm transition placeholder:text-muted-foreground/60"
      />
      {error && (
        <p id={errorId} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
