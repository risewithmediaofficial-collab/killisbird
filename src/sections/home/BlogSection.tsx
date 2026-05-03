import { PremiumCard } from "@/components/site/PremiumCard";

import { ArrowUpRight } from "lucide-react";
import img1 from "@/assets/drone-parts/FLIGHT-CONTROL-CARD1.png";
import img2 from "@/assets/drone-parts/Swarm – GCS1.png";
import img3 from "@/assets/drone-parts/FRAMES1.png";

const blogPosts = [
  {
    id: 1,
    title: "Advancements in Autonomous Swarm Intelligence",
    date: "Oct 12, 2026",
    category: "TECHNOLOGY",
    image: img2,
    excerpt:
      "How distributed AI is revolutionizing multi-agent drone coordination in complex environments.",
  },
  {
    id: 2,
    title: "Next-Gen Flight Control Systems: STM32H743",
    date: "Sep 28, 2026",
    category: "HARDWARE",
    image: img1,
    excerpt:
      "Exploring the computational power behind real-time stabilization and rapid decision-making.",
  },
  {
    id: 3,
    title: "Aerospace Grade Frames: Carbon Fiber vs Titanium",
    date: "Sep 15, 2026",
    category: "ENGINEERING",
    image: img3,
    excerpt: "A deep dive into material science for high-stress payload delivery operations.",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="section-y bg-background">
      <div className="container-edge">
        <div className="mb-20 max-w-2xl">
          <div className="flex items-center gap-2.5 font-mono text-[0.60rem] uppercase tracking-[0.30em] text-neon mb-6">
            <span className="h-1.5 w-1.5 shrink-0 bg-neon rounded-full" />
            INSIGHTS & ENGINEERING
          </div>
          <h2 className="heading-lg">Latest Publications</h2>
          <p className="mt-8 text-lg text-muted-foreground sm:text-xl">
            Technical deep-dives, industry perspectives, and the latest engineering advancements
            from the Killis Bird team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {blogPosts.map((post, i) => (
            <PremiumCard key={post.id} delay={0.1 * i} className="group cursor-pointer">
              <article className="card-surface h-full p-2 flex flex-col hover:border-foreground/20 transition-colors">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/50 rounded-[calc(var(--radius)-2px)] mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105 p-8"
                  />
                  <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 bg-background/90 px-3 py-1.5 font-mono text-[0.55rem] tracking-[0.2em] text-foreground border border-border/50 rounded-sm shadow-sm backdrop-blur-md">
                    {post.category}
                  </div>
                </div>

                <div className="flex flex-col flex-1 px-6 pb-8">
                  <div className="font-mono text-[0.60rem] tracking-widest text-muted-foreground mb-4">
                    {post.date}
                  </div>
                  <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-neon transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-base text-muted-foreground line-clamp-3 mb-8 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="link-animated mt-auto self-start flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground">
                    READ ARTICLE
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-neon" />
                  </div>
                </div>
              </article>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}
