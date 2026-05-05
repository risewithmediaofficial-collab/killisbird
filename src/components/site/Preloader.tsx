import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/KILLIS BIRD - LOGO.png";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 400);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.img
            src={logoImg}
            alt="Killis Bird"
            className="preloader__logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="preloader__counter">
            <span>{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
