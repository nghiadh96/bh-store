import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { smoothScrollTo } from "../../utils/scroll";
import { useTranslation } from "../../translations/index";

export default function AboutSection() {
  const t = useTranslation();

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <Badge
              variant="outline"
              className="bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 border-orange-400 dark:border-orange-600 shadow-sm"
            >
              <Award className="w-4 h-4 mr-2" />
              {t.about_title}
            </Badge>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              {t.about_subtitle}
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              {t.about_description}
            </p>

            {/* Features */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {t.about_features_creative}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {t.about_features_quality}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {t.about_features_fast}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {t.about_features_support}
                </span>
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <Button
                className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 hover:scale-105 transform duration-200 text-white font-medium shadow-lg hover:shadow-xl"
                onClick={() => smoothScrollTo("portfolio")}
              >
                <Users className="w-4 h-4 mr-2" />
                {t.hero_cta_secondary}
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transform duration-200 font-medium shadow-sm hover:shadow-md"
                onClick={() => smoothScrollTo("contact")}
              >
                <Clock className="w-4 h-4 mr-2" />
                {t.nav_contact}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div
            className="relative"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <div className="bg-gradient-to-br from-orange-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden relative">
                <img
                  src="/images/about-shop.webp"
                  alt="BH Design & Media - Printing and Design Shop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">
                      BH Design & Media
                    </h3>
                    <p className="text-white">{t.header_tagline}</p>
                    <p className="text-sm text-gray-200 mt-2">{t.hero_badge}</p>
                  </div>
                </div>
              </div>

              {/* Stats overlay */}
              <div
                className="grid grid-cols-3 gap-4 mt-6"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-once="true"
              >
                <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md">
                  <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">
                    500+
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-200 font-medium">
                    {t.hero_stats_projects}
                  </p>
                </div>
                <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    98%
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-200 font-medium">
                    {t.hero_stats_satisfaction}
                  </p>
                </div>
                <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    5+
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-200 font-medium">
                    {t.hero_stats_experience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
