import { createFileRoute, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { getArticleBySlug, articles } from "@/data/articles";
import { PageHero, SectionLabel } from "@/components/site/Section";
import { PremiumCard } from "@/components/site/PremiumCard";

export const Route = createFileRoute("/blog/$postId")({
  head: ({ params }) => {
    const article = getArticleBySlug(params.postId);
    return {
      meta: [
        { title: `${article?.title || "Article"} — Killis Bird Blog` },
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
    return (
      <div className="container-edge min-h-[70vh] flex flex-col items-center justify-center text-center">
        <SectionLabel index="404" label="Not Found" />
        <h1 className="heading-h1 mt-8 mb-6">Article Not Found</h1>
        <Link
          to="/blog"
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-neon hover:underline inline-flex items-center gap-2"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <PageHero kicker={article.category} title={article.title} subtitle={article.excerpt} />

      <section className="container-edge -mt-12 mb-24 md:-mt-16 md:mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm border border-border/50 bg-white shadow-soft">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover p-12 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-foreground/5 pointer-events-none" />
          </div>
        </motion.div>
      </section>

      {/* Article Content Layout */}
      <section className="container-edge pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Metadata Sidebar */}
          <aside className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border/50 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex justify-around items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:relative lg:block lg:col-span-3 lg:space-y-12 lg:bg-transparent lg:border-none lg:p-0 lg:z-auto lg:shadow-none lg:pb-0">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-32">
              <div>
                <SectionLabel index="01" label="Author" />
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                    <User size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{article.author}</div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                      Technical Contributor
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <SectionLabel index="02" label="Publication" />
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    {article.readTime}
                  </div>
                  <div>{article.date}</div>
                </div>
              </div>

              <div>
                <SectionLabel index="03" label="Actions" />
                <div className="mt-4 flex flex-col gap-3">
                  <button className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground hover:text-neon transition-colors group text-left">
                    <Share2 size={12} className="group-hover:scale-110 transition-transform" />
                    Share Briefing
                  </button>
                  <Link
                    to="/blog"
                    className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground hover:text-neon transition-colors group"
                  >
                    <ArrowLeft
                      size={12}
                      className="group-hover:-translate-x-1 transition-transform"
                    />
                    Back to Archive
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Bottom Tab Bar */}
            <div className="flex lg:hidden w-full justify-around items-center">
              <Link
                to="/blog"
                className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-neon transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="text-[9px] font-mono uppercase tracking-widest">Back</span>
              </Link>
              <div className="flex flex-col items-center gap-1.5 text-foreground">
                <Clock size={20} className="text-neon" />
                <span className="text-[9px] font-mono uppercase tracking-widest">
                  {article.readTime}
                </span>
              </div>
              <button className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-neon transition-colors">
                <Share2 size={20} />
                <span className="text-[9px] font-mono uppercase tracking-widest">Share</span>
              </button>
            </div>
          </aside>

          {/* Body Content */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-9 max-w-3xl pb-16 lg:pb-0"
          >
            {/* Mobile Author/Date Info */}
            <div className="flex lg:hidden items-center justify-between border-b border-border/50 pb-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                  <User size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium">{article.author}</div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    {article.date}
                  </div>
                </div>
              </div>
            </div>

            <div className="prose-custom">
              {article.content.split("\n\n").map((block, idx) => {
                const trimmed = block.trim();

                // Handle headers
                if (trimmed.startsWith("## ")) {
                  return (
                    <h2 key={idx} className="heading-md mt-16 mb-6 text-foreground first:mt-0">
                      {trimmed.replace("## ", "")}
                    </h2>
                  );
                }
                if (trimmed.startsWith("### ")) {
                  return (
                    <h3 key={idx} className="text-xl font-medium text-foreground mt-10 mb-4">
                      {trimmed.replace("### ", "")}
                    </h3>
                  );
                }

                // Handle bullet lists
                if (trimmed.startsWith("- ")) {
                  const items = trimmed.split("\n").filter((line) => line.trim().startsWith("- "));
                  return (
                    <ul key={idx} className="my-8 space-y-4">
                      {items.map((item, i) => (
                        <li key={i} className="flex gap-4 text-muted-foreground leading-relaxed">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/40" />
                          <span>{item.trim().replace("- ", "")}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Handle tables
                if (trimmed.includes("|")) {
                  const lines = trimmed.split("\n").filter((line) => line.includes("|"));
                  if (lines.length > 2) {
                    return (
                      <div
                        key={idx}
                        className="overflow-x-auto my-10 border border-border/50 rounded-sm"
                      >
                        <table className="w-full text-left border-collapse">
                          <tbody className="divide-y divide-border/50">
                            {lines.map((line, i) => (
                              <tr
                                key={i}
                                className="group hover:bg-foreground/[0.02] transition-colors"
                              >
                                {line
                                  .split("|")
                                  .filter((cell) => cell.trim())
                                  .map((cell, j) => (
                                    <td
                                      key={j}
                                      className={`px-6 py-4 text-sm ${i === 0 ? "font-mono text-[11px] uppercase tracking-wider text-muted-foreground bg-foreground/[0.01]" : "text-foreground/80"}`}
                                    >
                                      {cell.trim()}
                                    </td>
                                  ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                }

                // Regular paragraphs
                if (trimmed) {
                  return (
                    <p
                      key={idx}
                      className="text-lg text-muted-foreground leading-relaxed mb-8 last:mb-0"
                    >
                      {trimmed}
                    </p>
                  );
                }

                return null;
              })}
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-surface-elevated border-t border-border/50 py-24 md:py-32">
        <div className="container-edge">
          <div className="mb-12">
            <SectionLabel index="04" label="Related Briefings" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 mb-16">
            {articles
              .filter((a) => a.slug !== article.slug)
              .slice(0, 3)
              .map((related, i) => (
                <Link
                  key={related.slug}
                  to="/blog/$postId"
                  params={{ postId: related.slug }}
                  className="no-underline group h-full"
                >
                  <PremiumCard delay={0.1 * i} className="h-full">
                    <article className="card-surface h-full flex flex-col hover:border-neon/40 transition-colors">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-white border-b border-border/30">
                        <img
                          src={related.coverImage}
                          alt={related.title}
                          loading="lazy"
                          className="h-full w-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105 p-6"
                        />
                        <div className="absolute inset-0 bg-foreground/[0.02] pointer-events-none" />
                      </div>
                      <div className="flex flex-col flex-1 p-6">
                        <div className="font-mono text-[0.55rem] tracking-widest text-muted-foreground mb-3 uppercase">
                          {related.date}
                        </div>
                        <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-neon transition-colors line-clamp-2 leading-tight">
                          {related.title}
                        </h4>
                        <div className="mt-auto flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neon">
                          READ <ArrowLeft size={10} className="rotate-180" />
                        </div>
                      </div>
                    </article>
                  </PremiumCard>
                </Link>
              ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-foreground px-10 font-mono text-[11px] uppercase tracking-[0.25em] text-background transition-all hover:scale-105"
            >
              <span className="relative z-10">Explore Full Archive</span>
              <div className="absolute inset-0 z-0 bg-neon opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
