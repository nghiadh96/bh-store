import { useEffect, useState } from "react";
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
  const [aosLoaded, setAosLoaded] = useState(false);

  useEffect(() => {
    // Load AOS only when user scrolls
    const handleScroll = () => {
      if (!aosLoaded && window.scrollY > 100) {
        import("aos").then((AOS) => {
          AOS.default.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            offset: 100,
            disable: "mobile",
          });
          setAosLoaded(true);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [aosLoaded]);

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
