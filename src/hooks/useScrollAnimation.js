import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook for scroll-triggered animations
 */
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const {
    trigger = "top center",
    start = "top center",
    end = "bottom center",
    scrub = false,
    markers = false,
    duration = 1,
    delay = 0,
    animation = null,
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    if (animation) {
      // Custom animation
      gsap.to(elementRef.current, {
        scrollTrigger: {
          trigger: elementRef.current,
          start,
          end,
          scrub,
          markers,
        },
        ...animation,
        duration,
        delay,
      });
    } else {
      // Default fade-up animation
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: false,
            markers,
          },
        }
      );
    }

    return () => {
      if (elementRef.current && elementRef.current._gsap) {
        gsap.killTweensOf(elementRef.current);
      }
    };
  }, [trigger, start, end, scrub, markers, duration, delay, animation]);

  return elementRef;
};

/**
 * Hook for staggered scroll animations on children
 */
export const useScrollStagger = (options = {}) => {
  const containerRef = useRef(null);
  const {
    stagger = 0.1,
    duration = 0.8,
    delay = 0,
    fromDirection = "up", // 'up', 'down', 'left', 'right'
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.children;
    if (children.length === 0) return;

    const fromAnimation = {
      up: { y: 50, opacity: 0 },
      down: { y: -50, opacity: 0 },
      left: { x: 50, opacity: 0 },
      right: { x: -50, opacity: 0 },
    };

    gsap.fromTo(
      children,
      fromAnimation[fromDirection],
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
        },
      }
    );

    return () => {
      gsap.killTweensOf(children);
    };
  }, [stagger, duration, delay, fromDirection]);

  return containerRef;
};

/**
 * Hook for mouse parallax effect
 */
export const useMouseParallax = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setMousePosition({ x: x * 20, y: y * 20 });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return { containerRef, offset: mousePosition };
};

/**
 * Hook for scroll parallax effect
 */
export const useScrollParallax = (speed = 0.5) => {
  const elementRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const elementTop = window.scrollY + rect.top;
      const scrollTop = window.scrollY;
      const distance = scrollTop - elementTop;
      setOffset(distance * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { elementRef, offset };
};

/**
 * Hook for counting up numbers
 */
export const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(end * progress));

      if (progress === 1) {
        clearInterval(interval);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [end, duration]);

  return count;
};

/**
 * Hook for detecting if element is in viewport
 */
export const useInViewport = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

/**
 * Hook for window scroll position
 */
export const useWindowScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
};

/**
 * Hook for screen size detection
 */
export const useScreenSize = () => {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};
