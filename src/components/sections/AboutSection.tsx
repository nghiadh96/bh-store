import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { smoothScrollTo } from "../../utils/scroll";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6" data-aos="fade-right">
            <Badge
              variant="outline"
              className="bg-blue-100 text-blue-700 border-blue-300"
            >
              <Award className="w-4 h-4 mr-2" />
              Về chúng tôi
            </Badge>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              BH Design & Media - Chuyên gia thiết kế & in ấn quảng cáo tại Thái
              Thụy, Thái Bình
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Với hơn 5 năm kinh nghiệm trong lĩnh vực thiết kế và in ấn quảng
              cáo, BH Design & Media tự hào là đối tác tin cậy của hàng trăm
              doanh nghiệp tại Thái Thụy, Thái Bình. Chúng tôi cam kết mang đến
              những sản phẩm chất lượng cao với giá cả hợp lý.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Đội ngũ thiết kế chuyên nghiệp, máy móc hiện đại, và dịch vụ tận
              tâm là những yếu tố tạo nên sự khác biệt của BH Design & Media
              trong thị trường cạnh tranh.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  Thiết kế sáng tạo, độc đáo
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  Máy in công nghiệp hiện đại
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Giao hàng đúng hạn</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Bảo hành 12 tháng</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transform duration-200"
                onClick={() => smoothScrollTo("portfolio")}
              >
                <Users className="w-4 h-4 mr-2" />
                Xem portfolio
              </Button>
              <Button
                variant="outline"
                className="hover:scale-105 transform duration-200"
                onClick={() => smoothScrollTo("portfolio")}
              >
                <Clock className="w-4 h-4 mr-2" />
                Lịch sử dự án
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative" data-aos="fade-left">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="aspect-video rounded-lg overflow-hidden relative">
                <img
                  src="/images/about-shop.jpg"
                  alt="BH Design & Media - Printing and Design Shop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">
                      BH Design & Media
                    </h3>
                    <p className="text-white">Thiết kế & In ấn Quảng cáo</p>
                    <p className="text-sm text-gray-200 mt-2">
                      Thái Thụy, Thái Bình
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center bg-white rounded-lg p-3">
                  <p className="text-2xl font-bold text-blue-600">500+</p>
                  <p className="text-xs text-gray-600">Dự án</p>
                </div>
                <div className="text-center bg-white rounded-lg p-3">
                  <p className="text-2xl font-bold text-green-600">98%</p>
                  <p className="text-xs text-gray-600">Hài lòng</p>
                </div>
                <div className="text-center bg-white rounded-lg p-3">
                  <p className="text-2xl font-bold text-orange-600">5+</p>
                  <p className="text-xs text-gray-600">Năm KN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
