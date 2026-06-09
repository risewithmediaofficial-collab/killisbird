import { useEffect, useMemo, useState } from "react";
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
  mobileBreakpoint = 768,
}) {
  const isMobile = useIsMobile(mobileBreakpoint);
  const items = useMemo(() => (Array.isArray(children) ? children : [children]), [children]);

  const resolveTop = (index) => {
    if (typeof stackPosition === "number") {
      return `${stackPosition + itemStackDistance * index}px`;
    }

    if (typeof stackPosition === "string" && stackPosition.includes("rem")) {
      const base = Number.parseFloat(stackPosition);
      return `${base + itemStackDistance / 16 * index}rem`;
    }

    if (typeof stackPosition === "string" && stackPosition.includes("px")) {
      const base = Number.parseFloat(stackPosition);
      return `${base + itemStackDistance * index}px`;
    }

    return `calc(${stackPosition} + ${itemStackDistance * index}px)`;
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div className={cn("relative mx-auto flex w-full flex-col", isMobile ? "gap-6" : "pb-28 pt-8")}>
        {items.map((child, index) => (
          <div
            key={index}
            className={cn("relative", !isMobile && "sticky")}
            style={{
              top: isMobile ? undefined : resolveTop(index),
              zIndex: items.length + index,
              marginBottom: isMobile || index === items.length - 1 ? 0 : `${itemDistance}px`,
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
