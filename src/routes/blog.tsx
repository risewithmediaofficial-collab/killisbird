import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/Section";
import { PremiumCard } from "@/components/site/PremiumCard";
import img1 from "@/assets/drone-parts/FLIGHT-CONTROL-CARD1.png";
import img2 from "@/assets/drone-parts/Swarm – GCS1.png";
import img3 from "@/assets/drone-parts/FRAMES1.png";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Killis Bird Insights" },
      {
        name: "description",
        content: "Technical deep-dives and engineering advancements from the Killis Bird team.",
      },
    ],
  }),
  component: BlogPage,
});

const blogPosts = [
  {
    id: "swarm-intelligence",
    title: "Advancements in Autonomous Swarm Intelligence",
    date: "Oct 12, 2026",
    category: "TECHNOLOGY",
    image: img2,
    excerpt:
      "How distributed AI is revolutionizing multi-agent drone coordination in complex environments.",
  },
  {
    id: "flight-control",
    title: "Next-Gen Flight Control Systems: STM32H743",
    date: "Sep 28, 2026",
    category: "HARDWARE",
    image: img1,
    excerpt:
      "Exploring the computational power behind real-time stabilization and rapid decision-making.",
  },
  {
    id: "aerospace-frames",
    title: "Aerospace Grade Frames: Carbon Fiber vs Titanium",
    date: "Sep 15, 2026",
    category: "ENGINEERING",
    image: img3,
    excerpt: "A deep dive into material science for high-stress payload delivery operations.",
  },
  {
    id: "fpv-future-bharat",
    title: "The Future of Tactical Warfare for Bharat",
    date: "Sep 13, 2025",
    category: "TACTICAL",
    image: img2,
    excerpt:
      "FPV Striker Drones — kamikaze-style UAVs designed for precision strikes. Combat-proven during Operation Sindoor with the Indian Army.",
  },
  {
    id: "anti-drone-jammers",
    title: "How Anti-Drone Jammers Are Redefining Modern Warfare",
    date: "Sep 10, 2025",
    category: "DEFENSE",
    image: img1,
    excerpt:
      "From cross-border smuggling to terror threats — non-kinetic, portable, cost-effective electronic warfare systems are India's answer.",
  },
];

function BlogPage() {
  return (
    <>
      <PageHero
        kicker="Insights & Engineering"
        title={
          <>
            Latest publications from the <span className="text-neon">frontier</span>.
          </>
        }
        subtitle="Technical deep-dives, industry perspectives, and the latest engineering advancements from the Killis Bird team."
      />

      <section className="container-edge space-y-8 pb-20 md:space-y-12 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {blogPosts.map((post, i) => (
            <PremiumCard key={post.id} delay={0.1 * (i % 3)} className="group cursor-pointer">
              <article className="card-surface h-full p-1.5 flex flex-col hover:border-foreground/20 transition-colors">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/50 rounded-sm mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105 p-6"
                  />
                  <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md px-2.5 py-1 font-mono text-[0.55rem] tracking-[0.2em] text-foreground border border-border/50">
                    {post.category}
                  </div>
                </div>

                <div className="flex flex-col flex-1 px-4 pb-6">
                  <div className="font-mono text-[0.60rem] tracking-widest text-muted-foreground mb-3">
                    {post.date}
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-neon transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground">
                    READ ARTICLE
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-neon" />
                  </div>
                </div>
              </article>
            </PremiumCard>
          ))}
        </div>

        <div className="text-center pt-16 border-t border-border/50 mt-12">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-neon hover:underline"
          >
            Request classified briefing <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
