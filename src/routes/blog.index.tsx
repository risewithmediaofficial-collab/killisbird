import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Calendar, User } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";
import { PremiumCard } from "@/components/site/PremiumCard";
import { articles } from "@/data/articles";
import { motion } from "framer-motion";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Killis Bird Insights" },
      {
        name: "description",
        content: "Technical deep-dives and engineering advancements from the Killis Bird team.",
      },
    ],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <>
      <PageHero
        kicker="Briefings & Intelligence"
        title={
          <>
            Latest publications from the <span className="text-neon">frontier</span>.
          </>
        }
        subtitle="Technical deep-dives, industry perspectives, and the latest engineering advancements from the Killis Bird team."
      />

      <section className="container-edge pb-24 md:pb-32">
        <div className="mb-12">
          <SectionLabel index="01" label="Article Archive" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              to="/blog/$postId"
              params={{ postId: article.slug }}
              className="no-underline group h-full"
            >
              <PremiumCard delay={0.1 * (i % 3)} className="h-full">
                <article className="card-surface h-full flex flex-col hover:border-neon/40 transition-colors">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-white border-b border-border/30">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      loading="lazy"
                      className="h-full w-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105 p-8"
                    />
                    <div className="absolute inset-0 bg-foreground/[0.02] pointer-events-none" />

                    {/* Category Label */}
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-2.5 py-1 font-mono text-[0.55rem] tracking-[0.2em] text-foreground border border-border/50 rounded-sm">
                      {article.category}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col flex-1 p-6 lg:p-8">
                    <div className="flex items-center gap-4 font-mono text-[0.60rem] tracking-widest text-muted-foreground mb-4 uppercase">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={10} className="text-neon/70" />
                        {article.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="flex items-center gap-1.5">
                        <User size={10} className="text-neon/70" />
                        {article.author.split(" ").pop()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-neon transition-colors line-clamp-2 leading-tight">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-3 mb-8 flex-1 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="mt-auto flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-foreground group-hover:text-neon transition-colors">
                      READ BRIEFING
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-neon" />
                    </div>
                  </div>
                </article>
              </PremiumCard>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-24 border-t border-border/50 mt-24"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h4 className="heading-md">Deep Intelligence?</h4>
            <p className="text-muted-foreground">
              Request a classified briefing or technical consultation with our engineering team for
              custom mission requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-neon hover:underline group"
            >
              Request classified briefing{" "}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
