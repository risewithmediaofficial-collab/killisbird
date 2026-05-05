import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  tilt?: boolean;
  role?: string;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export function PremiumCard({ 
  children, 
  className, 
  delay = 0, 
  tilt = true,
  role,
  tabIndex,
  onKeyDown
}: PremiumCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    mouseX.set(localX);
    mouseY.set(localY);

    if (tilt) {
      const xPct = localX / width - 0.5;
      const yPct = localY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    if (!tilt) return;
    x.set(0);
    y.set(0);
  }

  // 6deg max rotation for subtle premium feel, scale 1.03 on hover
  const transform = useMotionTemplate`perspective(1200px) rotateX(${useMotionTemplate`calc(${mouseYSpring} * -6deg)`}) rotateY(${useMotionTemplate`calc(${mouseXSpring} * 6deg)`}) scale(${isHovered ? 1.03 : 1})`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role={role}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      style={{ 
        transform: tilt || isHovered ? transform : undefined, 
        transformStyle: "preserve-3d",
        zIndex: isHovered ? 45 : 1
      }}
      className={cn("will-change-transform relative group rounded-[20px] transition-shadow duration-500", className)}
    >
      <div
        style={{ transform: tilt ? "translateZ(20px)" : "none", transformStyle: "preserve-3d" }}
        className="h-full w-full transition-transform duration-500 ease-out"
      >
        {/* Mouse follow inner glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-50 rounded-[20px] transition-opacity duration-500 ease-out"
          style={{
            opacity: isHovered ? 1 : 0,
            background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.08), transparent 50%)`,
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}
