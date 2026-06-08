import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import logoImg from "@/assets/KILLIS BIRD - LOGO.png";
const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Support", to: "/support" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
];
const productLinks = [
  { label: "Flight Control Card", to: "/products#01" },
  { label: "Frames", to: "/products#02" },
  { label: "Propellers", to: "/products#03" },
  { label: "Swarm GCS", to: "/products#04" },
  { label: "Custom Solutions", to: "/contact" },
  { label: "White Labelling", to: "/contact" },
];
const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", {
    className: "relative bg-black text-white border-t border-white/10 overflow-hidden",
    children: [
      /* @__PURE__ */ jsx("div", {
        className: "footer-watermark",
        "aria-hidden": "true",
        children: "KILLIS BIRD",
      }),
      /* @__PURE__ */ jsxs("div", {
        className:
          "container-edge relative z-10 pt-16 md:pt-24 pb-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "space-y-6 lg:col-span-1",
            children: [
              /* @__PURE__ */ jsx("img", {
                src: logoImg,
                alt: "Killis Bird Logo",
                className: "h-10 w-auto object-contain",
              }),
              /* @__PURE__ */ jsx("p", {
                className: "text-sm text-white/50 leading-relaxed max-w-xs",
                children: "Indigenous UAV systems built for precision, intelligence, and control.",
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "space-y-3 text-sm text-white/60",
                children: [
                  /* @__PURE__ */ jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      /* @__PURE__ */ jsx(MapPin, {
                        size: 16,
                        className: "text-neon mt-0.5 shrink-0",
                      }),
                      /* @__PURE__ */ jsxs("span", {
                        className: "leading-relaxed",
                        children: [
                          "Plot No.107, Pollupalli SIDCO Industrial Estate,",
                          /* @__PURE__ */ jsx("br", {}),
                          "Gangasandiram, Krishnagiri 635115.",
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ jsx(Phone, { size: 16, className: "text-neon shrink-0" }),
                      /* @__PURE__ */ jsx("a", {
                        href: "tel:+917200743683",
                        className:
                          "hover:text-neon transition-colors font-mono tracking-widest text-xs",
                        children: "+91 72007 43683",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ jsx(Mail, { size: 16, className: "text-neon shrink-0" }),
                      /* @__PURE__ */ jsx("a", {
                        href: "mailto:info@killisbird.com",
                        className:
                          "hover:text-neon transition-colors font-mono tracking-widest text-xs",
                        children: "info@killisbird.com",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxs("div", {
            children: [
              /* @__PURE__ */ jsx("h3", {
                className: "text-sm font-mono tracking-widest text-white/40 mb-6 uppercase",
                children: "Quick Links",
              }),
              /* @__PURE__ */ jsx("div", {
                className: "flex flex-col gap-3",
                children: quickLinks.map((link) =>
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: link.to,
                      className:
                        "text-white/60 hover:text-neon transition-colors text-sm font-medium",
                      children: link.label,
                    },
                    link.label,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs("div", {
            children: [
              /* @__PURE__ */ jsx("h3", {
                className: "text-sm font-mono tracking-widest text-white/40 mb-6 uppercase",
                children: "Products",
              }),
              /* @__PURE__ */ jsx("div", {
                className: "flex flex-col gap-3",
                children: productLinks.map((link) =>
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: link.to,
                      className:
                        "text-white/60 hover:text-neon transition-colors text-sm font-medium",
                      children: link.label,
                    },
                    link.label,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs("div", {
            children: [
              /* @__PURE__ */ jsx("h3", {
                className: "text-sm font-mono tracking-widest text-white/40 mb-6 uppercase",
                children: "Connect",
              }),
              /* @__PURE__ */ jsx("div", {
                className: "flex flex-col gap-4",
                children: socials.map(({ icon: Icon, href, label }) =>
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href,
                      "aria-label": label,
                      className: "flex items-center gap-3 group",
                      children: [
                        /* @__PURE__ */ jsx("span", {
                          className:
                            "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-neon group-hover:border-neon transition-all",
                          children: /* @__PURE__ */ jsx(Icon, { size: 16 }),
                        }),
                        /* @__PURE__ */ jsx("span", {
                          className:
                            "text-sm text-white/50 group-hover:text-white transition-colors",
                          children: label,
                        }),
                      ],
                    },
                    label,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxs("div", {
        className:
          "container-edge relative z-10 border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-mono tracking-widest text-white/40",
        children: [
          /* @__PURE__ */ jsx("div", {
            children: "COPYRIGHT \xA9 2026 KILLIS BIRD, ALL RIGHTS RESERVED.",
          }),
          /* @__PURE__ */ jsxs("div", {
            children: [
              "DEVELOPED BY ",
              /* @__PURE__ */ jsx("span", {
                className: "text-white/80 font-bold",
                children: "RISE WITH MEDIA",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { Footer };
