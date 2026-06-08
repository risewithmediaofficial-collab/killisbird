import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionLabel } from "@/components/site/Section";
const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Terms \u2014 Killis Bird" },
      {
        name: "description",
        content:
          "Terms of use and privacy policy for Killis Bird LLP \u2014 compliant with Indian laws and regulations.",
      },
    ],
  }),
  component: PrivacyPage,
});
function PrivacyPage() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(PageHero, {
        kicker: "Compliance",
        title: /* @__PURE__ */ jsxs(Fragment, {
          children: [
            "Terms & ",
            /* @__PURE__ */ jsx("span", { className: "text-neon", children: "Privacy" }),
            ".",
          ],
        }),
      }),
      /* @__PURE__ */ jsxs("section", {
        className: "container-edge grid gap-10 pb-20 md:pb-24 lg:grid-cols-12 lg:gap-12",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "lg:col-span-7 space-y-12",
            children: [
              /* @__PURE__ */ jsxs(Block, {
                index: "01",
                title: "Terms & Conditions",
                children: [
                  /* @__PURE__ */ jsx("p", {
                    children:
                      "By purchasing and using Killis Bird products, you agree to adhere to these Terms of Use, compliant with Indian laws and regulations.",
                  }),
                  /* @__PURE__ */ jsxs(SubBlock, {
                    title: "1. Legal Compliance",
                    children: [
                      /* @__PURE__ */ jsx("p", { children: "Use of products must comply with:" }),
                      /* @__PURE__ */ jsx("ul", {
                        className: "space-y-1.5 list-none",
                        children: [
                          "The Indian Penal Code, 1860",
                          "The Arms Act, 1959",
                          "The Information Technology Act, 2000",
                          "The Explosives Act, 1884",
                          "The Drone (Amendment) Rules, 2023",
                          "The Environment (Protection) Act, 1986",
                          "The Consumer Protection Act, 2019",
                        ].map((l) =>
                          /* @__PURE__ */ jsxs(
                            "li",
                            {
                              className: "flex gap-3",
                              children: [
                                /* @__PURE__ */ jsx("span", {
                                  className: "text-neon",
                                  children: "\u25B8",
                                }),
                                l,
                              ],
                            },
                            l,
                          ),
                        ),
                      }),
                      /* @__PURE__ */ jsx("p", {
                        children:
                          "Illegal activities, including terrorism, espionage, hacking, or manufacturing weaponry, will result in legal action.",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "2. Prohibited Uses",
                    children: /* @__PURE__ */ jsx("p", {
                      children:
                        "Using products to harm living beings, directly or indirectly, is strictly prohibited and punishable under relevant laws.",
                    }),
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "3. Limitation of Liability",
                    children: /* @__PURE__ */ jsx("p", {
                      children:
                        "Killis Bird is not liable for any misuse of products, including modifications or integrations. Users bear full responsibility for legal compliance.",
                    }),
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "4. Consequences of Illegal Activities",
                    children: /* @__PURE__ */ jsx("p", {
                      children:
                        "Illegal use will lead to legal action, potential criminal prosecution, termination of sales, and reporting to authorities.",
                    }),
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "5. Modification and Liability",
                    children: /* @__PURE__ */ jsx("p", {
                      children:
                        "Modifications of products are the user's responsibility. Killis Bird disclaims liability for modified products.",
                    }),
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "6. Indemnification",
                    children: /* @__PURE__ */ jsx("p", {
                      children:
                        "Users indemnify Killis Bird against liabilities arising from illegal or harmful use.",
                    }),
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "7. Changes to Terms",
                    children: /* @__PURE__ */ jsx("p", {
                      children:
                        "Terms are subject to change. Continued use constitutes acceptance of new terms.",
                    }),
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "8. Contact",
                    children: /* @__PURE__ */ jsx("p", {
                      children: "For queries, contact via the website.",
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs(Block, {
                index: "02",
                title: "Privacy Policy",
                children: [
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "Information Collection",
                    children: /* @__PURE__ */ jsx("p", {
                      children:
                        "Killis Bird may collect personal identification information when users visit the site, register, fill out a form, or engage in activities. Information may include name, email, phone, and other relevant data. Users may visit anonymously; personal information is only collected if voluntarily submitted.",
                    }),
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "Information Usage",
                    children: /* @__PURE__ */ jsx("ul", {
                      className: "space-y-1.5 list-none",
                      children: [
                        "To personalize user experience",
                        "To improve the site and services",
                        "To respond to customer service requests",
                        "To administer promotions, surveys, or other site features",
                        "To send periodic emails regarding latest updates and news",
                      ].map((l) =>
                        /* @__PURE__ */ jsxs(
                          "li",
                          {
                            className: "flex gap-3",
                            children: [
                              /* @__PURE__ */ jsx("span", {
                                className: "text-neon",
                                children: "\u25B8",
                              }),
                              l,
                            ],
                          },
                          l,
                        ),
                      ),
                    }),
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "Information Sharing",
                    children: /* @__PURE__ */ jsx("p", {
                      children:
                        "Killis Bird does not share, sell, or rent users' personal identification information to third parties without consent, unless required by law.",
                    }),
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "Data Security",
                    children: /* @__PURE__ */ jsx("p", {
                      children:
                        "Appropriate data collection, storage, processing practices, and security measures are implemented to protect against unauthorized access, alteration, disclosure, or destruction of personal data.",
                    }),
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "Cookies",
                    children: /* @__PURE__ */ jsx("p", {
                      children:
                        "The site uses cookies to enhance user experience and provide personalized browsing. Cookies do not contain personal identification information. Users can disable cookies in their browser, though some site features may not function properly.",
                    }),
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "Age of Consent",
                    children: /* @__PURE__ */ jsx("p", {
                      children:
                        "By using the site, users represent that they are at least the age of majority in their state or province, or have obtained parental/legal guardian consent if a minor.",
                    }),
                  }),
                  /* @__PURE__ */ jsx(SubBlock, {
                    title: "Changes to Privacy Policy",
                    children: /* @__PURE__ */ jsx("p", {
                      children:
                        "Killis Bird reserves the right to modify this privacy policy at any time. Users are encouraged to review it periodically.",
                    }),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsx("aside", {
            className: "lg:col-span-5",
            children: /* @__PURE__ */ jsxs("div", {
              className:
                "relative bg-surface-elevated border border-border rounded-[24px] shadow-sm space-y-4 p-6 sm:p-8 lg:sticky lg:top-28",
              children: [
                /* @__PURE__ */ jsx("div", {
                  className: "font-mono text-[10px] tracking-[0.3em] text-neon",
                  children: "// JURISDICTION",
                }),
                /* @__PURE__ */ jsx("h3", {
                  className: "text-2xl font-semibold tracking-tight",
                  children: "Operating under Indian law.",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-sm text-muted-foreground leading-relaxed",
                  children:
                    "All Killis Bird products and services are governed by the laws of the Republic of India. Cross-border use is subject to applicable export and security regulations.",
                }),
                /* @__PURE__ */ jsx("div", {
                  className:
                    "pt-4 border-t border-border/50 font-mono text-[10px] tracking-[0.25em] text-muted-foreground",
                  children: "LAST UPDATED: 2026",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Block({ index, title, children }) {
  return /* @__PURE__ */ jsxs("section", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ jsx(SectionLabel, { index, label: title }),
      /* @__PURE__ */ jsx("h2", {
        className: "text-[clamp(1.9rem,7vw,2.5rem)] font-semibold tracking-tight",
        children: title,
      }),
      /* @__PURE__ */ jsx("div", {
        className: "space-y-6 text-sm text-muted-foreground leading-relaxed",
        children,
      }),
    ],
  });
}
function SubBlock({ title, children }) {
  return /* @__PURE__ */ jsxs("div", {
    className: "space-y-3 pt-4 border-t border-border/40",
    children: [
      /* @__PURE__ */ jsx("h3", {
        className: "text-base font-semibold text-foreground tracking-tight",
        children: title,
      }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children }),
    ],
  });
}
export { Route };
