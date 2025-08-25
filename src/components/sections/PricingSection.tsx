import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CheckCircle, Star, Phone, MessageCircle } from "lucide-react";
import { useTranslation } from "../../translations/index";
// import { smoothScrollTo } from "../../utils/scroll";

const getPricingPlans = (t: any) => [
  {
    title: t.pricing_plan_basic_title,
    price: t.pricing_plan_basic_price,
    description: t.pricing_plan_basic_desc,
    features: [
      t.pricing_basic_feature1,
      t.pricing_basic_feature2,
      t.pricing_basic_feature3,
      t.pricing_basic_feature4,
      t.pricing_basic_feature5,
      t.pricing_basic_feature6,
    ],
    popular: false,
    color: "blue",
  },
  {
    title: t.pricing_plan_standard_title,
    price: t.pricing_plan_standard_price,
    description: t.pricing_plan_standard_desc,
    features: [
      t.pricing_standard_feature1,
      t.pricing_standard_feature2,
      t.pricing_standard_feature3,
      t.pricing_standard_feature4,
      t.pricing_standard_feature5,
      t.pricing_standard_feature6,
    ],
    popular: true,
    color: "green",
  },
  {
    title: t.pricing_plan_premium_title,
    price: t.pricing_plan_premium_price,
    description: t.pricing_plan_premium_desc,
    features: [
      t.pricing_premium_feature1,
      t.pricing_premium_feature2,
      t.pricing_premium_feature3,
      t.pricing_premium_feature4,
      t.pricing_premium_feature5,
      t.pricing_premium_feature6,
    ],
    popular: false,
    color: "orange",
  },
];

export default function PricingSection() {
  const t = useTranslation();

  return (
    <section
      id="pricing"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-400 dark:border-blue-600 shadow-sm"
          >
            <Star className="w-4 h-4 mr-2" />
            {t.nav_pricing}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.pricing_title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.pricing_subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {getPricingPlans(t).map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-2 border-green-500 shadow-xl scale-105"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    {t.pricing_popular}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.title}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-700">
                    {plan.price}
                  </span>
                </div>
                <CardDescription className="text-gray-700 dark:text-gray-200 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-200"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button
                    className={`w-full hover:scale-105 transform duration-200 text-white font-medium shadow-sm ${
                      plan.popular
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                    onClick={() => window.open("tel:0966616636")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {t.pricing_call_quote}
                  </Button>
                  <Button
                    className="w-full bg-white text-blue-700 hover:bg-gray-100 hover:scale-105 transform duration-200 font-medium shadow-sm"
                    onClick={() =>
                      window.open("https://zalo.me/0966616636", "_blank")
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t.contact_zalo}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.pricing_notes_title}
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{t.pricing_notes_vat}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{t.pricing_notes_complex}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{t.pricing_notes_bulk}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{t.pricing_notes_payment}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                {t.pricing_offers_title}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    {t.pricing_offers_new_customer}
                  </span>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200">
                    {t.pricing_offers_discount_10}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    {t.pricing_offers_large_order}
                  </span>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {" "}
                    {t.pricing_offers_discount_15}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    {t.pricing_offers_loyal_customer}
                  </span>
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200">
                    {t.pricing_offers_discount_20}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">{t.pricing_cta}</h3>
            <p className="text-blue-50 mb-6">{t.pricing_cta_desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 hover:scale-105 transform duration-200 font-medium shadow-lg hover:shadow-xl"
                onClick={() => window.open("tel:0966616636")}
              >
                <Phone className="w-5 h-5 mr-2" />
                {t.pricing_call}
              </Button>
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 hover:scale-105 transform duration-200 font-medium shadow-lg hover:shadow-xl"
                onClick={() =>
                  window.open("https://zalo.me/0966616636", "_blank")
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.pricing_zalo}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
