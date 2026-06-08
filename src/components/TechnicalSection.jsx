import { motion } from "framer-motion";
import { useScrollStagger } from "../hooks/useScrollAnimation";
import { content } from "../data/content";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import MemoryIcon from "@mui/icons-material/Memory";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AirIcon from "@mui/icons-material/Air";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import HubIcon from "@mui/icons-material/Hub";

const techCapabilityIcons = {
  "UAV Components": SettingsInputComponentIcon,
  "Embedded Systems": DeveloperBoardIcon,
  "Flight Controllers": MemoryIcon,
  "Drone Frames": ViewInArIcon,
  "Propulsion Support": AirIcon,
  "Custom Development": BuildCircleIcon,
  "Swarm Drone Technology": HubIcon,
};

export default function TechnicalSection() {
  const containerRef = useScrollStagger({
    stagger: 0.1,
    duration: 0.7,
    delay: 0.1,
    fromDirection: "up",
  });

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background-dark opacity-20" />

      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500 opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Capabilities
          </h2>
          <p className="text-xl text-orange-200 max-w-2xl mx-auto">
            Advanced UAV technology stack with integrated solutions for maximum
            performance
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {content.technicalCapabilities.map((capability, idx) => {
            const IconComponent = techCapabilityIcons[capability] ?? BuildCircleIcon;

            return (
              <motion.div
                key={idx}
                className="premium-card-dark group cursor-pointer"
                whileHover={{ y: -8, boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="mb-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg glow-blue">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                </motion.div>

                {/* Text */}
                <h4 className="text-xl font-semibold text-white mb-2">
                  {capability}
                </h4>
                <p className="text-orange-200 text-sm">
                  Cutting-edge technology for optimal performance
                </p>

                {/* Hover Indicator */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileHover={{ opacity: 1, scaleX: 1 }}
                  className="mt-4 h-1 bg-gradient-to-r from-orange-500 to-orange-400"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent my-16"
        />

        {/* Advanced Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Real-time Processing",
              description: "Ultra-fast flight control with millisecond response times",
              icon: "⚡",
            },
            {
              title: "Sensor Fusion",
              description: "Integrated multiple sensors for precise aerial navigation",
              icon: "📡",
            },
            {
              title: "Scalable Architecture",
              description: "Modular design supporting swarm operations and scalability",
              icon: "🔗",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-orange-200 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-slate-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Processing Power", value: "1000+ MHz" },
              { label: "Memory", value: "512+ MB" },
              { label: "Sensors", value: "20+ Types" },
              { label: "Flight Time", value: "4+ Hours" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-orange-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
