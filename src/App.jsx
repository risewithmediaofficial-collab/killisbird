import { Suspense, lazy } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Company from "./components/Company";
import Solutions from "./components/Solutions";
import Products from "./components/Products";
import TechnicalSection from "./components/TechnicalSection";
import TrustedClients from "./components/TrustedClients";
import Careers from "./components/Careers";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./index.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Company/About Section */}
        <Company />

        {/* Solutions Section */}
        <Solutions />

        {/* Products Section */}
        <Products />

        {/* Technical Capabilities */}
        <TechnicalSection />

        {/* Trusted Clients */}
        <TrustedClients />

        {/* Careers */}
        <Careers />

        {/* Call to Action */}
        <CTA />

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
