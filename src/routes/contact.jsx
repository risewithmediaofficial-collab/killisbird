import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, ArrowRight, Send } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact \u2014 Killis Bird" },
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
  inquiry: z.string().trim().min(10, "Tell us a bit more").max(1e3),
});
function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const nextErrors = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0];
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
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(Toaster, {}),
      /* @__PURE__ */ jsx(PageHero, {
        kicker: "Transmission",
        title: /* @__PURE__ */ jsxs(Fragment, {
          children: [
            "We'd love to ",
            /* @__PURE__ */ jsx("span", { className: "text-neon", children: "hear from you" }),
            ".",
          ],
        }),
        subtitle:
          "Initiate contact for partnership inquiries, custom UAV development, or classified briefings.",
      }),
      /* @__PURE__ */ jsxs("section", {
        className: "container-edge pb-32 grid lg:grid-cols-12 gap-12",
        children: [
          /* @__PURE__ */ jsxs("form", {
            onSubmit,
            noValidate: true,
            className:
              "bg-white border border-border shadow-sm rounded-[32px] space-y-8 p-8 sm:p-10 md:p-12 lg:col-span-7 relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsx("div", {
                className: "absolute top-0 left-0 w-full h-1 bg-neon opacity-20",
              }),
              /* @__PURE__ */ jsx(SectionLabel, { index: "01", label: "Secure Channel" }),
              /* @__PURE__ */ jsxs("div", {
                className: "grid sm:grid-cols-2 gap-6",
                children: [
                  /* @__PURE__ */ jsx(Field, {
                    label: "Your Name",
                    name: "name",
                    placeholder: "Operative ID",
                    error: errors.name,
                  }),
                  /* @__PURE__ */ jsx(Field, {
                    label: "Your Email",
                    name: "email",
                    type: "email",
                    placeholder: "you@domain.com",
                    error: errors.email,
                  }),
                  /* @__PURE__ */ jsx(Field, {
                    label: "Your Number",
                    name: "number",
                    type: "tel",
                    placeholder: "+91",
                    error: errors.number,
                  }),
                  /* @__PURE__ */ jsx(Field, {
                    label: "Your City",
                    name: "city",
                    placeholder: "Coordinates",
                    error: errors.city,
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx("label", {
                    htmlFor: "inquiry",
                    className:
                      "font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase",
                    children: "// Inquiry",
                  }),
                  /* @__PURE__ */ jsx("textarea", {
                    id: "inquiry",
                    name: "inquiry",
                    rows: 5,
                    required: true,
                    "aria-invalid": Boolean(errors.inquiry),
                    "aria-describedby": errors.inquiry ? "inquiry-error" : void 0,
                    placeholder: "Describe your mission requirements...",
                    className:
                      "mt-2 w-full bg-background border border-border focus:border-neon focus:ring-1 focus:ring-neon rounded-xl px-4 py-3 text-sm transition placeholder:text-muted-foreground/60",
                  }),
                  errors.inquiry &&
                    /* @__PURE__ */ jsx("p", {
                      id: "inquiry-error",
                      className: "mt-2 text-xs text-destructive",
                      children: errors.inquiry,
                    }),
                ],
              }),
              /* @__PURE__ */ jsx("button", {
                disabled: submitting,
                type: "submit",
                className:
                  "btn-primary group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-neon px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-background transition hover:scale-105 shadow-md disabled:opacity-50 sm:w-auto rounded-full",
                children: submitting
                  ? "Transmitting..."
                  : /* @__PURE__ */ jsxs(Fragment, {
                      children: [
                        "Send Transmission",
                        " ",
                        /* @__PURE__ */ jsx(Send, {
                          size: 15,
                          className: "group-hover:translate-x-1 transition",
                        }),
                      ],
                    }),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs("aside", {
            className: "lg:col-span-5 space-y-6",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className:
                  "bg-surface-elevated border border-border shadow-soft rounded-[24px] p-8 sm:p-10",
                children: [
                  /* @__PURE__ */ jsx("div", {
                    className: "font-mono text-[10px] tracking-[0.3em] text-neon mb-5",
                    children: "// FACILITY",
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    className: "space-y-4 text-sm",
                    children: [
                      /* @__PURE__ */ jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [
                          /* @__PURE__ */ jsx(MapPin, {
                            size: 16,
                            className: "text-neon mt-0.5 shrink-0",
                          }),
                          /* @__PURE__ */ jsxs("div", {
                            children: [
                              /* @__PURE__ */ jsx("div", {
                                className: "font-medium",
                                children: "Headquarters",
                              }),
                              /* @__PURE__ */ jsx("div", {
                                className: "text-muted-foreground mt-1",
                                children:
                                  "Plot No.107, Pollupalli SIDCO Industrial Estate, Gangasandiram, Krishnagiri \u2013 635115, Tamil Nadu, India",
                              }),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          /* @__PURE__ */ jsx(Phone, { size: 16, className: "text-neon" }),
                          /* @__PURE__ */ jsx("a", {
                            href: "tel:+917200743683",
                            className: "hover:text-neon transition",
                            children: "+91 72007 43683",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          /* @__PURE__ */ jsx(Mail, { size: 16, className: "text-neon" }),
                          /* @__PURE__ */ jsx("a", {
                            href: "mailto:info@killisbird.com",
                            className: "hover:text-neon transition",
                            children: "info@killisbird.com",
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs("a", {
                    href: "https://maps.google.com/?q=Krishnagiri+Tamil+Nadu",
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-neon hover:underline",
                    children: [
                      "Google Maps Direction ",
                      /* @__PURE__ */ jsx(ArrowRight, { size: 14 }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "bg-white border border-border rounded-[24px] p-8 sm:p-10 shadow-sm",
                children: [
                  /* @__PURE__ */ jsx("div", {
                    className: "font-mono text-[10px] tracking-[0.3em] text-neon mb-4",
                    children: "// STATUS",
                  }),
                  /* @__PURE__ */ jsx("div", {
                    className: "text-base text-muted-foreground leading-relaxed",
                    children:
                      "All transmissions are reviewed by our engineering desk within 48 hours. Priority requests are handled by senior systems leads.",
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    className:
                      "mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-neon",
                    children: [
                      /* @__PURE__ */ jsx("span", {
                        className: "w-2 h-2 rounded-full bg-neon animate-pulse-ring",
                      }),
                      " CHANNEL ACTIVE",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Field({ label, name, type = "text", placeholder, error }) {
  const errorId = `${name}-error`;
  return /* @__PURE__ */ jsxs("div", {
    children: [
      /* @__PURE__ */ jsxs("label", {
        htmlFor: name,
        className: "font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase",
        children: ["// ", label],
      }),
      /* @__PURE__ */ jsx("input", {
        id: name,
        name,
        type,
        required: true,
        placeholder,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : void 0,
        className:
          "mt-2 w-full bg-background border border-border focus:border-neon focus:ring-1 focus:ring-neon rounded-xl px-4 py-3 text-sm transition placeholder:text-muted-foreground/60",
      }),
      error &&
        /* @__PURE__ */ jsx("p", {
          id: errorId,
          className: "mt-2 text-xs text-destructive",
          children: error,
        }),
    ],
  });
}
export { Route };
