import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Loader2,
  Facebook,
} from "lucide-react";

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  // Mapping service values to display names
  const getServiceDisplayName = (serviceValue: string) => {
    const serviceMap: { [key: string]: string } = {
      "thiet-ke": "Thiết kế (Banner, Poster, Standee)",
      "in-an": "In ấn (Phun khổ lớn, Decal, Photocopy)",
      "thi-cong": "Thi công (Biển quảng cáo, CNC)",
      "tu-van": "Tư vấn tổng thể",
    };
    return serviceMap[serviceValue] || serviceValue;
  };

  // Validation functions
  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-ZÀ-ỹ\s]{2,50}$/;
    return nameRegex.test(name.trim());
  };

  const validatePhone = (phone: string) => {
    // Vietnamese phone number patterns - more strict
    const cleanPhone = phone.replace(/[\s\.\-]/g, ""); // Remove spaces, dots, dashes

    // Must be exactly 10 digits starting with 0, or 12 digits starting with +84
    const phoneRegex =
      /^(0(3[2-9]|5[689]|7[06-9]|8[1-689]|9[0-46-9])[0-9]{7}|\+84(3[2-9]|5[689]|7[06-9]|8[1-689]|9[0-46-9])[0-9]{7})$/;

    return phoneRegex.test(cleanPhone);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });

    // Validation
    let hasErrors = false;
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Họ và tên là bắt buộc";
      hasErrors = true;
    } else if (!validateName(formData.name)) {
      newErrors.name =
        "Họ và tên phải có 2-50 ký tự, chỉ chứa chữ cái và dấu cách";
      hasErrors = true;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Số điện thoại là bắt buộc";
      hasErrors = true;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ (VD: 0123.456.789)";
      hasErrors = true;
    }

    // Email validation (optional but if provided must be valid)
    if (formData.email.trim() && !validateEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ";
      hasErrors = true;
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Vui lòng chọn dịch vụ quan tâm";
      hasErrors = true;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Nội dung tin nhắn là bắt buộc";
      hasErrors = true;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Nội dung tin nhắn phải có ít nhất 10 ký tự";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // CÁCH CẤU HÌNH FORMSPREE:
      // 1. Đăng ký tại https://formspree.io
      // 2. Tạo form mới và lấy form ID
      // 3. Hoặc sử dụng email endpoint: https://formspree.io/f/your-email@domain.com
      // 4. Thay thế endpoint bên dưới:
      const response = await fetch("https://formspree.io/f/xanbrqrr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: getServiceDisplayName(formData.service),
          serviceValue: formData.service,
          message: formData.message,
          _subject: `Liên hệ từ ${formData.name} - ${getServiceDisplayName(
            formData.service
          )} - BH Design & Media`,
        }),
      });

      console.log("Formspree response:", response.status, response.statusText);

      if (response.ok) {
        setShowSuccessDialog(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        const errorText = await response.text();
        console.error("Formspree error:", errorText);
        alert(
          `Có lỗi xảy ra (${response.status}). Vui lòng thử lại hoặc liên hệ trực tiếp qua điện thoại!`
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      alert(
        "Không thể kết nối. Vui lòng thử lại hoặc liên hệ trực tiếp qua điện thoại: 0123.456.789"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Validate field on blur
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Họ và tên là bắt buộc";
        } else if (!validateName(value)) {
          error = "Họ và tên phải có 2-50 ký tự, chỉ chứa chữ cái và dấu cách";
        }
        break;

      case "phone":
        if (!value.trim()) {
          error = "Số điện thoại là bắt buộc";
        } else if (!validatePhone(value)) {
          error = "Số điện thoại không hợp lệ (VD: 0123.456.789)";
        }
        break;

      case "email":
        if (value.trim() && !validateEmail(value)) {
          error = "Email không hợp lệ";
        }
        break;

      case "service":
        if (!value) {
          error = "Vui lòng chọn dịch vụ quan tâm";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Nội dung tin nhắn là bắt buộc";
        } else if (value.trim().length < 10) {
          error = "Nội dung tin nhắn phải có ít nhất 10 ký tự";
        }
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            Liên hệ
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hãy liên hệ ngay để được tư vấn miễn phí và báo giá chi tiết cho dự
            án của bạn. Chúng tôi luôn sẵn sàng hỗ trợ 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Form + Contact Info */}
          <div className="space-y-5">
            {/* Contact Info */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-900">
                  Thông tin liên hệ
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Hotline</p>
                    <p className="text-gray-600 text-sm">0966.616.636</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Zalo</p>
                    <p className="text-gray-600 text-sm">
                      https://zalo.me/0966616636
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Email</p>
                    <p className="text-gray-600 text-sm">
                      bhdesignmedia@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
                    <Facebook className="w-3.5 h-3.5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      Facebook
                    </p>
                    <p className="text-gray-600 text-sm">
                      https://www.facebook.com/tuanbaodtb
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Địa chỉ</p>
                    <p className="text-gray-600 text-sm">
                      Xóm 6, Thôn Lục Nam, Xã Thái Xuyên, Huyện Thái Thụy, Tỉnh
                      Thái Bình
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="w-3.5 h-3.5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      Giờ làm việc
                    </p>
                    <p className="text-gray-600 text-sm">
                      7:30 - 17:30 (Thứ 2 - Thứ 7)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-900">
                  Gửi tin nhắn cho chúng tôi
                </CardTitle>
                <p className="text-gray-600 text-sm">
                  Điền thông tin bên dưới để được tư vấn miễn phí
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Nhập họ và tên"
                      className={`w-full ${
                        errors.name ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="0966.616.636"
                      className={`w-full ${
                        errors.phone ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="example@email.com"
                      className={`w-full ${
                        errors.email ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Dịch vụ quan tâm <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent ${
                        errors.service
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-blue-500"
                      }`}
                    >
                      <option value="">Chọn dịch vụ</option>
                      <option value="thiet-ke">
                        Thiết kế (Banner, Poster, Standee)
                      </option>
                      <option value="in-an">
                        In ấn (Phun khổ lớn, Decal, Photocopy)
                      </option>
                      <option value="thi-cong">
                        Thi công (Biển quảng cáo, CNC)
                      </option>
                      <option value="tu-van">Tư vấn tổng thể</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nội dung tin nhắn <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Mô tả chi tiết yêu cầu của bạn (ví dụ: Thiết kế banner 3x6m cho sự kiện, In 100 trang A4...)"
                      rows={3}
                      className={`w-full ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 mr-2" />
                    )}
                    {isLoading ? "Đang gửi..." : "Gửi tin nhắn"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Google Maps + Quick Contact */}
          <div className="space-y-5">
            {/* Google Maps */}
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold text-gray-900">
                  Vị trí của chúng tôi
                </CardTitle>
                <p className="text-gray-600 text-xs">
                  BH Design & Media - Thái Bình
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-[52vh] rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d520.9316425253458!2d106.54274481459518!3d20.500634504158356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a090026810b6d%3A0x156735f5cce1791e!2sBH%20Design%20%26%20Media!5e0!3m2!1svi!2s!4v1755830332569!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BH Design & Media - Google Maps"
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-6 min-h-[200px] flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-4">🚀 Liên hệ nhanh</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Liên hệ ngay để được tư vấn miễn phí
                </p>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-white text-blue-700 hover:bg-gray-100 hover:scale-105 transform duration-200 py-3"
                    onClick={() => window.open("tel:0966616636")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Gọi ngay: 0966.616.636
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white text-blue-700 hover:bg-white hover:text-blue-700 hover:scale-105 transform duration-200 py-3"
                    onClick={() =>
                      window.open("https://zalo.me/0966616636", "_blank")
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat Zalo tư vấn
                  </Button>

                  <div className="mt-6 pt-4 border-t border-blue-400">
                    <div className="text-center">
                      <p className="text-blue-100 text-xs mb-2">
                        Hoặc gửi email
                      </p>
                      <p className="text-white text-sm font-medium">
                        bhdesignmedia@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <DialogTitle className="text-center text-xl font-bold text-gray-900">
              Cảm ơn bạn!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Tin nhắn của bạn đã được gửi thành công.
              <br />
              <span className="font-medium">
                Dịch vụ: {getServiceDisplayName(formData.service)}
              </span>
              <br />
              Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Đóng
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
