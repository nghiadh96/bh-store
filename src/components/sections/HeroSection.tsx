import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Star,
  Phone,
  Image,
  CheckCircle,
  Award,
  Users,
  Clock,
  MessageCircle,
} from "lucide-react";
import { smoothScrollTo } from "../../utils/scroll";
import {
  trackPhoneCall,
  trackZaloChat,
  trackScrollToSection,
} from "../../utils/analytics";
import { useTranslation } from "../../translations/index";

export default function HeroSection() {
  const t = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden hero-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 hero-bg">
        <img
          src="/images/hero-bg.webp"
          alt="Printing and Design Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto my-4 md:my-0 hero-content">
          <Badge
            variant="outline"
            className="hero-badge bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 border-blue-300 dark:border-blue-400 shadow-lg mb-6"
          >
            <Star className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
            {t.hero_badge}
          </Badge>

          <h1 className="hero-title">
            {t.hero_title}
            <span className="text-blue-200 dark:text-blue-300 block">
              {t.hero_subtitle}
            </span>
          </h1>

          <p className="hero-subtitle text-white/90 dark:text-white/80">
            {t.hero_description}
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-lg px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl md:hover:scale-105 transform duration-200"
              onClick={() => {
                trackPhoneCall();
                window.open("tel:0966616636");
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              {t.hero_cta_primary}
            </Button>
            <Button
              size="lg"
              className="text-lg px-8 py-4 border-2 border-blue-300 text-blue-300 hover:bg-blue-700 hover:text-white dark:bg-white dark:text-blue-700 dark:border-0 dark:hover:bg-gray-100 md:hover:scale-105 transform duration-200 font-medium shadow-lg hover:shadow-xl"
              onClick={() => {
                trackZaloChat();
                window.open("https://zalo.me/0966616636", "_blank");
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.contact_zalo}
            </Button>
            <Button
              size="lg"
              className="text-lg px-8 py-4 border-2 border-green-300 text-green-300 hover:bg-green-700 hover:text-white dark:bg-white dark:text-green-700 dark:border-0 dark:hover:bg-gray-100 md:hover:scale-105 transform duration-200 font-medium shadow-lg hover:shadow-xl"
              onClick={() => {
                trackScrollToSection("portfolio");
                smoothScrollTo("portfolio");
              }}
            >
              <Image className="w-5 h-5 mr-2" />
              {t.hero_cta_secondary}
            </Button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="text-center bg-white/90 dark:bg-gray-800/90 rounded-lg p-4 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                500+
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">
                {t.hero_stats_projects}
              </p>
            </div>
            <div className="text-center bg-white/90 dark:bg-gray-800/90 rounded-lg p-4 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                98%
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">
                {t.hero_stats_satisfaction}
              </p>
            </div>
            <div className="text-center bg-white/90 dark:bg-gray-800/90 rounded-lg p-4 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                5+
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">
                {t.hero_stats_experience}
              </p>
            </div>
            <div className="text-center bg-white/90 dark:bg-gray-800/90 rounded-lg p-4 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                12
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">
                {t.hero_stats_warranty}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
