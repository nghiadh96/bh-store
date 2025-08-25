import { Button } from "../ui/button";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import logo from "../../assets/images/bhstore.png";
import { smoothScrollTo } from "../../utils/scroll";
import { useState, useEffect } from "react";
import { useTranslation } from "../../translations";
import LanguageThemeSwitcher from "../ui/LanguageThemeSwitcher";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const t = useTranslation();
  // const [isScrolling, setIsScrolling] = useState(false); // Tạm thời comment out

  // Theo dõi scroll để cập nhật active section
  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const sections = [
          "home",
          "about",
          "services",
          "portfolio",
          "pricing",
          "contact",
        ];
        const scrollPosition = window.scrollY + 150; // Tăng offset để tính toán chính xác hơn

        // Tìm section hiện tại dựa trên vị trí scroll
        let currentSection = "home";

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;

            if (scrollPosition >= offsetTop) {
              currentSection = section;
              break;
            }
          }
        }

        if (currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      }, 50); // Debounce 50ms
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Xử lý khi URL thay đổi (back/forward button hoặc nhập URL trực tiếp)
  // useEffect(() => {
  //   const handleHashChange = () => {
  //     const hash = window.location.hash.replace("#", "");
  //     if (hash && hash !== activeSection) {
  //       setIsScrolling(true);
  //       setActiveSection(hash);
  //       // Scroll đến section tương ứng
  //       setTimeout(() => {
  //         smoothScrollTo(hash);
  //         setIsScrolling(false);
  //       }, 100);
  //     } else if (!hash) {
  //       setIsScrolling(true);
  //       setActiveSection("home");
  //       setTimeout(() => {
  //         smoothScrollTo("home");
  //         setIsScrolling(false);
  //       }, 100);
  //     }
  //   };

  //   // Xử lý khi load trang lần đầu
  //   if (window.location.hash) {
  //     const hash = window.location.hash.replace("#", "");
  //     setIsScrolling(true);
  //     setActiveSection(hash);
  //     setTimeout(() => {
  //       smoothScrollTo(hash);
  //       setIsScrolling(false);
  //     }, 100);
  //   }

  //   window.addEventListener("hashchange", handleHashChange);
  //   return () => window.removeEventListener("hashchange", handleHashChange);
  // }, []); // Bỏ activeSection dependency để tránh vòng lặp
  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-300">
      {/* Top bar với thông tin liên hệ */}
      <div className="bg-blue-600 dark:bg-blue-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <div className="flex items-center space-x-2 md:space-x-6">
              <div className="flex items-center space-x-1 md:space-x-2">
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">{t.header_hotline}</span>
                <span>0966.616.636</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>bhdesignmedia@gmail.com</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{t.header_working_hours}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>{t.header_support} 0966.616.636</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <img
                src={logo}
                alt="BH Design & Media Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                BH Design & Media
              </h2>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">
                {t.header_tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => smoothScrollTo("home")}
              className={`font-medium transition-all duration-200 hover:scale-105 transform ${
                activeSection === "home"
                  ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-300 dark:hover:border-blue-600"
              }`}
            >
              {t.nav_home}
            </button>
            <button
              onClick={() => smoothScrollTo("about")}
              className={`font-medium transition-all duration-200 hover:scale-105 transform ${
                activeSection === "about"
                  ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-300 dark:hover:border-blue-600"
              }`}
            >
              {t.nav_about}
            </button>
            <button
              onClick={() => smoothScrollTo("services")}
              className={`font-medium transition-all duration-200 hover:scale-105 transform ${
                activeSection === "services"
                  ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-300 dark:hover:border-blue-600"
              }`}
            >
              {t.nav_services}
            </button>
            <button
              onClick={() => smoothScrollTo("portfolio")}
              className={`font-medium transition-all duration-200 hover:scale-105 transform ${
                activeSection === "portfolio"
                  ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-300 dark:hover:border-blue-600"
              }`}
            >
              {t.nav_portfolio}
            </button>
            <button
              onClick={() => smoothScrollTo("pricing")}
              className={`font-medium transition-all duration-200 hover:scale-105 transform ${
                activeSection === "pricing"
                  ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-300 dark:hover:border-blue-600"
              }`}
            >
              {t.nav_pricing}
            </button>
            <button
              onClick={() => smoothScrollTo("contact")}
              className={`font-medium transition-all duration-200 hover:scale-105 transform ${
                activeSection === "contact"
                  ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-300 dark:hover:border-blue-600"
              }`}
            >
              {t.nav_contact}
            </button>
          </nav>

          {/* Right Side - Language/Theme Switcher, CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Language/Theme Switcher */}
            <LanguageThemeSwitcher />

            {/* CTA Button - Hidden on mobile */}
            <Button
              size="sm"
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 hover:scale-105 transform duration-200 text-xs md:text-sm shadow-md hover:shadow-lg transition-all text-white font-medium"
              onClick={() => smoothScrollTo("contact")}
            >
              <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">{t.nav_consult}</span>
              <span className="sm:hidden">{t.nav_consult}</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300">
            <nav className="px-4 py-4 space-y-3">
              <button
                onClick={() => {
                  smoothScrollTo("home");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-all duration-200 ${
                  activeSection === "home"
                    ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-700 dark:border-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                {t.nav_home}
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("about");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-all duration-200 ${
                  activeSection === "about"
                    ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-700 dark:border-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                {t.nav_about}
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("services");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-all duration-200 ${
                  activeSection === "services"
                    ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-700 dark:border-blue-400"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                }`}
              >
                {t.nav_services}
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("portfolio");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-all duration-200 ${
                  activeSection === "portfolio"
                    ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-700 dark:border-blue-400"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                }`}
              >
                {t.nav_portfolio}
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("pricing");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-all duration-200 ${
                  activeSection === "pricing"
                    ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-700 dark:border-blue-400"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                }`}
              >
                Báo giá
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("contact");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-all duration-200 ${
                  activeSection === "contact"
                    ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-700 dark:border-blue-400"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                }`}
              >
                Liên hệ
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
