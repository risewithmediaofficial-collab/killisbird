import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { articles as allArticles } from "@/data/articles";
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const blogPosts = allArticles.slice(0, 5);

function BlogSection() {
  const css = `
    .journal-swiper {
      width: 100%;
      padding-top: 0.5rem;
      padding-bottom: 3.25rem;
      overflow: visible;
    }

    .journal-swiper .swiper-slide {
      width: min(32rem, 88vw);
      height: auto;
      opacity: 0.62;
      transition: opacity 0.35s ease, transform 0.35s ease;
    }

    .journal-swiper .swiper-slide-active,
    .journal-swiper .swiper-slide-prev,
    .journal-swiper .swiper-slide-next {
      opacity: 1;
    }

    .journal-swiper .swiper-pagination {
      bottom: 0 !important;
    }

    .journal-swiper .swiper-pagination-bullet {
      width: 0.5rem;
      height: 0.5rem;
      background: rgba(15, 15, 15, 0.18);
      opacity: 1;
    }

    .journal-swiper .swiper-pagination-bullet-active {
      width: 1.9rem;
      border-radius: 999px;
      background: var(--neon);
    }
  `;

  return (
    <section
      id="blog"
      className="section-y overflow-hidden border-t border-border/50 bg-background"
    >
      <style>{css}</style>

      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-6 text-center"
        >
          <div className="flex items-center gap-2.5 font-mono text-[0.60rem] uppercase tracking-[0.30em] text-neon">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />
            INSIGHTS & ENGINEERING
          </div>
          <motion.h2
            initial={{ color: "rgba(85,85,85,0.72)" }}
            whileInView={{ color: "var(--neon)" }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold uppercase tracking-[0.06em] leading-[1.02]"
          >
            Latest Publications
          </motion.h2>
          <p className="max-w-2xl text-[1.02rem] leading-8 text-muted-foreground sm:text-[1.15rem]">
            Technical deep-dives, engineering notes, and tactical product stories
            presented in a smoother visual journal layout.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView="auto"
            speed={900}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 8,
              depth: 120,
              modifier: 1.8,
              scale: 0.92,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".journal-swiper-next",
              prevEl: ".journal-swiper-prev",
            }}
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            className="journal-swiper"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.slug}>
                <Link
                  to="/blog/$postId"
                  params={{ postId: post.slug }}
                  className="block no-underline"
                >
                  <article className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_50px_rgba(15,15,15,0.08)] transition-transform duration-500 hover:-translate-y-2">
                    <div className="relative aspect-[1.4/0.92] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(245,245,240,0.92))]">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        className={cn(
                          "h-full w-full p-8 transition-transform duration-700 group-hover:scale-[1.05]",
                          post.category === "TECHNOLOGY" && "object-contain",
                          post.category !== "TECHNOLOGY" && "object-contain",
                        )}
                      />
                      <div className="absolute left-5 top-5 rounded-2xl border border-border/60 bg-white/90 px-4 py-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.22em] text-foreground shadow-sm backdrop-blur-md">
                        {post.category}
                      </div>
                    </div>

                    <div className="flex min-h-[20rem] flex-col gap-5 p-8">
                      <div className="self-start rounded-full bg-neon px-4 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white">
                        {post.date}
                      </div>

                      <h3 className="text-[1.9rem] font-semibold leading-[1.15] text-foreground/90 transition-colors duration-300 group-hover:text-neon sm:text-[2.2rem]">
                        {post.title}
                      </h3>

                      <p className="flex-1 text-[1rem] leading-8 text-muted-foreground">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 font-mono text-[0.74rem] font-bold uppercase tracking-[0.22em] text-neon transition-all duration-300 group-hover:gap-3">
                        READ ARTICLES
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>
            ))}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-between px-2 sm:px-6">
              <button
                className="journal-swiper-prev pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-white/92 text-foreground shadow-soft transition-colors hover:border-neon/40 hover:text-neon"
                aria-label="Previous publication"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                className="journal-swiper-next pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-white/92 text-foreground shadow-soft transition-colors hover:border-neon/40 hover:text-neon"
                aria-label="Next publication"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export { BlogSection };
