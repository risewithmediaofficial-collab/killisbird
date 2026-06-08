import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/KILLIS BIRD - LOGO.png";
import introVideo from "@/assets/intro.mp4";
function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const start = performance.now();
    const duration = 5200;
    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 650);
      }
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, {
    children:
      visible &&
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "preloader",
          initial: { y: 0 },
          exit: { y: "-100%" },
          transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          children: [
            /* @__PURE__ */ jsx("video", {
              className: "preloader__video",
              src: introVideo,
              autoPlay: true,
              muted: true,
              loop: true,
              playsInline: true,
            }),
            /* @__PURE__ */ jsx("div", { className: "preloader__scrim" }),
            /* @__PURE__ */ jsx(motion.div, {
              className: "preloader__boom",
              initial: { scale: 0.12, opacity: 0 },
              animate: {
                scale: progress > 82 ? 1.8 : 0.12,
                opacity: progress > 82 ? [0, 0.95, 0] : 0,
              },
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            }),
            /* @__PURE__ */ jsx("div", {
              className: "preloader__grid",
            }),
            /* @__PURE__ */ jsx(motion.img, {
              src: logoImg,
              alt: "Killis Bird",
              className: "preloader__logo",
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5 },
            }),
            /* @__PURE__ */ jsx("div", {
              className: "preloader__content",
              children: /* @__PURE__ */ jsxs("div", {
                className: "preloader__counter",
                children: [
                  /* @__PURE__ */ jsx("span", {
                    className: "preloader__status",
                    children: "Launching autonomous systems",
                  }),
                  /* @__PURE__ */ jsxs("span", { children: [progress, "%"] }),
                ],
              }),
            }),
          ],
        },
        "preloader",
      ),
  });
}
export { Preloader };
