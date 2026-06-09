import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { content } from "../data/content";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function CTA() {
  const ctaData = content.cta;
  const containerRef = useRef();

  // Parallax background animation
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!containerRef.current) return;
      const offset = window.scrollY;
      gsap.to(containerRef.current, {
        y: offset * 0.3,
        duration: 0.3,
      });
    });
  }, []);

  return (
    <section className="section-padding bg-linear-to-b from-white via-slate-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{ctaData.title}</h2>

          {/* Description */}
          <p className="text-xl text-orange-200 mb-12 leading-relaxed">{ctaData.description}</p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="premium-button-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              <RequestQuoteIcon className="w-6 h-6" />
              Request Quote
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 flex items-center justify-center gap-2"
            >
              <SupportAgentIcon className="w-6 h-6" />
              Contact Support
            </motion.button>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20"
          >
            <p className="text-orange-200 mb-4">Have questions? Get in touch</p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <a
                href="tel:+917200743683"
                className="text-white font-semibold hover:text-orange-400 transition-colors flex items-center justify-center gap-2"
              >
                <span>📞</span> +91 72007 43683
              </a>
              <a
                href="mailto:info@killisbird.com"
                className="text-white font-semibold hover:text-orange-400 transition-colors flex items-center justify-center gap-2"
              >
                <span>✉️</span> info@killisbird.com
              </a>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 text-4xl opacity-20"
          >
            🚀
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-20 right-10 text-4xl opacity-20"
          >
            💡
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 w-full h-24 text-slate-900"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
