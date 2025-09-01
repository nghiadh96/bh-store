import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Image, Eye, Download, MessageCircle, Phone, Mail } from "lucide-react";
import { smoothScrollTo } from "../../utils/scroll";
import { useState } from "react";
import { useTranslation } from "../../translations/index";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const getPortfolioItems = (
  t: ReturnType<typeof useTranslation>
): PortfolioItem[] => [
  {
    id: 1,
    title: t.portfolio_item1_title,
    category: t.portfolio_item1_category,
    description: t.portfolio_item1_desc,
    image: "/images/portfolio-1-banner.webp",
  },
  {
    id: 2,
    title: t.portfolio_item2_title,
    category: t.portfolio_item2_category,
    description: t.portfolio_item2_desc,
    image: "/images/portfolio-2-poster.webp",
  },
  {
    id: 3,
    title: t.portfolio_item3_title,
    category: t.portfolio_item3_category,
    description: t.portfolio_item3_desc,
    image: "/images/portfolio-3-standee.webp",
  },
  {
    id: 4,
    title: t.portfolio_item4_title,
    category: t.portfolio_item4_category,
    description: t.portfolio_item4_desc,
    image: "/images/portfolio-4-billboard.webp",
  },
  {
    id: 5,
    title: t.portfolio_item5_title,
    category: t.portfolio_item5_category,
    description: t.portfolio_item5_desc,
    image: "/images/portfolio-5-decal.webp",
  },
  {
    id: 6,
    title: t.portfolio_item6_title,
    category: t.portfolio_item6_category,
    description: t.portfolio_item6_desc,
    image: "/images/portfolio-6-photocopy.webp",
  },
  {
    id: 7,
    title: t.portfolio_item7_title,
    category: t.portfolio_item7_category,
    description: t.portfolio_item7_desc,
    image: "/images/portfolio-7-signage.webp",
  },
  {
    id: 8,
    title: t.portfolio_item8_title,
    category: t.portfolio_item8_category,
    description: t.portfolio_item8_desc,
    image: "/images/portfolio-8-led.webp",
  },
];

export default function PortfolioSection() {
  const t = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<PortfolioItem | null>(
    null
  );
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Hàm xử lý xem chi tiết sản phẩm
  const handleViewProduct = (item: PortfolioItem) => {
    setSelectedProduct(item);
    setIsViewModalOpen(true);
  };

  // Hàm xử lý tải xuống sản phẩm
  const handleDownloadProduct = (item: PortfolioItem) => {
    setSelectedProduct(item);
    setIsDownloadModalOpen(true);
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge
            variant="outline"
            className="mb-4 bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 border-orange-400 dark:border-orange-600 shadow-sm"
          >
            <Image className="w-4 h-4 mr-2" />
            {t.portfolio_badge}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.portfolio_title}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            {t.portfolio_subtitle}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {getPortfolioItems(t).map((item: PortfolioItem, index: number) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
                  <span className="text-xs font-medium text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/50 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex space-x-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleViewProduct(item)}
                      className="w-8 h-8 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-orange-100 dark:hover:bg-orange-600 transition-colors md:hover:scale-110 transform duration-200"
                      title={t.portfolio_view}
                    >
                      <Eye className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </button>
                    <button
                      onClick={() => handleDownloadProduct(item)}
                      className="w-8 h-8 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-600 transition-colors md:hover:scale-110 transform duration-200"
                      title={t.portfolio_download}
                    >
                      <Download className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-indigo-600 dark:from-orange-500 dark:to-indigo-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">{t.portfolio_cta_title}</h3>
            <p className="text-orange-50 mb-6">{t.portfolio_cta_desc}</p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-700 hover:bg-gray-100 hover:scale-105 transform duration-200 font-medium shadow-lg hover:shadow-xl"
                onClick={() => smoothScrollTo("contact")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t.portfolio_cta_button}
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
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProduct.title}
                  </h3>
                  <span className="text-sm font-medium text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/50 px-3 py-1 rounded-full">
                    {selectedProduct.category}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Thông tin chi tiết:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-200">
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
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-orange-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedProduct.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
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
                  className="w-full bg-orange-600 hover:bg-orange-700"
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
