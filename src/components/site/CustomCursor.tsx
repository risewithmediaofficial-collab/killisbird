import { useEffect, useRef } from "react";

export function CustomCursor() {
  const arrowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const arrow = arrowRef.current;
    const trail = trailRef.current;
    if (!arrow || !trail) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    // Trail lags further behind
    let trailX = mouseX;
    let trailY = mouseY;
    // Previous position to compute direction angle
    let prevX = mouseX;
    let prevY = mouseY;
    let rafId: number;
    let hovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onEnter = () => { hovering = true; };
    const onLeave = () => { hovering = false; };

    const attachListeners = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      // Arrow follows mouse instantly
      arrow.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      arrow.style.opacity = hovering ? "0.7" : "1";

      // Trail lags behind with slower lerp for streaking effect
      trailX += (mouseX - trailX) * 0.08;
      trailY += (mouseY - trailY) * 0.08;

      // Compute angle from trail to cursor (direction of motion)
      const dx = mouseX - trailX;
      const dy = mouseY - trailY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Compute distance for streak length
      const dist = Math.sqrt(dx * dx + dy * dy);
      const streakLength = Math.min(60, Math.max(12, dist * 1.2));

      // Position trail at midpoint between cursor and lag point
      const midX = (mouseX + trailX) / 2;
      const midY = (mouseY + trailY) / 2;

      trail.style.transform = `translate(${midX}px, ${midY}px) translate(-50%, -50%) rotate(${angle}deg)`;
      trail.style.width = `${streakLength}px`;
      trail.style.opacity = dist > 3 ? "1" : "0";

      prevX = mouseX;
      prevY = mouseY;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Arrow cursor — SVG triangle */}
      <div
        ref={arrowRef}
        className="cursor-arrow"
        aria-hidden="true"
      >
        <svg
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          {/* Main arrow body — navy/dark */}
          <path
            d="M2 2L20 12L11 14L7 24L2 2Z"
            fill="#1B2D6B"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Orange accent on tip */}
          <circle cx="2.5" cy="2.5" r="2.5" fill="#E8450A" />
        </svg>
      </div>

      {/* Orange streak trail */}
      <div
        ref={trailRef}
        className="cursor-trail"
        aria-hidden="true"
      />
    </>
  );
}
