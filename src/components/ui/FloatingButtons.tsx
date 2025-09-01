import { Phone, MessageCircle, Mail, Facebook, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "../../translations/index";

export default function FloatingButtons() {
  const t = useTranslation();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleButtonClick = (buttonType: string, action: () => void) => {
    setClickedButton(buttonType);
    setTimeout(() => {
      setClickedButton(null);
      action();
    }, 300);
  };

  // Kiểm tra scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Hiển thị nút scroll to top khi scroll xuống hơn 300px
      setShowScrollTop(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 space-y-3 md:space-y-4">
      {/* Phone Button */}
      <div className="relative group">
        <button
          onClick={() =>
            handleButtonClick("phone", () => window.open("tel:0966616636"))
          }
          onMouseEnter={() => setHoveredButton("phone")}
          onMouseLeave={() => setHoveredButton(null)}
          className={`relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 flex items-center justify-center group ${
            clickedButton === "phone"
              ? "animate-bounce scale-90"
              : "hover:scale-110"
          }`}
          title={t.floating_call_phone}
        >
          <Phone
            className={`w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 animate-wiggle ${
              hoveredButton === "phone" ? "rotate-12 scale-110" : ""
            } ${clickedButton === "phone" ? "animate-shake" : ""}`}
          />

          {/* Multiple pulse effects */}
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-30"></div>
          <div
            className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-20"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute inset-0 bg-orange-300 rounded-full animate-ping opacity-10"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Hover ring with wave effect */}
          <div className="absolute inset-0 bg-orange-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 scale-110"></div>
          <div className="absolute inset-0 bg-orange-300 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-125"></div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-orange-300 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-125 blur-sm"></div>
        </button>

        {/* Tooltip with animation - Hidden on mobile */}
        {hoveredButton === "phone" && (
          <div className="hidden md:block absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-fadeIn">
            {t.floating_call_phone}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        )}
      </div>

      {/* Zalo Button */}
      <div className="relative group">
        <button
          onClick={() =>
            handleButtonClick("zalo", () =>
              window.open("https://zalo.me/0966616636", "_blank")
            )
          }
          onMouseEnter={() => setHoveredButton("zalo")}
          onMouseLeave={() => setHoveredButton(null)}
          className={`relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 flex items-center justify-center group ${
            clickedButton === "zalo"
              ? "animate-bounce scale-90"
              : "hover:scale-110"
          }`}
          title={t.floating_chat_zalo}
        >
          <MessageCircle
            className={`w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 animate-wiggle ${
              hoveredButton === "zalo" ? "rotate-12 scale-110" : ""
            } ${clickedButton === "zalo" ? "animate-shake" : ""}`}
          />

          {/* Multiple pulse effects */}
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-30"></div>
          <div
            className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-20"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute inset-0 bg-orange-300 rounded-full animate-ping opacity-10"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Hover ring with wave effect */}
          <div className="absolute inset-0 bg-orange-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 scale-110"></div>
          <div className="absolute inset-0 bg-orange-300 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-125"></div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-orange-300 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-125 blur-sm"></div>
        </button>

        {/* Tooltip with animation - Hidden on mobile */}
        {hoveredButton === "zalo" && (
          <div className="hidden md:block absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-fadeIn">
            {t.floating_chat_zalo}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        )}
      </div>

      {/* Email Button */}
      <div className="relative group">
        <button
          onClick={() =>
            handleButtonClick("email", () =>
              window.open("mailto:bhdesignmedia@gmail.com")
            )
          }
          onMouseEnter={() => setHoveredButton("email")}
          onMouseLeave={() => setHoveredButton(null)}
          className={`relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 flex items-center justify-center group ${
            clickedButton === "email"
              ? "animate-bounce scale-90"
              : "hover:scale-110"
          }`}
          title={t.floating_send_email}
        >
          <Mail
            className={`w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 animate-wiggle ${
              hoveredButton === "email" ? "rotate-12 scale-110" : ""
            } ${clickedButton === "email" ? "animate-shake" : ""}`}
          />

          {/* Multiple pulse effects */}
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-30"></div>
          <div
            className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-20"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute inset-0 bg-orange-300 rounded-full animate-ping opacity-10"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Hover ring with wave effect */}
          <div className="absolute inset-0 bg-orange-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 scale-110"></div>
          <div className="absolute inset-0 bg-orange-300 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-125"></div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-orange-300 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-125 blur-sm"></div>
        </button>

        {/* Tooltip with animation - Hidden on mobile */}
        {hoveredButton === "email" && (
          <div className="hidden md:block absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-fadeIn">
            {t.floating_send_email}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        )}
      </div>

      {/* Facebook Button */}
      <div className="relative group">
        <button
          onClick={() =>
            handleButtonClick("facebook", () =>
              window.open("https://m.me/bhdesignmedia", "_blank")
            )
          }
          onMouseEnter={() => setHoveredButton("facebook")}
          onMouseLeave={() => setHoveredButton(null)}
          className={`relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 flex items-center justify-center group ${
            clickedButton === "facebook"
              ? "animate-bounce scale-90"
              : "hover:scale-110"
          }`}
          title={t.floating_facebook}
        >
          <Facebook
            className={`w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 animate-wiggle ${
              hoveredButton === "facebook" ? "rotate-12 scale-110" : ""
            } ${clickedButton === "facebook" ? "animate-shake" : ""}`}
          />

          {/* Multiple pulse effects */}
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-30"></div>
          <div
            className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-20"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute inset-0 bg-orange-300 rounded-full animate-ping opacity-10"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Hover ring with wave effect */}
          <div className="absolute inset-0 bg-orange-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 scale-110"></div>
          <div className="absolute inset-0 bg-orange-300 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-125"></div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-orange-300 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-125 blur-sm"></div>
        </button>

        {/* Tooltip with animation - Hidden on mobile */}
        {hoveredButton === "facebook" && (
          <div className="hidden md:block absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-fadeIn">
            {t.floating_facebook}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="relative group">
          <button
            onClick={() =>
              handleButtonClick("scroll", () =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              )
            }
            onMouseEnter={() => setHoveredButton("scroll")}
            onMouseLeave={() => setHoveredButton(null)}
            className={`relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 flex items-center justify-center group ${
              clickedButton === "scroll"
                ? "animate-bounce scale-90"
                : "hover:scale-110"
            }`}
            title={t.floating_scroll_top}
          >
            <ArrowUp
              className={`w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 ${
                hoveredButton === "scroll" ? "rotate-12 scale-110" : ""
              } ${clickedButton === "scroll" ? "animate-shake" : ""}`}
            />

            {/* Multiple pulse effects */}
            <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-30"></div>
            <div
              className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-20"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute inset-0 bg-orange-300 rounded-full animate-ping opacity-10"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Hover ring with wave effect */}
            <div className="absolute inset-0 bg-orange-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 scale-110"></div>
            <div className="absolute inset-0 bg-orange-300 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-125"></div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-orange-300 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-125 blur-sm"></div>
          </button>

          {/* Tooltip with animation - Hidden on mobile */}
          {hoveredButton === "scroll" && (
            <div className="hidden md:block absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-fadeIn">
              {t.floating_scroll_top}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
