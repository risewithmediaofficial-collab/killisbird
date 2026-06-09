import { useRef } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useScrollStagger } from "../hooks/useScrollAnimation";
import { content } from "../data/content";
import TuneIcon from "@mui/icons-material/Tune";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HubIcon from "@mui/icons-material/Hub";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const solutionIcons = {
  1: TuneIcon,
  2: EngineeringIcon,
  3: HubIcon,
  4: VerifiedUserIcon,
  5: FactCheckIcon,
  6: WorkspacePremiumIcon,
};

export default function Solutions() {
  const containerRef = useScrollStagger({
    stagger: 0.12,
    duration: 0.7,
    delay: 0.1,
    fromDirection: "up",
  });

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">UAV Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your specific requirements and industry needs
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {content.solutions.map((solution) => {
            const IconComponent = solutionIcons[solution.id];

            return (
              <Tilt key={solution.id} tiltMaxAngleX={8} tiltMaxAngleY={8}>
                <motion.div
                  className="premium-card h-full cursor-pointer group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg"
                    >
                      <IconComponent className="text-white text-3xl" />
                    </motion.div>

                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-linear-to-r from-orange-400 to-orange-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>

                  {/* Hover Link Indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-orange-600 font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </motion.div>
              </Tilt>
            );
          })}
        </motion.div>

        {/* Additional Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Killis Bird
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Custom Development", icon: "⚙️" },
              { label: "Rapid Deployment", icon: "🚀" },
              { label: "24/7 Support", icon: "🛡️" },
              { label: "Quality Assurance", icon: "✓" },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 rounded-lg bg-linear-to-br from-blue-50 to-transparent hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <p className="font-semibold text-gray-900">{benefit.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
