import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Image, Eye, Download, MessageCircle, Phone, Mail } from "lucide-react";
import { smoothScrollTo } from "../../utils/scroll";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Banner Quảng cáo",
    category: "Thiết kế",
    description: "Banner khổ lớn cho sự kiện",
    image: "/images/portfolio-1-banner.webp",
  },
  {
    id: 2,
    title: "Poster Sự kiện",
    category: "Thiết kế",
    description: "Poster chuyên nghiệp",
    image: "/images/portfolio-2-poster.webp",
  },
  {
    id: 3,
    title: "Standee Quảng cáo",
    category: "Thiết kế",
    description: "Standee đứng chuyên nghiệp",
    image: "/images/portfolio-3-standee.webp",
  },
  {
    id: 4,
    title: "Biển Quảng cáo",
    category: "Thi công",
    description: "Biển LED ngoài trời",
    image: "/images/portfolio-4-billboard.webp",
  },
  {
    id: 5,
    title: "In Decal",
    category: "In ấn",
    description: "Decal dán kính chất lượng cao",
    image: "/images/portfolio-5-decal.webp",
  },
  {
    id: 6,
    title: "Photocopy",
    category: "In ấn",
    description: "In ấn tài liệu số lượng lớn",
    image: "/images/portfolio-6-photocopy.webp",
  },
  {
    id: 7,
    title: "Chữ nổi Alu",
    category: "Thi công",
    description: "Chữ nổi cao cấp",
    image: "/images/portfolio-7-signage.webp",
  },
  {
    id: 8,
    title: "Hộp đèn",
    category: "Thi công",
    description: "Hộp đèn quảng cáo",
    image: "/images/portfolio-8-led.webp",
  },
];

export default function PortfolioSection() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Hàm xử lý xem chi tiết sản phẩm
  const handleViewProduct = (item: any) => {
    setSelectedProduct(item);
    setIsViewModalOpen(true);
  };

  // Hàm xử lý tải xuống sản phẩm
  const handleDownloadProduct = (item: any) => {
    setSelectedProduct(item);
    setIsDownloadModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge variant="outline" className="mb-4">
            <Image className="w-4 h-4 mr-2" />
            Portfolio
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sản phẩm mẫu của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá các dự án tiêu biểu đã được BH Design & Media thực hiện
            thành công. Mỗi sản phẩm đều thể hiện sự sáng tạo và chất lượng
            chuyên nghiệp.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex space-x-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleViewProduct(item)}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors md:hover:scale-110 transform duration-200"
                      title="Xem chi tiết"
                    >
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() => handleDownloadProduct(item)}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors md:hover:scale-110 transform duration-200"
                      title="Tải xuống"
                    >
                      <Download className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Bạn có dự án tương tự?</h3>
            <p className="text-blue-100 mb-6">
              Hãy liên hệ ngay để được tư vấn và báo giá chi tiết cho dự án của
              bạn
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600 hover:scale-105 transform duration-200"
                onClick={() => smoothScrollTo("contact")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Tư vấn miễn phí
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Xem Chi Tiết */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Chi tiết sản phẩm</DialogTitle>
          </DialogHeader>
          {selectedProduct && (
            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedProduct.title}
                  </h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {selectedProduct.category}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Thông tin chi tiết:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Chất liệu: Cao cấp, bền bỉ</li>
                    <li>• Kích thước: Tùy chỉnh theo yêu cầu</li>
                    <li>• Thời gian thi công: 3-7 ngày</li>
                    <li>• Bảo hành: 12 tháng</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal Tải Xuống */}
      <Dialog open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Tải xuống sản phẩm</DialogTitle>
          </DialogHeader>
          {selectedProduct && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {selectedProduct.title}
                </h3>
                <p className="text-gray-600">
                  Liên hệ với chúng tôi để nhận file chất lượng cao!
                </p>
              </div>
              <div className="space-y-3">
                <Button
                  onClick={() => window.open("tel:0966616636")}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Gọi điện thoại
                </Button>
                <Button
                  onClick={() =>
                    window.open("https://zalo.me/0966616636", "_blank")
                  }
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat Zalo
                </Button>
                <Button
                  onClick={() => window.open("mailto:bhdesignmedia@gmail.com")}
                  className="w-full bg-gray-600 hover:bg-gray-700"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Gửi email
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
