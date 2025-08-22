import { Button } from "../ui/button";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import logo from "../../assets/images/bhstore.png";
import { smoothScrollTo } from "../../utils/scroll";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
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
        const scrollPosition = window.scrollY + 100; // Offset để tính toán chính xác hơn

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
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
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top bar với thông tin liên hệ */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <div className="flex items-center space-x-2 md:space-x-6">
              <div className="flex items-center space-x-1 md:space-x-2">
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Hotline:</span>
                <span>0966.616.636</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>bhdesignmedia@gmail.com</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>7:30 - 17:30 (T2-T7)</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Hỗ trợ bảo hành: 0966.616.636</span>
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
              <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                BH Design & Media
              </h2>
              <p className="text-xs md:text-sm text-gray-600">
                Thiết kế & In ấn Quảng cáo
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => smoothScrollTo("home")}
              className={`font-medium transition-colors md:hover:scale-105 transform duration-200 ${
                activeSection === "home"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Trang chủ
            </button>
            <button
              onClick={() => smoothScrollTo("about")}
              className={`font-medium transition-colors md:hover:scale-105 transform duration-200 ${
                activeSection === "about"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Về chúng tôi
            </button>
            <button
              onClick={() => smoothScrollTo("services")}
              className={`font-medium transition-colors md:hover:scale-105 transform duration-200 ${
                activeSection === "services"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Dịch vụ
            </button>
            <button
              onClick={() => smoothScrollTo("portfolio")}
              className={`font-medium transition-colors md:hover:scale-105 transform duration-200 ${
                activeSection === "portfolio"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Sản phẩm
            </button>
            <button
              onClick={() => smoothScrollTo("pricing")}
              className={`font-medium transition-colors md:hover:scale-105 transform duration-200 ${
                activeSection === "pricing"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Báo giá
            </button>
            <button
              onClick={() => smoothScrollTo("contact")}
              className={`font-medium transition-colors md:hover:scale-105 transform duration-200 ${
                activeSection === "contact"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Liên hệ
            </button>
          </nav>

          {/* Right Side - CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* CTA Button - Hidden on mobile */}
            <Button
              size="sm"
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 md:hover:scale-105 transform duration-200 text-xs md:text-sm"
              onClick={() => smoothScrollTo("contact")}
            >
              <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Tư vấn ngay</span>
              <span className="sm:hidden">Tư vấn</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-3">
              <button
                onClick={() => {
                  smoothScrollTo("home");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-colors ${
                  activeSection === "home"
                    ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Trang chủ
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("about");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-colors ${
                  activeSection === "about"
                    ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Về chúng tôi
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("services");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-colors ${
                  activeSection === "services"
                    ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Dịch vụ
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("portfolio");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-colors ${
                  activeSection === "portfolio"
                    ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Sản phẩm
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("pricing");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-colors ${
                  activeSection === "pricing"
                    ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Báo giá
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("contact");
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-colors ${
                  activeSection === "contact"
                    ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
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
