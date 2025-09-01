import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import {
  Palette,
  Printer,
  Building2,
  Settings,
  Phone,
  CheckCircle,
  Star,
  Award,
  Clock,
  Shield,
  MessageCircle,
} from "lucide-react";
import { useTranslation } from "../../translations/index";
// import { smoothScrollTo } from "../../utils/scroll";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

interface ServiceCategory {
  title: string;
  items: string[];
}

const getServices = (t: ReturnType<typeof useTranslation>): Service[] => [
  {
    icon: <Palette className="w-8 h-8" />,
    title: t.service_design_title,
    description: t.service_design_desc,
    features: [
      t.service_design_feature1,
      t.service_design_feature2,
      t.service_design_feature3,
      t.service_design_feature4,
    ],
    color: "blue",
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: t.service_printing_title,
    description: t.service_printing_desc,
    features: [
      t.service_printing_feature1,
      t.service_printing_feature2,
      t.service_printing_feature3,
      t.service_printing_feature4,
    ],
    color: "green",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: t.service_construction_title,
    description: t.service_construction_desc,
    features: [
      t.service_construction_feature1,
      t.service_construction_feature2,
      t.service_construction_feature3,
      t.service_construction_feature4,
    ],
    color: "orange",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: t.service_cnc_title,
    description: t.service_cnc_desc,
    features: [
      t.service_cnc_feature1,
      t.service_cnc_feature2,
      t.service_cnc_feature3,
      t.service_cnc_feature4,
    ],
    color: "purple",
  },
];

const getServiceCategories = (
  t: ReturnType<typeof useTranslation>
): ServiceCategory[] => [
  {
    title: t.service_category_signs_title,
    items: [
      t.service_category_signs_item1,
      t.service_category_signs_item2,
      t.service_category_signs_item3,
      t.service_category_signs_item4,
      t.service_category_signs_item5,
      t.service_category_signs_item6,
      t.service_category_signs_item7,
      t.service_category_signs_item8,
    ],
  },
  {
    title: t.service_category_printing_title,
    items: [
      t.service_category_printing_item1,
      t.service_category_printing_item2,
      t.service_category_printing_item3,
      t.service_category_printing_item4,
      t.service_category_printing_item5,
    ],
  },
  {
    title: t.service_category_processing_title,
    items: [
      t.service_category_processing_item1,
      t.service_category_processing_item2,
      t.service_category_processing_item3,
      t.service_category_processing_item4,
    ],
  },
];

export default function ServicesSection() {
  const t = useTranslation();

  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Badge
            variant="outline"
            className="mb-4 bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 border-orange-400 dark:border-orange-600 shadow-sm"
          >
            <Award className="w-4 h-4 mr-2" />
            {t.services_title}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.services_subtitle}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.services_subtitle}
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {getServices(t).map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg border-t-4 bg-white dark:bg-gray-800"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              style={{
                borderTopColor:
                  index === 0
                    ? "#3B82F6"
                    : index === 1
                      ? "#10B981"
                      : index === 2
                        ? "#F59E0B"
                        : "#8B5CF6",
              }}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`mb-4 group-hover:scale-110 transition-transform duration-300 text-${service.color}-600`}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-200">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Separator className="mb-4" />
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-200"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Categories */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.service_category_title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {getServiceCategories(t).map(
              (category: ServiceCategory, index: number) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md border-t-4"
                  style={{
                    borderTopColor:
                      index === 0
                        ? "#3B82F6"
                        : index === 1
                          ? "#10B981"
                          : "#F59E0B",
                  }}
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Star className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-2" />
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item: string, itemIndex: number) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-sm text-gray-700 dark:text-gray-200"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-orange-50 to-indigo-50 dark:from-orange-900/30 dark:to-indigo-900/30 rounded-2xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.why_choose_title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                {t.why_choose_quality_title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                {t.why_choose_quality_desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                {t.why_choose_delivery_title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                {t.why_choose_delivery_desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                {t.why_choose_warranty_title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                {t.why_choose_warranty_desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                {t.why_choose_price_title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                {t.why_choose_price_desc}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-indigo-600 dark:from-orange-500 dark:to-indigo-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">{t.cta_title}</h3>
            <p className="text-orange-50 mb-6">{t.cta_desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-700 hover:bg-gray-100 hover:scale-105 transform duration-200 font-medium shadow-lg hover:shadow-xl"
                onClick={() => window.open("tel:0966616636")}
              >
                <Phone className="w-5 h-5 mr-2" />
                {t.cta_call}
              </Button>
              <Button
                size="lg"
                className="bg-white text-orange-700 hover:bg-gray-100 hover:scale-105 transform duration-200 font-medium shadow-lg hover:shadow-xl"
                onClick={() =>
                  window.open("https://zalo.me/0966616636", "_blank")
                }
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat Zalo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
