import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { content } from "../data/content";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import CycloneIcon from "@mui/icons-material/Cyclone";

const productIcons = {
  1: DeveloperBoardIcon,
  2: ViewInArIcon,
  3: CycloneIcon,
};

export default function Products() {
  const [expandedProduct, setExpandedProduct] = useState(null);

  return (
    <section id="products" className="section-padding bg-linear-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:pxsx-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium UAV components engineered for performance and reliability
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {content.products.map((product, idx) => {
            const IconComponent = productIcons[product.id];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="premium-card group cursor-pointer"
                onClick={() =>
                  setExpandedProduct(expandedProduct === product.id ? null : product.id)
                }
              >
                {/* Product Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <IconComponent className="text-white text-4xl" />
                </motion.div>

                {/* Product Info */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{product.title}</h3>

                <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="premium-button-secondary w-full flex items-center justify-center gap-2"
                >
                  View Details
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>

                {/* Technical Specs */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedProduct === product.id ? 1 : 0,
                    height: expandedProduct === product.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-gray-200"
                >
                  <p className="text-sm text-gray-600">
                    Premium specifications and advanced features included
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full pb-12"
          >
            {content.products.map((product) => {
              const IconComponent = productIcons[product.id];

              return (
                <SwiperSlide key={product.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="premium-card"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-24 h-24 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto"
                    >
                      <IconComponent className="text-white text-4xl" />
                    </motion.div>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{product.title}</h3>

                    <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="premium-button-primary w-full flex items-center justify-center gap-2"
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Product Comparison Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Product Features</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "High Performance",
                description: "Optimized for speed and precision",
              },
              {
                title: "Easy Integration",
                description: "Compatible with existing systems",
              },
              {
                title: "Proven Reliability",
                description: "Tested and certified components",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
