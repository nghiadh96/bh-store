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
// import { smoothScrollTo } from "../../utils/scroll";

const pricingPlans = [
  {
    title: "Thiết kế",
    price: "Từ 500.000đ",
    description: "Thiết kế banner, poster, standee",
    features: [
      "Thiết kế banner khổ lớn",
      "Poster sự kiện chuyên nghiệp",
      "Standee đứng quảng cáo",
      "Ấn phẩm truyền thông",
      "Chỉnh sửa miễn phí",
      "File vector chất lượng cao",
    ],
    popular: false,
    color: "blue",
  },
  {
    title: "In ấn",
    price: "Từ 50.000đ/m²",
    description: "In phun khổ lớn, decal, photocopy",
    features: [
      "In phun khổ lớn đến 3.2m",
      "In decal dán kính",
      "Photocopy số lượng lớn",
      "Scan màu chất lượng cao",
      "Mực in chính hãng",
      "Độ bền màu cao",
    ],
    popular: true,
    color: "green",
  },
  {
    title: "Thi công",
    price: "Liên hệ báo giá",
    description: "Thi công biển quảng cáo, CNC",
    features: [
      "Biển quảng cáo ngoài trời",
      "Chữ nổi Alu cao cấp",
      "Hộp đèn quảng cáo",
      "Gia công CNC chính xác",
      "Lắp đặt tận nơi",
      "Bảo hành 12 tháng",
    ],
    popular: false,
    color: "orange",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Bảng giá
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Bảng giá dịch vụ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Báo giá minh bạch, không phát sinh chi phí. Liên hệ để được tư vấn
            và báo giá chi tiết cho dự án cụ thể của bạn.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
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
                    Phổ biến
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.title}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">
                    {plan.price}
                  </span>
                </div>
                <CardDescription className="text-gray-600 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button
                    className={`w-full hover:scale-105 transform duration-200 ${
                      plan.popular
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                    onClick={() => window.open("tel:0966616636")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Gọi báo giá
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full hover:scale-105 transform duration-200"
                    onClick={() =>
                      window.open("https://zalo.me/0966616636", "_blank")
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat Zalo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💡 Lưu ý quan trọng
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Giá trên chưa bao gồm thuế VAT</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Thi công phức tạp cần khảo sát và báo giá riêng</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Giảm giá cho đơn hàng số lượng lớn</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Thanh toán linh hoạt: tiền mặt, chuyển khoản</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">
                🎯 Ưu đãi đặc biệt
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Khách hàng mới</span>
                  <Badge className="bg-green-100 text-green-700">
                    Giảm 10%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Đơn hàng trên 5 triệu</span>
                  <Badge className="bg-blue-100 text-blue-800">Giảm 15%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Khách hàng thân thiết</span>
                  <Badge className="bg-purple-100 text-purple-700">
                    Giảm 20%
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Cần báo giá chi tiết?</h3>
            <p className="text-blue-100 mb-6">
              Hãy liên hệ ngay để được tư vấn và báo giá chính xác cho dự án của
              bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transform duration-200"
                onClick={() => window.open("tel:0966616636")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Gọi ngay: 0966.616.636
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600 hover:scale-105 transform duration-200"
                onClick={() =>
                  window.open("https://zalo.me/0966616636", "_blank")
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat Zalo tư vấn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
