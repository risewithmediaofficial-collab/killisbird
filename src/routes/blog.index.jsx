import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calendar, User } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/site/Section";
import { ScrollStack, ScrollStackItem } from "@/components/ui/scroll-stack";
import { articles } from "@/data/articles";

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

        <ScrollStack
          className="mx-auto max-w-5xl"
          itemDistance={64}
          itemStackDistance={18}
          stackPosition="6.25rem"
        >
          {articles.map((article, index) => (
            <ScrollStackItem key={article.slug}>
              <Link
                to="/blog/$postId"
                params={{ postId: article.slug }}
                className="group block h-full no-underline"
              >
                <article className="card-surface flex h-full flex-col overflow-hidden rounded-[24px] border border-black/6 bg-white shadow-[0_16px_38px_rgba(15,23,42,0.08)]">
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.95),_rgba(255,255,255,0.98)_55%,_rgba(238,242,247,0.92))]">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 rounded-full border border-black/8 bg-white/90 px-2.5 py-1 font-mono text-[0.5rem] tracking-[0.18em] text-neon shadow-sm sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[0.55rem] sm:tracking-[0.2em]">
                      {article.category}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-3 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-slate-500 sm:text-[0.6rem] sm:tracking-widest">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={10} className="text-neon/70" />
                        {article.date}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span className="flex items-center gap-1.5">
                        <User size={10} className="text-neon/70" />
                        {article.author.split(" ").pop()}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-semibold leading-tight text-neon transition-colors sm:text-xl">
                      {article.title}
                    </h3>
                    <p className="mb-6 flex-1 text-sm leading-6 text-slate-600 sm:leading-7">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2.5 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-slate-900 transition-colors group-hover:text-neon sm:text-[0.65rem] sm:tracking-[0.25em]">
                      Read Briefing
                      <ArrowUpRight className="h-3 w-3 text-neon transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-24 border-t border-border/50 pt-24 text-center"
        >
          <div className="mx-auto max-w-2xl space-y-6">
            <SectionLabel index="02" label="Request Briefing" />
            <h4 className="heading-md mt-8">Deep Intelligence?</h4>
            <p className="text-slate-600">
              Request a classified briefing or technical consultation with our engineering team for
              custom mission requirements.
            </p>
            <Link
              to="/contact"
              className="group inline-flex min-h-12 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-neon"
            >
              Request classified briefing
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
