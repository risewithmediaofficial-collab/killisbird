import { Children, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

function ScrollStackItem({ children, className }) {
  return (
    <div
      className={cn("scroll-stack-card scroll-stack-stable relative w-full", className)}
      style={{ backfaceVisibility: "hidden" }}
    >
      {children}
    </div>
  );
}

function ScrollStack({
  children,
  className,
  itemDistance = 100,
  itemStackDistance = 30,
  stackPosition = "7rem",
  mobileItemDistance = 56,
  mobileItemStackDistance = 12,
  mobileStackPosition = "5.25rem",
  mobileBreakpoint = 768,
}) {
  const isMobile = useIsMobile(mobileBreakpoint);
  const items = useMemo(() => Children.toArray(children), [children]);
  const activeItemDistance = isMobile ? mobileItemDistance : itemDistance;
  const activeItemStackDistance = isMobile ? mobileItemStackDistance : itemStackDistance;
  const activeStackPosition = isMobile ? mobileStackPosition : stackPosition;

  const resolveTop = (index) => {
    if (typeof activeStackPosition === "number") {
      return `${activeStackPosition + activeItemStackDistance * index}px`;
    }

    if (typeof activeStackPosition === "string" && activeStackPosition.includes("rem")) {
      const base = Number.parseFloat(activeStackPosition);
      return `${base + (activeItemStackDistance / 16) * index}rem`;
    }

    if (typeof activeStackPosition === "string" && activeStackPosition.includes("px")) {
      const base = Number.parseFloat(activeStackPosition);
      return `${base + activeItemStackDistance * index}px`;
    }

    return `calc(${activeStackPosition} + ${activeItemStackDistance * index}px)`;
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn("relative mx-auto flex w-full flex-col pt-6", isMobile ? "pb-20" : "pb-28")}
      >
        {items.map((child, index) => (
          <div
            key={index}
            className="sticky"
            style={{
              top: resolveTop(index),
              zIndex: items.length + index,
              marginBottom: index === items.length - 1 ? 0 : `${activeItemDistance}px`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export { ScrollStack, ScrollStackItem };
