import { PremiumCard } from "@/components/site/PremiumCard";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { articles as allArticles } from "@/data/articles";

const blogPosts = allArticles.slice(0, 3);

export function BlogSection() {
  return (
    <section id="blog" className="section-y bg-background border-t border-border/50">
      <div className="container-edge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl flex flex-col gap-6 mb-12"
        >
          <div className="flex items-center gap-2.5 font-mono text-[0.60rem] uppercase tracking-[0.30em] text-neon">
            <span className="h-1.5 w-1.5 shrink-0 bg-neon rounded-full" />
            INSIGHTS &amp; ENGINEERING
          </div>
          <h2 className="heading-lg">Latest Publications</h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Technical deep-dives, industry perspectives, and the latest engineering advancements
            from the Killis Bird team.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              to="/blog/$postId"
              params={{ postId: post.slug }}
              className="no-underline"
            >
              <PremiumCard delay={0.1 * i} className="group cursor-pointer blog-card">
                <article className="bg-white rounded-[20px] overflow-hidden flex flex-col h-full shadow-card transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-elevated group-hover:border-b-2 group-hover:border-neon">
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105 p-8"
                    />
                    <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 bg-background/90 px-3 py-1.5 font-mono text-[0.55rem] tracking-[0.2em] text-foreground border border-border/50 rounded-sm shadow-sm backdrop-blur-md">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 gap-4">
                    {/* Date pill badge */}
                    <div className="self-start">
                      <span className="inline-flex items-center bg-neon text-white text-[0.6rem] font-mono tracking-widest uppercase px-3 py-1 rounded-full font-bold">
                        {post.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-neon transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-3 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-neon font-bold mt-2 group-hover:gap-3 transition-all">
                      READ ARTICLES
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </article>
              </PremiumCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
