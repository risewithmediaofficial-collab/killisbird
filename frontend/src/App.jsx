// frontend/src/App.jsx
import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Company } from "./components/Company";
import { Solutions } from "./components/Solutions";
import { Products } from "./components/Products";
import { TechnicalSection } from "./components/TechnicalSection";
import { TrustedClients } from "./components/TrustedClients";
import { Insights } from "./components/Insights";
import { Careers } from "./components/Careers";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Company />
      <Solutions />
      <Products />
      <TechnicalSection />
      <TrustedClients />
      <Insights />
      <Careers />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
