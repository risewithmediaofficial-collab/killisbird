import { motion } from "framer-motion";
import { content } from "../data/content";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";

export default function Footer() {
  const footer = content.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background-dark opacity-20" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Killis Bird</h3>
            <p className="text-orange-200 text-sm leading-relaxed">{footer.about}</p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <LinkIcon className="text-orange-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link, idx) => (
                <motion.li key={idx} whileHover={{ x: 5 }} className="transition-colors">
                  <a
                    href="#"
                    className="text-orange-200 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-orange-400">→</span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                  className="text-orange-200 hover:text-white transition-colors flex items-start gap-3"
                >
                  <PhoneIcon className="text-orange-400 mt-1" style={{ fontSize: "1.25rem" }} />
                  <span>{footer.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="text-orange-200 hover:text-white transition-colors flex items-start gap-3"
                >
                  <EmailIcon className="text-orange-400 mt-1" style={{ fontSize: "1.25rem" }} />
                  <span>{footer.contact.email}</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Address Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <LocationOnIcon className="text-orange-400" />
              Address
            </h4>
            <address className="text-orange-200 text-sm not-italic leading-relaxed">
              {footer.address.line1}
              <br />
              {footer.address.line2}
              <br />
              {footer.address.line3}
              <br />
              {footer.address.line4}
            </address>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="h-px bg-linear-to-r from-transparent via-orange-500 to-transparent my-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <div className="text-orange-200 text-sm text-center md:text-left">
            <p>{footer.copyright}</p>
            <p className="mt-2">{footer.developer}</p>
          </div>

          {/* Social/Additional Links */}
          <div className="flex gap-4">
            {["Privacy Policy", "Terms & Conditions", "Contact Us"].map((link, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ color: "#f97316" }}
                className="text-orange-200 text-sm hover:text-orange-400 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg transition-all"
      >
        <span className="text-2xl">↑</span>
      </motion.button>
    </footer>
  );
}
