import { Button } from "./button";
import { useApp } from "../../contexts/useApp";
import { Sun, Moon, Globe } from "lucide-react";
import { useState } from "react";

export default function LanguageThemeSwitcher() {
  const { theme, language, toggleTheme, setLanguage } = useApp();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  return (
    <div className="flex items-center gap-2 relative">
      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="w-9 h-9 p-0"
        aria-label={
          theme === "light" ? "Switch to dark mode" : "Switch to light mode"
        }
      >
        {theme === "light" ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>

      {/* Language Switcher */}
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          className="w-9 h-9 p-0"
          onClick={() => setShowLanguageMenu(!showLanguageMenu)}
        >
          <Globe className="h-4 w-4" />
        </Button>

        {showLanguageMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <button
              onClick={() => {
                setLanguage("vi");
                setShowLanguageMenu(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                language === "vi" ? "bg-blue-50 dark:bg-blue-900" : ""
              }`}
            >
              <span className="mr-2">🇻🇳</span>
              Tiếng Việt
            </button>
            <button
              onClick={() => {
                setLanguage("en");
                setShowLanguageMenu(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                language === "en" ? "bg-blue-50 dark:bg-blue-900" : ""
              }`}
            >
              <span className="mr-2">🇺🇸</span>
              English
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
