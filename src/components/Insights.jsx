import { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollStagger } from "../hooks/useScrollAnimation";
import { content } from "../data/content";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Insights() {
  const containerRef = useScrollStagger({
    stagger: 0.15,
    duration: 0.8,
    delay: 0.2,
    fromDirection: "up",
  });

  return (
    <section id="insights" className="section-padding bg-white">
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
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, innovations, and insights in UAV
            technology
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {content.insights.map((blog) => (
            <motion.div
              key={blog.id}
              className="premium-card group cursor-pointer overflow-hidden h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Image Placeholder with Gradient */}
              <motion.div
                className="relative h-48 bg-gradient-to-br from-orange-500 to-orange-600 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                {/* Icon Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArticleIcon
                    className="text-white opacity-20"
                    style={{ fontSize: "6rem" }}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-3 leading-snug">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Discover insights into the evolving landscape of UAV technology and
                  its applications.
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-4 border-t border-gray-200">
                  <span>5 min read</span>
                  <span>
                    {new Date().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="premium-button-primary w-full flex items-center justify-center gap-2"
                >
                  Read More
                  <ArrowForwardIcon className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="premium-button-secondary px-8 py-3 text-lg"
          >
            View All Insights
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
