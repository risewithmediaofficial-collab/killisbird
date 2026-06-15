import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const word1Ref = useRef(null);
  const word2Ref = useRef(null);
  const word3Ref = useRef(null);
  const canvasRef = useRef(null);
  const cloudLeftRef = useRef(null);
  const cloudRightRef = useRef(null);
  const frameRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);

  // Canvas drone animation using frames
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const TOTAL_FRAMES = 211;
    const frames = [];
    let currentFrame = 0;
    let loadedCount = 0;
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const drawFrame = (index) => {
      if (!frames[index]) return;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      const img = frames[index];
      const scale = Math.min(
        canvas.offsetWidth / img.naturalWidth,
        canvas.offsetHeight / img.naturalHeight
      );
      const x = (canvas.offsetWidth - img.naturalWidth * scale) / 2;
      const y = (canvas.offsetHeight - img.naturalHeight * scale) / 2;
      ctx.drawImage(
        img,
        x,
        y,
        img.naturalWidth * scale,
        img.naturalHeight * scale
      );
    };

    // Preload first frame immediately, then rest
    const loadFrame = (i) => {
      const img = new Image();
      img.onload = () => {
        frames[i] = img;
        loadedCount++;
        if (i === 0) drawFrame(0);
      };
      img.src = `/frames/frame_${String(i + 1).padStart(4, "0")}.png`;
      return img;
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) loadFrame(i);

    // Scroll-driven frame scrub
    const frameState = { frame: 0 };
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=200%",
      scrub: 0.5,
      onUpdate: (self) => {
        const index = Math.round(self.progress * (TOTAL_FRAMES - 1));
        if (frames[index]) {
          frameState.frame = index;
          drawFrame(index);
        }
      },
    });

    // Idle float animation when not scrolling
    let floatTween = gsap.to(frameState, {
      frame: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      onUpdate: () => drawFrame(Math.round(frameState.frame)),
    });

    return () => {
      window.removeEventListener("resize", resize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      floatTween.kill();
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  // Hero entrance animations
  useEffect(() => {
    const words = [word1Ref.current, word2Ref.current, word3Ref.current].filter(Boolean);

    // Initial states
    words.forEach((word, i) => {
      const dir = i % 2 === 0 ? -120 : 120;
      gsap.set(word, { x: dir, scale: 0.82, opacity: 0, filter: "blur(6px)" });
    });
    gsap.set(ctaRef.current, { opacity: 0, y: 30 });
    gsap.set(badgeRef.current, { opacity: 0, scale: 0.8 });

    const tl = gsap.timeline({ delay: 0.3 });

    // Words entrance
    tl.to(words, {
      x: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
    });

    // CTA entrance
    tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5");

    // Stats badge
    tl.to(badgeRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3");

    // Cloud parallax on scroll
    if (cloudLeftRef.current) {
      gsap.fromTo(
        cloudLeftRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power2.out", delay: 0.5 }
      );
      gsap.to(cloudLeftRef.current, {
        x: 80,
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (cloudRightRef.current) {
      gsap.fromTo(
        cloudRightRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power2.out", delay: 0.7 }
      );
      gsap.to(cloudRightRef.current, {
        x: -80,
        y: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => tl.kill();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="home" className="kb-hero">
      {/* Full-bleed canvas for drone frames */}
      <div className="kb-hero__canvas-wrap">
        <canvas ref={canvasRef} className="kb-hero__canvas" />
        {/* Gradient overlay — bottom fade to white */}
        <div className="kb-hero__canvas-fade" />
      </div>

      {/* Background gradient blobs */}
      <div className="kb-hero__bg-blob kb-hero__bg-blob--orange" data-parallax data-parallax-movement="-8%" />
      <div className="kb-hero__bg-blob kb-hero__bg-blob--navy" data-parallax data-parallax-movement="-5%" />

      {/* Cloud layers */}
      <div ref={cloudLeftRef} className="kb-hero__cloud kb-hero__cloud--left">
        <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="kb-hero__cloud-svg">
          <ellipse cx="400" cy="150" rx="400" ry="150" fill="rgba(255,255,255,0.07)" />
          <ellipse cx="300" cy="140" rx="280" ry="120" fill="rgba(255,255,255,0.05)" />
          <ellipse cx="520" cy="160" rx="220" ry="100" fill="rgba(255,255,255,0.04)" />
        </svg>
      </div>
      <div ref={cloudRightRef} className="kb-hero__cloud kb-hero__cloud--right">
        <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="kb-hero__cloud-svg">
          <ellipse cx="400" cy="150" rx="400" ry="150" fill="rgba(255,255,255,0.07)" />
          <ellipse cx="500" cy="140" rx="280" ry="120" fill="rgba(255,255,255,0.05)" />
          <ellipse cx="280" cy="160" rx="220" ry="100" fill="rgba(255,255,255,0.04)" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="kb-hero__content">
        <div className="kb-hero__title-wrap" ref={titleRef}>
          <h1 className="kb-hero__title">
            <span ref={word1Ref} className="kb-hero__word kb-hero__word--left">
              Elevating
            </span>
            <span ref={word2Ref} className="kb-hero__word kb-hero__word--right">
              UAV
            </span>
            <span ref={word3Ref} className="kb-hero__word kb-hero__word--center">
              Technology
            </span>
          </h1>
        </div>

        {/* Subtitle line */}
        <p className="kb-hero__sub" ref={ctaRef}>
          India's leading indigenous UAV component manufacturer — delivering
          <br className="kb-hero__sub-br" />
          precision engineering for next-generation unmanned aerial systems.
        </p>

        {/* CTA Buttons */}
        <div className="kb-hero__cta-row" ref={ctaRef}>
          <button
            className="kb-btn kb-btn--primary"
            onClick={() => scrollToSection("solutions")}
            id="hero-explore-btn"
          >
            <span>EXPLORE UAV SOLUTIONS</span>
            <div className="kb-btn__corners">
              <i /><i /><i /><i />
            </div>
          </button>
          <button
            className="kb-btn kb-btn--ghost"
            onClick={() => scrollToSection("quote")}
            id="hero-quote-btn"
          >
            <span>GET A QUOTE</span>
          </button>
        </div>

        {/* Stats row */}
        <div className="kb-hero__stats" ref={badgeRef}>
          {[
            { value: "5+", label: "Years of Innovation" },
            { value: "1000+", label: "Components Delivered" },
            { value: "500+", label: "Active Customers" },
          ].map((s) => (
            <div key={s.label} className="kb-hero__stat">
              <span className="kb-hero__stat-value">{s.value}</span>
              <span className="kb-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="kb-hero__scroll-indicator">
        <span className="kb-hero__scroll-text">SCROLL</span>
        <div className="kb-hero__scroll-line">
          <div className="kb-hero__scroll-dot" />
        </div>
      </div>
    </section>
  );
}
