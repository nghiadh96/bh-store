import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import logo from "../../assets/images/bhstore.png";
import { smoothScrollTo } from "../../utils/scroll";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src={logo}
                  alt="BH Design & Media Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">BH Design & Media</h3>
                <p className="text-sm text-gray-400">
                  Thiết kế & In ấn Quảng cáo
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Chuyên cung cấp dịch vụ thiết kế, in ấn và thi công biển quảng cáo
              với chất lượng cao, giá cả hợp lý. Tư vấn khảo sát thiết kế miễn
              phí.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/tuanbaodtb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="https://zalo.me/0966616636"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-xl">💬</span>
              </a>
              <a
                href="tel:0966616636"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-xl">📞</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Dịch vụ chính</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>🎨 Thiết kế Banner - Poster</li>
              <li>🖨️ In phun khổ lớn</li>
              <li>🏗️ Thi công biển quảng cáo</li>
              <li>⚙️ Gia công CNC</li>
              <li>📋 Standee - Ấn phẩm</li>
              <li>🏷️ In decal - Photocopy</li>
              <li>💡 Biển LED - Hộp đèn</li>
              <li>🏢 Biển tòa nhà - Chữ nổi</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => smoothScrollTo("home")}
                  className="text-gray-400 hover:text-white transition-colors md:hover:scale-105 transform duration-200"
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScrollTo("services")}
                  className="text-gray-400 hover:text-white transition-colors md:hover:scale-105 transform duration-200"
                >
                  Dịch vụ
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScrollTo("portfolio")}
                  className="text-gray-400 hover:text-white transition-colors md:hover:scale-105 transform duration-200"
                >
                  Sản phẩm
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScrollTo("about")}
                  className="text-gray-400 hover:text-white transition-colors md:hover:scale-105 transform duration-200"
                >
                  Về chúng tôi
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScrollTo("contact")}
                  className="text-gray-400 hover:text-white transition-colors md:hover:scale-105 transform duration-200"
                >
                  Liên hệ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Thông tin liên hệ</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>0966.616.636</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>bhdesignmedia@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>
                  Xóm 6, Thôn Lục Nam, Xã Thái Xuyên, Huyện Thái Thụy, Tỉnh Thái
                  Bình
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>7:30 - 17:30 (T2-T7)</span>
              </div>
            </div>

            <Separator className="bg-gray-700" />

            <div className="bg-blue-600 rounded-lg p-4">
              <h5 className="font-bold mb-2 flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Ưu đãi đặc biệt
              </h5>
              <div className="text-sm">
                Giảm 10% cho khách hàng mới
                <Badge variant="secondary" className="ml-2">
                  HOT
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="bg-gray-700 my-8" />
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center text-sm text-gray-400">
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-4">
            <span className="flex items-center justify-center md:justify-start">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Chất lượng cao - Giá cả hợp lý
            </span>
            <span className="flex items-center justify-center md:justify-start">
              <Clock className="w-4 h-4 mr-2 text-green-400" />
              Giao hàng đúng hạn
            </span>
            <span className="flex items-center justify-center md:justify-start">
              <Phone className="w-4 h-4 mr-2 text-blue-400" />
              Tư vấn miễn phí 24/7
            </span>
          </div>
          <p className="text-center md:text-left">
            &copy; 2025 BH Design & Media. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
