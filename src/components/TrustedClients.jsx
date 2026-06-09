import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { trustedClients } from "../data/content";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HandshakeIcon from "@mui/icons-material/Handshake";

export default function TrustedClients() {
  return (
    <section className="section-padding bg-linear-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HandshakeIcon className="text-blue-600" style={{ fontSize: "2rem" }} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Trusted Clients</h2>
            <HandshakeIcon className="text-blue-600" style={{ fontSize: "2rem" }} />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partnering with industry leaders and innovators across the globe
          </p>
        </motion.div>

        {/* Clients Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full pb-4"
          >
            {trustedClients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="premium-card flex flex-col items-center justify-center min-h-48 cursor-pointer group"
                >
                  {/* Placeholder Logo */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg glow-blue"
                  >
                    <BusinessCenterIcon className="text-white text-5xl" />
                  </motion.div>

                  {/* Client Name */}
                  <h3 className="text-lg font-semibold text-gray-900 text-center">{client}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 text-center mt-3">
                    Leading innovator in technology solutions
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-blue-600">
                        ★
                      </span>
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Marquee Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="relative overflow-hidden bg-linear-to-r from-orange-600 to-orange-400 rounded-lg py-8 px-6">
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex whitespace-nowrap text-white font-semibold text-lg"
            >
              <span className="mr-16">Trusted by 500+ companies worldwide</span>
              <span className="mr-16">Delivering excellence since 2019</span>
              <span className="mr-16">1000+ products deployed globally</span>
              <span className="mr-16">Trusted by 500+ companies worldwide</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { icon: "📊", label: "500+", value: "Clients" },
            { icon: "📦", label: "1000+", value: "Products" },
            { icon: "🌍", label: "50+", value: "Countries" },
            { icon: "⭐", label: "4.9/5", value: "Rating" },
          ].map((indicator, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="premium-card text-center"
            >
              <div className="text-3xl mb-2">{indicator.icon}</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">{indicator.label}</div>
              <div className="text-gray-600 text-sm">{indicator.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
