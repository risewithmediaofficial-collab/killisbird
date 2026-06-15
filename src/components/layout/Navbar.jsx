import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { content } from "../data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP entrance
  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const navLinks = content.navigation.slice(0, -1);
  const cta = content.navigation[content.navigation.length - 1];

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`kb-navbar${scrolled ? " kb-navbar--scrolled" : ""}`}
      style={{ opacity: 0 }}
    >
      <div className="kb-navbar__inner">
        {/* Logo */}
        <button
          className="kb-navbar__logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="kb-logo-text">KILLIS BIRD</span>
          <span className="kb-logo-dot" />
        </button>

        {/* Desktop Links */}
        <ul className="kb-navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className="kb-navbar__link"
                onClick={() => handleNavClick(link.id)}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className="kb-navbar__cta"
          onClick={() => handleNavClick(cta.id)}
        >
          <span>{cta.name}</span>
          <div className="kb-btn-corners">
            <i /><i /><i /><i />
          </div>
        </button>

        {/* Hamburger */}
        <button
          className={`kb-navbar__hamburger${isOpen ? " is-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="kb-navbar__mobile"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="kb-navbar__mobile-link"
                onClick={() => handleNavClick(link.id)}
              >
                {link.name}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="kb-navbar__mobile-cta"
              onClick={() => handleNavClick(cta.id)}
            >
              {cta.name}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
