import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { content } from "../data/content";
import DroneScene from "./DroneScene";
import { useScreenSize } from "../hooks/useScrollAnimation";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

export default function Hero() {
  const textRef = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    setIsMobile(screenSize.width < 768);
  }, [screenSize.width]);

  // GSAP text animation
  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current.querySelectorAll(".hero-text-line"),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  const intro = content.company.intro;

  return (
    <section id="home" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            {/* Main Title */}
            <motion.h1
              className="hero-text-line text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {intro.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              className="hero-text-line text-2xl md:text-3xl font-semibold gradient-text leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {intro.subtitle}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="hero-text-line text-lg text-gray-600 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {intro.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-text-line flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("solutions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="premium-button-primary flex items-center justify-center gap-2"
              >
                <TravelExploreIcon className="w-5 h-5" />
                Explore UAV Solutions
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("quote")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="premium-button-secondary flex items-center justify-center gap-2"
              >
                <RequestQuoteIcon className="w-5 h-5" />
                Get Quote
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Drone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative h-96 md:h-full min-h-96"
          >
            {/* Background Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-400/20 via-transparent to-transparent rounded-full blur-3xl" />

            {/* Grid Background */}
            <div className="absolute inset-0 grid-background-dark rounded-lg opacity-30" />

            {/* 3D Scene */}
            <div className="relative h-full rounded-lg overflow-hidden">
              <DroneScene isMobile={isMobile} />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md rounded-full p-4 shadow-lg"
            >
              <div className="text-center">
                <p className="text-xs font-semibold text-blue-600">Premium Quality</p>
                <p className="text-2xl font-bold text-gray-900">100%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-12"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [4, 8, 4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-blue-600 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
