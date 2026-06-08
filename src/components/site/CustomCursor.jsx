import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
function CustomCursor() {
  const droneRef = useRef(null);
  useEffect(() => {
    const drone = droneRef.current;
    if (!drone) return;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let prevX = mouseX;
    let rafId;
    let isHovering = false;
    let smoothX = mouseX;
    let smoothY = mouseY;
    let currentTilt = 0;
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onEnter = () => {
      isHovering = true;
    };
    const onLeave = () => {
      isHovering = false;
    };
    const attachListeners = () => {
      document.querySelectorAll("a, button, [role='button'], [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    const animate = () => {
      smoothX += (mouseX - smoothX) * 0.2;
      smoothY += (mouseY - smoothY) * 0.2;
      const velX = mouseX - prevX;
      const targetTilt = Math.max(-14, Math.min(14, velX * 1.8));
      currentTilt += (targetTilt - currentTilt) * 0.1;
      prevX = mouseX;
      const scale = isHovering ? 1.25 : 1;
      drone.style.transform = `translate(${smoothX}px, ${smoothY}px) translate(-13px, -13px) rotate(${currentTilt}deg) scale(${scale})`;
      if (isHovering) drone.classList.add("drone-hover");
      else drone.classList.remove("drone-hover");
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
  return /* @__PURE__ */ jsx("div", {
    ref: droneRef,
    className: "drone-cursor",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsxs("svg", {
      width: "26",
      height: "26",
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxs("defs", {
          children: [
            /* @__PURE__ */ jsxs("linearGradient", {
              id: "cf1",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#444" }),
                /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#1a1a1a" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#080808" }),
              ],
            }),
            /* @__PURE__ */ jsxs("linearGradient", {
              id: "cf2",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", {
                  offset: "0%",
                  stopColor: "#666",
                  stopOpacity: "0.7",
                }),
                /* @__PURE__ */ jsx("stop", {
                  offset: "100%",
                  stopColor: "#333",
                  stopOpacity: "0",
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("radialGradient", {
              id: "mtr",
              cx: "38%",
              cy: "30%",
              r: "65%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#aaa" }),
                /* @__PURE__ */ jsx("stop", { offset: "40%", stopColor: "#555" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#111" }),
              ],
            }),
            /* @__PURE__ */ jsxs("linearGradient", {
              id: "mwall",
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#333" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#0a0a0a" }),
              ],
            }),
            /* @__PURE__ */ jsxs("linearGradient", {
              id: "body",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#1c3a7a" }),
                /* @__PURE__ */ jsx("stop", { offset: "55%", stopColor: "#0a1a50" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#05102a" }),
              ],
            }),
            /* @__PURE__ */ jsxs("radialGradient", {
              id: "bspec",
              cx: "35%",
              cy: "25%",
              r: "55%",
              children: [
                /* @__PURE__ */ jsx("stop", {
                  offset: "0%",
                  stopColor: "#fff",
                  stopOpacity: "0.18",
                }),
                /* @__PURE__ */ jsx("stop", {
                  offset: "100%",
                  stopColor: "#fff",
                  stopOpacity: "0",
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("radialGradient", {
              id: "pdisc",
              cx: "50%",
              cy: "50%",
              r: "50%",
              children: [
                /* @__PURE__ */ jsx("stop", {
                  offset: "0%",
                  stopColor: "#FF6B00",
                  stopOpacity: "0.05",
                }),
                /* @__PURE__ */ jsx("stop", {
                  offset: "55%",
                  stopColor: "#FF6B00",
                  stopOpacity: "0.28",
                }),
                /* @__PURE__ */ jsx("stop", {
                  offset: "85%",
                  stopColor: "#FF6B00",
                  stopOpacity: "0.45",
                }),
                /* @__PURE__ */ jsx("stop", {
                  offset: "100%",
                  stopColor: "#FF6B00",
                  stopOpacity: "0.05",
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("linearGradient", {
              id: "blade",
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF9030" }),
                /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#FF6B00" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#CC4400" }),
              ],
            }),
            /* @__PURE__ */ jsxs("radialGradient", {
              id: "lens",
              cx: "35%",
              cy: "30%",
              r: "60%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4466aa" }),
                /* @__PURE__ */ jsx("stop", { offset: "60%", stopColor: "#111" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#000" }),
              ],
            }),
            /* @__PURE__ */ jsx("filter", {
              id: "dshadow",
              x: "-25%",
              y: "-25%",
              width: "150%",
              height: "150%",
              children: /* @__PURE__ */ jsx("feDropShadow", {
                dx: "0",
                dy: "1",
                stdDeviation: "1.2",
                floodColor: "#000",
                floodOpacity: "0.55",
              }),
            }),
            /* @__PURE__ */ jsx("filter", {
              id: "oglow",
              x: "-30%",
              y: "-30%",
              width: "160%",
              height: "160%",
              children: /* @__PURE__ */ jsx("feDropShadow", {
                dx: "0",
                dy: "0",
                stdDeviation: "1.5",
                floodColor: "#FF6B00",
                floodOpacity: "0.9",
              }),
            }),
            /* @__PURE__ */ jsx("filter", {
              id: "bglow",
              x: "-20%",
              y: "-20%",
              width: "140%",
              height: "140%",
              children: /* @__PURE__ */ jsx("feDropShadow", {
                dx: "0",
                dy: "0",
                stdDeviation: "1.2",
                floodColor: "#2255cc",
                floodOpacity: "0.5",
              }),
            }),
          ],
        }),
        /* @__PURE__ */ jsx("line", {
          x1: "18",
          y1: "17",
          x2: "8",
          y2: "7",
          stroke: "url(#cf1)",
          strokeWidth: "3.2",
          strokeLinecap: "round",
        }),
        /* @__PURE__ */ jsx("line", {
          x1: "18",
          y1: "17",
          x2: "8",
          y2: "7",
          stroke: "url(#cf2)",
          strokeWidth: "1.2",
          strokeLinecap: "round",
        }),
        /* @__PURE__ */ jsx("line", {
          x1: "30",
          y1: "17",
          x2: "40",
          y2: "7",
          stroke: "url(#cf1)",
          strokeWidth: "3.2",
          strokeLinecap: "round",
        }),
        /* @__PURE__ */ jsx("line", {
          x1: "30",
          y1: "17",
          x2: "40",
          y2: "7",
          stroke: "url(#cf2)",
          strokeWidth: "1.2",
          strokeLinecap: "round",
        }),
        /* @__PURE__ */ jsx("line", {
          x1: "18",
          y1: "31",
          x2: "8",
          y2: "41",
          stroke: "url(#cf1)",
          strokeWidth: "3.2",
          strokeLinecap: "round",
        }),
        /* @__PURE__ */ jsx("line", {
          x1: "18",
          y1: "31",
          x2: "8",
          y2: "41",
          stroke: "url(#cf2)",
          strokeWidth: "1.2",
          strokeLinecap: "round",
        }),
        /* @__PURE__ */ jsx("line", {
          x1: "30",
          y1: "31",
          x2: "40",
          y2: "41",
          stroke: "url(#cf1)",
          strokeWidth: "3.2",
          strokeLinecap: "round",
        }),
        /* @__PURE__ */ jsx("line", {
          x1: "30",
          y1: "31",
          x2: "40",
          y2: "41",
          stroke: "url(#cf2)",
          strokeWidth: "1.2",
          strokeLinecap: "round",
        }),
        /* @__PURE__ */ jsx("circle", { cx: "8", cy: "7", r: "5.5", fill: "url(#mwall)" }),
        /* @__PURE__ */ jsx("circle", {
          cx: "8",
          cy: "7",
          r: "5.5",
          fill: "none",
          stroke: "#3a3a3a",
          strokeWidth: "0.6",
        }),
        /* @__PURE__ */ jsx("circle", { cx: "8", cy: "7", r: "4.2", fill: "url(#mtr)" }),
        /* @__PURE__ */ jsx("circle", {
          cx: "6.5",
          cy: "5.5",
          r: "0.9",
          fill: "#ccc",
          opacity: "0.5",
        }),
        /* @__PURE__ */ jsx("circle", { cx: "40", cy: "7", r: "5.5", fill: "url(#mwall)" }),
        /* @__PURE__ */ jsx("circle", {
          cx: "40",
          cy: "7",
          r: "5.5",
          fill: "none",
          stroke: "#3a3a3a",
          strokeWidth: "0.6",
        }),
        /* @__PURE__ */ jsx("circle", { cx: "40", cy: "7", r: "4.2", fill: "url(#mtr)" }),
        /* @__PURE__ */ jsx("circle", {
          cx: "38.5",
          cy: "5.5",
          r: "0.9",
          fill: "#ccc",
          opacity: "0.5",
        }),
        /* @__PURE__ */ jsx("circle", { cx: "8", cy: "41", r: "5.5", fill: "url(#mwall)" }),
        /* @__PURE__ */ jsx("circle", {
          cx: "8",
          cy: "41",
          r: "5.5",
          fill: "none",
          stroke: "#3a3a3a",
          strokeWidth: "0.6",
        }),
        /* @__PURE__ */ jsx("circle", { cx: "8", cy: "41", r: "4.2", fill: "url(#mtr)" }),
        /* @__PURE__ */ jsx("circle", {
          cx: "6.5",
          cy: "39.5",
          r: "0.9",
          fill: "#ccc",
          opacity: "0.5",
        }),
        /* @__PURE__ */ jsx("circle", { cx: "40", cy: "41", r: "5.5", fill: "url(#mwall)" }),
        /* @__PURE__ */ jsx("circle", {
          cx: "40",
          cy: "41",
          r: "5.5",
          fill: "none",
          stroke: "#3a3a3a",
          strokeWidth: "0.6",
        }),
        /* @__PURE__ */ jsx("circle", { cx: "40", cy: "41", r: "4.2", fill: "url(#mtr)" }),
        /* @__PURE__ */ jsx("circle", {
          cx: "38.5",
          cy: "39.5",
          r: "0.9",
          fill: "#ccc",
          opacity: "0.5",
        }),
        /* @__PURE__ */ jsxs("g", {
          className: "prop prop-tl",
          style: { transformOrigin: "8px 7px" },
          children: [
            /* @__PURE__ */ jsx("circle", {
              cx: "8",
              cy: "7",
              r: "5.8",
              fill: "url(#pdisc)",
              filter: "url(#oglow)",
            }),
            /* @__PURE__ */ jsx("ellipse", {
              cx: "8",
              cy: "3.8",
              rx: "1.1",
              ry: "3.4",
              fill: "url(#blade)",
            }),
            /* @__PURE__ */ jsx("ellipse", {
              cx: "8",
              cy: "10.2",
              rx: "1.1",
              ry: "3.4",
              fill: "#B83C00",
              opacity: "0.85",
            }),
            /* @__PURE__ */ jsx("circle", { cx: "8", cy: "7", r: "1.3", fill: "#444" }),
            /* @__PURE__ */ jsx("circle", {
              cx: "7.4",
              cy: "6.4",
              r: "0.45",
              fill: "#aaa",
              opacity: "0.7",
            }),
          ],
        }),
        /* @__PURE__ */ jsxs("g", {
          className: "prop prop-tr",
          style: { transformOrigin: "40px 7px" },
          children: [
            /* @__PURE__ */ jsx("circle", {
              cx: "40",
              cy: "7",
              r: "5.8",
              fill: "url(#pdisc)",
              filter: "url(#oglow)",
            }),
            /* @__PURE__ */ jsx("ellipse", {
              cx: "40",
              cy: "3.8",
              rx: "1.1",
              ry: "3.4",
              fill: "url(#blade)",
            }),
            /* @__PURE__ */ jsx("ellipse", {
              cx: "40",
              cy: "10.2",
              rx: "1.1",
              ry: "3.4",
              fill: "#B83C00",
              opacity: "0.85",
            }),
            /* @__PURE__ */ jsx("circle", { cx: "40", cy: "7", r: "1.3", fill: "#444" }),
            /* @__PURE__ */ jsx("circle", {
              cx: "39.4",
              cy: "6.4",
              r: "0.45",
              fill: "#aaa",
              opacity: "0.7",
            }),
          ],
        }),
        /* @__PURE__ */ jsxs("g", {
          className: "prop prop-bl",
          style: { transformOrigin: "8px 41px" },
          children: [
            /* @__PURE__ */ jsx("circle", {
              cx: "8",
              cy: "41",
              r: "5.8",
              fill: "url(#pdisc)",
              filter: "url(#oglow)",
            }),
            /* @__PURE__ */ jsx("ellipse", {
              cx: "8",
              cy: "37.8",
              rx: "1.1",
              ry: "3.4",
              fill: "url(#blade)",
            }),
            /* @__PURE__ */ jsx("ellipse", {
              cx: "8",
              cy: "44.2",
              rx: "1.1",
              ry: "3.4",
              fill: "#B83C00",
              opacity: "0.85",
            }),
            /* @__PURE__ */ jsx("circle", { cx: "8", cy: "41", r: "1.3", fill: "#444" }),
            /* @__PURE__ */ jsx("circle", {
              cx: "7.4",
              cy: "40.4",
              r: "0.45",
              fill: "#aaa",
              opacity: "0.7",
            }),
          ],
        }),
        /* @__PURE__ */ jsxs("g", {
          className: "prop prop-br",
          style: { transformOrigin: "40px 41px" },
          children: [
            /* @__PURE__ */ jsx("circle", {
              cx: "40",
              cy: "41",
              r: "5.8",
              fill: "url(#pdisc)",
              filter: "url(#oglow)",
            }),
            /* @__PURE__ */ jsx("ellipse", {
              cx: "40",
              cy: "37.8",
              rx: "1.1",
              ry: "3.4",
              fill: "url(#blade)",
            }),
            /* @__PURE__ */ jsx("ellipse", {
              cx: "40",
              cy: "44.2",
              rx: "1.1",
              ry: "3.4",
              fill: "#B83C00",
              opacity: "0.85",
            }),
            /* @__PURE__ */ jsx("circle", { cx: "40", cy: "41", r: "1.3", fill: "#444" }),
            /* @__PURE__ */ jsx("circle", {
              cx: "39.4",
              cy: "40.4",
              r: "0.45",
              fill: "#aaa",
              opacity: "0.7",
            }),
          ],
        }),
        /* @__PURE__ */ jsx("ellipse", {
          cx: "24.5",
          cy: "30",
          rx: "10",
          ry: "4",
          fill: "#000",
          opacity: "0.2",
        }),
        /* @__PURE__ */ jsx("rect", {
          x: "14",
          y: "13",
          width: "20",
          height: "22",
          rx: "3.5",
          fill: "url(#body)",
          filter: "url(#bglow)",
        }),
        /* @__PURE__ */ jsx("rect", {
          x: "14",
          y: "13",
          width: "20",
          height: "22",
          rx: "3.5",
          fill: "url(#bspec)",
        }),
        /* @__PURE__ */ jsx("rect", {
          x: "14",
          y: "13",
          width: "20",
          height: "22",
          rx: "3.5",
          fill: "none",
          stroke: "#2a5acc",
          strokeWidth: "0.55",
          opacity: "0.6",
        }),
        /* @__PURE__ */ jsx("line", {
          x1: "14",
          y1: "24",
          x2: "34",
          y2: "24",
          stroke: "#0a1840",
          strokeWidth: "0.5",
          opacity: "0.55",
        }),
        /* @__PURE__ */ jsx("line", {
          x1: "24",
          y1: "13",
          x2: "24",
          y2: "35",
          stroke: "#0a1840",
          strokeWidth: "0.5",
          opacity: "0.35",
        }),
        /* @__PURE__ */ jsx("rect", {
          x: "18",
          y: "16",
          width: "12",
          height: "3",
          rx: "1.2",
          fill: "#0a1030",
          opacity: "0.7",
        }),
        /* @__PURE__ */ jsx("rect", {
          x: "18.3",
          y: "16.3",
          width: "7.5",
          height: "2.4",
          rx: "0.9",
          fill: "#22cc55",
          opacity: "0.75",
        }),
        /* @__PURE__ */ jsx("circle", {
          cx: "19",
          cy: "21.5",
          r: "1",
          fill: "#FF6B00",
          opacity: "0.95",
        }),
        /* @__PURE__ */ jsx("circle", {
          cx: "29",
          cy: "21.5",
          r: "1",
          fill: "#3388ff",
          opacity: "0.9",
        }),
        /* @__PURE__ */ jsx("circle", {
          cx: "24",
          cy: "31.5",
          r: "3.8",
          fill: "#0a0a18",
          opacity: "0.9",
        }),
        /* @__PURE__ */ jsx("circle", { cx: "24", cy: "31.5", r: "2.8", fill: "#111" }),
        /* @__PURE__ */ jsx("circle", { cx: "24", cy: "31.5", r: "2.2", fill: "url(#lens)" }),
        /* @__PURE__ */ jsx("circle", {
          cx: "23",
          cy: "30.5",
          r: "0.6",
          fill: "#fff",
          opacity: "0.55",
        }),
        /* @__PURE__ */ jsx("circle", {
          cx: "25.2",
          cy: "32.5",
          r: "0.3",
          fill: "#fff",
          opacity: "0.3",
        }),
        /* @__PURE__ */ jsx("circle", {
          cx: "24",
          cy: "14.8",
          r: "0.9",
          fill: "#ff4444",
          opacity: "0.9",
        }),
      ],
    }),
  });
}
export { CustomCursor };
