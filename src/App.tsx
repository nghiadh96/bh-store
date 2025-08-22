import { useEffect } from "react";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import PricingSection from "./components/sections/PricingSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";
import FloatingButtons from "./components/ui/FloatingButtons";

function App() {
  useEffect(() => {
    // Load AOS immediately
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100,
        disable: "mobile",
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
