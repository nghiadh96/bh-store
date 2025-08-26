import { useEffect } from "react";
import { AppProvider } from "./contexts/AppContext";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import PricingSection from "./components/sections/PricingSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";
import FloatingButtons from "./components/ui/FloatingButtons";

// Declare AOS as global
declare global {
  interface Window {
    AOS: {
      init: (options?: {
        duration?: number;
        easing?: string;
        once?: boolean;
        offset?: number;
        disable?: boolean;
        throttleDelay?: number;
        debounceDelay?: number;
      }) => void;
    };
  }
}

function App() {
  useEffect(() => {
    // Initialize AOS after component mounts
    if (typeof window !== "undefined" && window.AOS) {
      // Check if device is mobile
      const isMobile = window.innerWidth < 768;

      window.AOS.init({
        duration: isMobile ? 600 : 1000, // Faster on mobile
        easing: "ease-out", // Simpler easing for mobile
        once: true,
        offset: isMobile ? 50 : 100, // Smaller offset on mobile
        disable: isMobile ? false : false, // Keep enabled on mobile but with simpler settings
        // Mobile optimizations
        throttleDelay: isMobile ? 50 : 99, // Faster throttle on mobile
        debounceDelay: isMobile ? 50 : 50, // Faster debounce on mobile
      });
    }
  }, []);

  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
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
    </AppProvider>
  );
}

export default App;
