import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

function HeroDroneCardsCarousel({
  slides,
  className,
  autoplay = true,
  loop = true,
}) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!api) return undefined;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    handleSelect();
    api.on("select", handleSelect);
    api.on("reInit", handleSelect);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || !autoplay || isMobile) return undefined;

    const id = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else if (loop) {
        api.scrollTo(0);
      }
    }, 2800);

    return () => window.clearInterval(id);
  }, [api, autoplay, loop, isMobile]);

  return (
    <Carousel
      setApi={setApi}
      className={cn("w-full", className)}
      opts={{
        align: "start",
        loop,
        slidesToScroll: 1,
      }}
    >
      <CarouselContent className="-ml-3 h-[22rem] sm:h-[26rem]">
        {slides.map((slide, index) => (
          <CarouselItem
            key={slide.title}
            className="basis-[80%] pl-3 sm:basis-[62%] lg:basis-[56%]"
          >
            <div className="relative flex h-full items-center justify-center">
              <motion.div
                initial={false}
                animate={{
                  clipPath:
                    isMobile
                      ? "inset(0% 0% 0% 0% round 1.75rem)"
                      : current === index
                      ? "inset(0% 0% 0% 0% round 1.75rem)"
                      : "inset(11% 0% 11% 0% round 1.75rem)",
                  scale: isMobile ? 1 : current === index ? 1 : 0.94,
                  opacity: isMobile ? 1 : current === index ? 1 : 0.72,
                }}
                transition={{
                  duration: isMobile ? 0.28 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full overflow-hidden rounded-[1.75rem] border border-border/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,245,240,0.92))] p-5 shadow-[0_24px_50px_rgba(15,15,15,0.08)]"
              >
                <div className="flex h-full flex-col rounded-[1.35rem] bg-white/78 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-neon">
                        {slide.kicker}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold uppercase tracking-[0.08em] text-foreground sm:text-xl">
                        {slide.title}
                      </h3>
                    </div>
                    <div className="rounded-full border border-border/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="mt-5 flex min-h-0 flex-1 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(180deg,rgba(245,245,240,0.92),rgba(255,255,255,0.78))] px-4 py-5">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      draggable={false}
                      className="h-full max-h-[12.5rem] w-full object-contain drop-shadow-[0_28px_44px_rgba(15,15,15,0.12)] sm:max-h-[15rem]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                current === index ? "w-8 bg-foreground" : "w-2.5 bg-foreground/15",
              )}
              aria-label={`Go to ${slide.title}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Previous slide"
            onClick={() => api?.scrollPrev()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-white/88 text-foreground transition-colors hover:border-neon/40 hover:text-neon"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => api?.scrollNext()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-white/88 text-foreground transition-colors hover:border-neon/40 hover:text-neon"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="mt-5 min-h-14">
        <AnimatePresence mode="wait">
          <motion.p
            key={slides[current]?.title}
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
            transition={{ duration: 0.35 }}
            className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-[15px]"
          >
            {slides[current]?.description}
          </motion.p>
        </AnimatePresence>
      </div>
    </Carousel>
  );
}

export { HeroDroneCardsCarousel };
