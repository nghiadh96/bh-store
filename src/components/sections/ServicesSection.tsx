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
// import { smoothScrollTo } from "../../utils/scroll";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Thiết kế Quảng cáo",
    description: "Banner, Poster, Standee, Ấn phẩm truyền thông chuyên nghiệp",
    features: [
      "Thiết kế sáng tạo, độc đáo",
      "File vector chất lượng cao",
      "Chỉnh sửa miễn phí",
      "Giao file đúng format",
    ],
    color: "blue",
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: "In ấn Phun khổ lớn",
    description:
      "In phun khổ lớn, In decal, Photocopy, Scan màu chất lượng cao",
    features: [
      "Máy in công nghiệp hiện đại",
      "Mực in chính hãng",
      "Khổ in lên đến 3.2m",
      "Độ bền màu cao",
    ],
    color: "green",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Thi công Biển quảng cáo",
    description: "Biển quảng cáo, Bảng hiệu, Chữ nổi, Alu, Hộp đèn",
    features: [
      "Thi công chuyên nghiệp",
      "Vật liệu cao cấp",
      "Bảo hành dài hạn",
      "Lắp đặt tận nơi",
    ],
    color: "orange",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Gia công CNC",
    description: "Cắt khắc CNC chính xác, đa dạng vật liệu",
    features: [
      "Máy CNC hiện đại",
      "Độ chính xác cao",
      "Đa dạng vật liệu",
      "Gia công nhanh chóng",
    ],
    color: "purple",
  },
];

const serviceCategories = [
  {
    title: "Biển quảng cáo",
    items: [
      "Biển Alu – chữ nổi",
      "Biển Mặt Tiền",
      "Biển Tòa Nhà",
      "Biển hộp đèn",
      "Biển Vẫy",
      "Biển bạt",
      "Biển LED",
      "Biển báo – Chỉ dẫn",
    ],
  },
  {
    title: "Thiết kế in ấn",
    items: ["In bạt", "In decal", "In UV cuộn / phẳng", "In ấn phẩm"],
  },
  {
    title: "Gia Công",
    items: [
      "Chữ nổi",
      "Biển công ty",
      "Biển phòng / Bảng chức danh",
      "Cắt Khắc CNC / Lazer",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge variant="outline" className="mb-4">
            <Award className="w-4 h-4 mr-2" />
            Dịch vụ của chúng tôi
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Dịch vụ Thiết kế và Thi công Biển quảng cáo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Từ thiết kế đến in ấn và thi công, chúng tôi cung cấp dịch vụ trọn
            gói giúp doanh nghiệp của bạn nổi bật trong thị trường cạnh tranh.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg border-t-4"
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
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`mb-4 group-hover:scale-110 transition-transform duration-300 text-${service.color}-600`}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Separator className="mb-4" />
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
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
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Danh mục dịch vụ chi tiết
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border-t-4"
                style={{
                  borderTopColor:
                    index === 0
                      ? "#3B82F6"
                      : index === 1
                      ? "#10B981"
                      : "#F59E0B",
                }}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Star className="w-5 h-5 text-blue-600 mr-2" />
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Tại sao chọn BH Design & Media?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Chất lượng cao</h4>
              <p className="text-sm text-gray-600">
                Sử dụng vật liệu cao cấp, công nghệ hiện đại
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Giao hàng nhanh</h4>
              <p className="text-sm text-gray-600">
                Cam kết giao hàng đúng hạn, lắp đặt tận nơi
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                Bảo hành 12 tháng
              </h4>
              <p className="text-sm text-gray-600">
                Chế độ bảo hành dài hạn, hỗ trợ 24/7
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Giá cả hợp lý</h4>
              <p className="text-sm text-gray-600">
                Báo giá minh bạch, không phát sinh chi phí
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Cần tư vấn chi tiết về dịch vụ?
            </h3>
            <p className="text-blue-100 mb-6">
              Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn miễn phí và báo
              giá chi tiết
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
                className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 hover:text-blue-600 transform duration-200"
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
