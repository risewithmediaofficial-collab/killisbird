import { motion } from "framer-motion";

/**
 * Floating Card Component with hover and animation effects
 */
export default function FloatingCard({
  icon: Icon,
  title,
  description,
  children,
  className = "",
  hoverable = true,
}) {
  return (
    <motion.div
      className={`premium-card group cursor-pointer ${className}`}
      whileHover={hoverable ? { y: -8, boxShadow: "0 20px 40px rgba(0, 164, 255, 0.2)" } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Icon */}
      {Icon && (
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
        >
          <Icon className="text-white text-2xl" />
        </motion.div>
      )}

      {/* Content */}
      {title && <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>}
      {description && <p className="text-gray-600 leading-relaxed">{description}</p>}

      {/* Children */}
      {children}

      {/* Hover Indicator */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileHover={hoverable ? { opacity: 1, scaleX: 1 } : {}}
        className="mt-4 h-1 bg-linear-to-r from-blue-500 to-blue-400 origin-left"
      />
    </motion.div>
  );
}
