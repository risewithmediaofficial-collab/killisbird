import { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollStagger } from "../hooks/useScrollAnimation";
import { content } from "../data/content";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import VerifiedIcon from "@mui/icons-material/Verified";
import EngineeringIcon from "@mui/icons-material/Engineering";

const iconMap = {
  innovation: TipsAndUpdatesIcon,
  performance: VerifiedIcon,
  engineering: EngineeringIcon,
};

export default function Company() {
  const containerRef = useScrollStagger({
    stagger: 0.15,
    duration: 0.8,
    delay: 0.2,
    fromDirection: "up",
  });

  return (
    <section id="company" className="section-padding bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Killis Bird
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pioneering innovative UAV solutions with a commitment to excellence and
            indigenous technology
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Redefining Unmanned Aerial Systems
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Killis Bird, we are redefining what is possible in unmanned aerial
              systems through innovative, indigenous solutions designed to elevate
              performance and reliability.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of expert engineers combines cutting-edge technology with
              deep industry knowledge to deliver solutions that exceed expectations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { label: "Years Active", value: "5+" },
                { label: "Products", value: "1000+" },
                { label: "Customers", value: "500+" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            ref={containerRef}
            className="space-y-4"
          >
            {content.features.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <motion.div
                  key={feature.id}
                  className="premium-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"
                      >
                        <IconComponent className="text-orange-600 text-2xl" />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Delivering excellence through innovation and precision
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent my-16" />

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              title: "Advanced Technology",
              description:
                "Leveraging latest advancements in flight control systems and sensor integration",
            },
            {
              title: "Expert Support",
              description:
                "Dedicated technical support team ready to assist with implementation and integration",
            },
            {
              title: "Reliable Products",
              description:
                "Quality-assured components with comprehensive warranty and after-sales service",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="premium-card text-center"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {card.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
