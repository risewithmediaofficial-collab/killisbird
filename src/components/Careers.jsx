import { motion } from "framer-motion";
import { content } from "../data/content";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SendIcon from "@mui/icons-material/Send";

export default function Careers() {
  const careers = content.careers;

  return (
    <section id="careers" className="section-padding bg-linear-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of a team that's revolutionizing UAV technology
          </p>
        </motion.div>

        {/* Main Career Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="premium-card border-2 border-orange-300">
            {/* Title */}
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{careers.title}</h3>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{careers.description}</p>

            {/* Divider */}
            <div className="h-px bg-linear-to-r from-transparent via-orange-300 to-transparent my-8" />

            {/* Job Details */}
            <div className="space-y-6">
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"
                  >
                    <LocationOnIcon className="text-orange-600 text-2xl" />
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Job Location</h4>
                  <p className="text-gray-600">{careers.location}</p>
                </div>
              </motion.div>

              {/* Qualification */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"
                  >
                    <SchoolIcon className="text-orange-600 text-2xl" />
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Qualification</h4>
                  <p className="text-gray-600">{careers.qualification}</p>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"
                  >
                    <WorkHistoryIcon className="text-orange-600 text-2xl" />
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Experience</h4>
                  <p className="text-gray-600">{careers.experience}</p>
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="h-px bg-linear-to-r from-transparent via-orange-300 to-transparent my-8" />

            {/* Apply Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="premium-button-primary w-full flex items-center justify-center gap-2 text-lg py-4"
            >
              <SendIcon className="w-5 h-5" />
              Apply Now
            </motion.button>

            {/* Additional Info */}
            <p className="text-center text-gray-600 text-sm mt-6">
              Please send your CV to{" "}
              <a
                href="mailto:info@killisbird.com"
                className="text-orange-600 font-semibold hover:text-orange-700"
              >
                info@killisbird.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Work With Us</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💡",
                title: "Innovation",
                description: "Work on cutting-edge technology",
              },
              {
                icon: "🚀",
                title: "Growth",
                description: "Career development opportunities",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "Work with talented engineers",
              },
              {
                icon: "🌟",
                title: "Impact",
                description: "Make a global difference",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="premium-card text-center"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
