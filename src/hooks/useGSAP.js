import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimations() {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // --- [slide-up] attribute: slide up + fade in on scroll ---
      gsap.utils.toArray("[slide-up]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      // --- [data-scroll-scale] attribute: image scale zoom on scroll ---
      gsap.utils.toArray("[data-scroll-scale]").forEach((img) => {
        gsap.set(img, { scale: 1.15 });
        gsap.to(img, {
          scale: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      });

      // --- [data-parallax] attribute: vertical parallax movement ---
      const DEFAULT_MOVE = "-10%";
      gsap.utils.toArray("[data-parallax]").forEach((el) => {
        const movement = el.dataset.parallaxMovement || DEFAULT_MOVE;
        gsap.to(el, {
          y: movement,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // --- [data-parallax-slow] attribute: slow parallax for backgrounds ---
      gsap.utils.toArray("[data-parallax-slow]").forEach((el) => {
        gsap.to(el, {
          y: "-6%",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      // --- [data-svg-draw] attribute: SVG path drawing animation ---
      document.querySelectorAll("[data-svg-draw]").forEach((svgEl) => {
        const paths = svgEl.querySelectorAll("path");
        paths.forEach((path) => {
          const len = path.getTotalLength();
          path.style.strokeDasharray = len;
          path.style.strokeDashoffset = len;
          path.style.visibility = "visible";
        });

        const triggerEl = svgEl.closest("[data-draw-section]") || svgEl;
        ScrollTrigger.create({
          trigger: triggerEl,
          start: "top 40%",
          once: true,
          onEnter: () =>
            gsap.to(paths, {
              strokeDashoffset: 0,
              duration: 1.4,
              stagger: 0.12,
              ease: "power2.out",
            }),
        });
      });

      // --- [data-fade-in] attribute: simple fade in ---
      gsap.utils.toArray("[data-fade-in]").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          duration: 1,
          delay: i * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      // --- [data-stagger-children] attribute: stagger children animations ---
      document.querySelectorAll("[data-stagger-children]").forEach((parent) => {
        const children = parent.children;
        gsap.from(children, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: parent,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
