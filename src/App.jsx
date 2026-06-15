import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "./components/SmoothScroll";
import { useGSAPAnimations } from "./hooks/useGSAP";
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

gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  useGSAPAnimations();

  return (
    <>
      <Navbar />
      <main className="kb-main">
        <Hero />
        <Company />
        <Solutions />
        <Products />
        <TechnicalSection />
        <TrustedClients />
        <Careers />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="kb-page-wrapper">
      <SmoothScroll>
        <AppContent />
      </SmoothScroll>
    </div>
  );
}

export default App;
