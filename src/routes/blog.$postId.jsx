import { jsx, jsxs } from "react/jsx-runtime";
import { createFileRoute, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { getArticleBySlug, articles } from "@/data/articles";
import { PageHero, SectionLabel } from "@/components/site/Section";
import { PremiumCard } from "@/components/site/PremiumCard";
const Route = createFileRoute("/blog/$postId")({
  head: ({ params }) => {
    const article = getArticleBySlug(params.postId);
    return {
      meta: [
        { title: `${article?.title || "Article"} \u2014 Killis Bird Blog` },
        {
          name: "description",
          content: article?.excerpt || "Read the latest from Killis Bird.",
        },
      ],
    };
  },
  component: BlogPostPage,
});
function BlogPostPage() {
  const { postId: slug } = useParams({ from: "/blog/$postId" });
  const article = getArticleBySlug(slug);
  if (!article) {
    return /* @__PURE__ */ jsxs("div", {
      className:
        "container-edge min-h-[70vh] flex flex-col items-center justify-center text-center",
      children: [
        /* @__PURE__ */ jsx(SectionLabel, { index: "404", label: "Not Found" }),
        /* @__PURE__ */ jsx("h1", {
          className: "heading-h1 mt-8 mb-6",
          children: "Article Not Found",
        }),
        /* @__PURE__ */ jsxs(Link, {
          to: "/blog",
          className:
            "font-mono text-[11px] uppercase tracking-[0.25em] text-neon hover:underline inline-flex items-center gap-2",
          children: [/* @__PURE__ */ jsx(ArrowLeft, { size: 14 }), " Back to Blog"],
        }),
      ],
    });
  }
  return /* @__PURE__ */ jsxs("div", {
    className: "bg-background",
    children: [
      /* @__PURE__ */ jsx(PageHero, {
        kicker: article.category,
        title: article.title,
        subtitle: article.excerpt,
      }),
      /* @__PURE__ */ jsx("section", {
        className: "container-edge -mt-12 mb-24 md:-mt-16 md:mb-32 relative z-10",
        children: /* @__PURE__ */ jsx(motion.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.1 },
          children: /* @__PURE__ */ jsxs("div", {
            className:
              "relative aspect-[21/9] w-full overflow-hidden rounded-sm border border-border/50 bg-white shadow-soft",
            children: [
              /* @__PURE__ */ jsx("img", {
                src: article.coverImage,
                alt: article.title,
                className: "w-full h-full object-cover p-12 mix-blend-multiply",
              }),
              /* @__PURE__ */ jsx("div", {
                className: "absolute inset-0 bg-foreground/5 pointer-events-none",
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        className: "container-edge pb-24 md:pb-32",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20",
          children: [
            /* @__PURE__ */ jsxs("aside", {
              className:
                "fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border/50 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex justify-around items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:relative lg:block lg:col-span-3 lg:space-y-12 lg:bg-transparent lg:border-none lg:p-0 lg:z-auto lg:shadow-none lg:pb-0",
              children: [
                /* @__PURE__ */ jsxs("div", {
                  className: "hidden lg:block space-y-8 sticky top-32",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      children: [
                        /* @__PURE__ */ jsx(SectionLabel, { index: "01", label: "Author" }),
                        /* @__PURE__ */ jsxs("div", {
                          className: "mt-4 flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ jsx("div", {
                              className:
                                "w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center text-neon",
                              children: /* @__PURE__ */ jsx(User, { size: 18 }),
                            }),
                            /* @__PURE__ */ jsxs("div", {
                              children: [
                                /* @__PURE__ */ jsx("div", {
                                  className: "text-sm font-medium",
                                  children: article.author,
                                }),
                                /* @__PURE__ */ jsx("div", {
                                  className:
                                    "text-[10px] font-mono text-muted-foreground uppercase tracking-wider",
                                  children: "Technical Contributor",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      children: [
                        /* @__PURE__ */ jsx(SectionLabel, { index: "02", label: "Publication" }),
                        /* @__PURE__ */ jsxs("div", {
                          className: "mt-4 space-y-3 text-sm text-muted-foreground",
                          children: [
                            /* @__PURE__ */ jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                /* @__PURE__ */ jsx(Clock, { size: 14 }),
                                article.readTime,
                              ],
                            }),
                            /* @__PURE__ */ jsx("div", { children: article.date }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      children: [
                        /* @__PURE__ */ jsx(SectionLabel, { index: "03", label: "Actions" }),
                        /* @__PURE__ */ jsxs("div", {
                          className: "mt-4 flex flex-col gap-3",
                          children: [
                            /* @__PURE__ */ jsxs("button", {
                              className:
                                "flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground hover:text-neon transition-colors group text-left",
                              children: [
                                /* @__PURE__ */ jsx(Share2, {
                                  size: 12,
                                  className: "group-hover:scale-110 transition-transform",
                                }),
                                "Share Briefing",
                              ],
                            }),
                            /* @__PURE__ */ jsxs(Link, {
                              to: "/blog",
                              className:
                                "flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground hover:text-neon transition-colors group",
                              children: [
                                /* @__PURE__ */ jsx(ArrowLeft, {
                                  size: 12,
                                  className: "group-hover:-translate-x-1 transition-transform",
                                }),
                                "Back to Archive",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "flex lg:hidden w-full justify-around items-center",
                  children: [
                    /* @__PURE__ */ jsxs(Link, {
                      to: "/blog",
                      className:
                        "flex flex-col items-center gap-1.5 text-muted-foreground hover:text-neon transition-colors",
                      children: [
                        /* @__PURE__ */ jsx(ArrowLeft, { size: 20 }),
                        /* @__PURE__ */ jsx("span", {
                          className: "text-[9px] font-mono uppercase tracking-widest",
                          children: "Back",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex flex-col items-center gap-1.5 text-foreground",
                      children: [
                        /* @__PURE__ */ jsx(Clock, { size: 20, className: "text-neon" }),
                        /* @__PURE__ */ jsx("span", {
                          className: "text-[9px] font-mono uppercase tracking-widest",
                          children: article.readTime,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("button", {
                      className:
                        "flex flex-col items-center gap-1.5 text-muted-foreground hover:text-neon transition-colors",
                      children: [
                        /* @__PURE__ */ jsx(Share2, { size: 20 }),
                        /* @__PURE__ */ jsx("span", {
                          className: "text-[9px] font-mono uppercase tracking-widest",
                          children: "Share",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxs(motion.article, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.3, duration: 0.8 },
              className: "lg:col-span-9 max-w-3xl pb-16 lg:pb-0",
              children: [
                /* @__PURE__ */ jsx("div", {
                  className:
                    "flex lg:hidden items-center justify-between border-b border-border/50 pb-6 mb-10",
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ jsx("div", {
                        className:
                          "w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center text-neon",
                        children: /* @__PURE__ */ jsx(User, { size: 18 }),
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        children: [
                          /* @__PURE__ */ jsx("div", {
                            className: "text-sm font-medium",
                            children: article.author,
                          }),
                          /* @__PURE__ */ jsx("div", {
                            className:
                              "text-[10px] font-mono text-muted-foreground uppercase tracking-wider",
                            children: article.date,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                /* @__PURE__ */ jsx("div", {
                  className: "prose-custom",
                  children: article.content.split("\n\n").map((block, idx) => {
                    const trimmed = block.trim();
                    if (trimmed.startsWith("## ")) {
                      return /* @__PURE__ */ jsx(
                        "h2",
                        {
                          className: "heading-md mt-16 mb-6 text-foreground first:mt-0",
                          children: trimmed.replace("## ", ""),
                        },
                        idx,
                      );
                    }
                    if (trimmed.startsWith("### ")) {
                      return /* @__PURE__ */ jsx(
                        "h3",
                        {
                          className: "text-xl font-medium text-foreground mt-10 mb-4",
                          children: trimmed.replace("### ", ""),
                        },
                        idx,
                      );
                    }
                    if (trimmed.startsWith("- ")) {
                      const items = trimmed
                        .split("\n")
                        .filter((line) => line.trim().startsWith("- "));
                      return /* @__PURE__ */ jsx(
                        "ul",
                        {
                          className: "my-8 space-y-4",
                          children: items.map((item, i) =>
                            /* @__PURE__ */ jsxs(
                              "li",
                              {
                                className: "flex gap-4 text-muted-foreground leading-relaxed",
                                children: [
                                  /* @__PURE__ */ jsx("span", {
                                    className:
                                      "mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/40",
                                  }),
                                  /* @__PURE__ */ jsx("span", {
                                    children: item.trim().replace("- ", ""),
                                  }),
                                ],
                              },
                              i,
                            ),
                          ),
                        },
                        idx,
                      );
                    }
                    if (trimmed.includes("|")) {
                      const lines = trimmed.split("\n").filter((line) => line.includes("|"));
                      if (lines.length > 2) {
                        return /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "overflow-x-auto my-10 border border-border/50 rounded-sm",
                            children: /* @__PURE__ */ jsx("table", {
                              className: "w-full text-left border-collapse",
                              children: /* @__PURE__ */ jsx("tbody", {
                                className: "divide-y divide-border/50",
                                children: lines.map((line, i) =>
                                  /* @__PURE__ */ jsx(
                                    "tr",
                                    {
                                      className:
                                        "group hover:bg-foreground/[0.02] transition-colors",
                                      children: line
                                        .split("|")
                                        .filter((cell) => cell.trim())
                                        .map((cell, j) =>
                                          /* @__PURE__ */ jsx(
                                            "td",
                                            {
                                              className: `px-6 py-4 text-sm ${i === 0 ? "font-mono text-[11px] uppercase tracking-wider text-muted-foreground bg-foreground/[0.01]" : "text-foreground/80"}`,
                                              children: cell.trim(),
                                            },
                                            j,
                                          ),
                                        ),
                                    },
                                    i,
                                  ),
                                ),
                              }),
                            }),
                          },
                          idx,
                        );
                      }
                    }
                    if (trimmed) {
                      return /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: "text-lg text-muted-foreground leading-relaxed mb-8 last:mb-0",
                          children: trimmed,
                        },
                        idx,
                      );
                    }
                    return null;
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        className: "bg-surface-elevated border-t border-border/50 py-24 md:py-32",
        children: /* @__PURE__ */ jsxs("div", {
          className: "container-edge",
          children: [
            /* @__PURE__ */ jsx("div", {
              className: "mb-12",
              children: /* @__PURE__ */ jsx(SectionLabel, {
                index: "04",
                label: "Related Briefings",
              }),
            }),
            /* @__PURE__ */ jsx("div", {
              className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 mb-16",
              children: articles
                .filter((a) => a.slug !== article.slug)
                .slice(0, 3)
                .map((related, i) =>
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/blog/$postId",
                      params: { postId: related.slug },
                      className: "no-underline group h-full",
                      children: /* @__PURE__ */ jsx(PremiumCard, {
                        delay: 0.1 * i,
                        className: "h-full",
                        children: /* @__PURE__ */ jsxs("article", {
                          className:
                            "card-surface h-full flex flex-col hover:border-neon/40 transition-colors",
                          children: [
                            /* @__PURE__ */ jsxs("div", {
                              className:
                                "relative aspect-[16/10] w-full overflow-hidden bg-white border-b border-border/30",
                              children: [
                                /* @__PURE__ */ jsx("img", {
                                  src: related.coverImage,
                                  alt: related.title,
                                  loading: "lazy",
                                  className:
                                    "h-full w-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105 p-6",
                                }),
                                /* @__PURE__ */ jsx("div", {
                                  className:
                                    "absolute inset-0 bg-foreground/[0.02] pointer-events-none",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ jsxs("div", {
                              className: "flex flex-col flex-1 p-6",
                              children: [
                                /* @__PURE__ */ jsx("div", {
                                  className:
                                    "font-mono text-[0.55rem] tracking-widest text-muted-foreground mb-3 uppercase",
                                  children: related.date,
                                }),
                                /* @__PURE__ */ jsx("h4", {
                                  className:
                                    "text-base font-bold text-foreground mb-2 group-hover:text-neon transition-colors line-clamp-2 leading-tight",
                                  children: related.title,
                                }),
                                /* @__PURE__ */ jsxs("div", {
                                  className:
                                    "mt-auto flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neon",
                                  children: [
                                    "READ ",
                                    /* @__PURE__ */ jsx(ArrowLeft, {
                                      size: 10,
                                      className: "rotate-180",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    },
                    related.slug,
                  ),
                ),
            }),
            /* @__PURE__ */ jsx("div", {
              className: "text-center",
              children: /* @__PURE__ */ jsxs(Link, {
                to: "/blog",
                className:
                  "group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-foreground px-10 font-mono text-[11px] uppercase tracking-[0.25em] text-background transition-all hover:scale-105",
                children: [
                  /* @__PURE__ */ jsx("span", {
                    className: "relative z-10",
                    children: "Explore Full Archive",
                  }),
                  /* @__PURE__ */ jsx("div", {
                    className:
                      "absolute inset-0 z-0 bg-neon opacity-0 group-hover:opacity-100 transition-opacity",
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { Route };
