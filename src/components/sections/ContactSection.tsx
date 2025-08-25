import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useTranslation } from "../../translations/index";
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
  const t = useTranslation();
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
      "thiet-ke": t.contact_service_design,
      "in-an": t.contact_service_printing,
      "thi-cong": t.contact_service_construction,
      "tu-van": t.contact_service_consultation,
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
          error = t.form_error_name_required;
        } else if (!validateName(value)) {
          error = t.form_error_name_invalid;
        }
        break;

      case "phone":
        if (!value.trim()) {
          error = t.form_error_phone_required;
        } else if (!validatePhone(value)) {
          error = t.form_error_phone_invalid;
        }
        break;

      case "email":
        if (value.trim() && !validateEmail(value)) {
          error = t.form_error_email_invalid;
        }
        break;

      case "service":
        if (!value) {
          error = t.form_error_service_required;
        }
        break;

      case "message":
        if (!value.trim()) {
          error = t.form_error_message_required;
        } else if (value.trim().length < 10) {
          error = t.form_error_message_min_length;
        }
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-400 dark:border-blue-600 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            {t.nav_contact}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact_title}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            {t.contact_subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Form + Contact Info */}
          <div className="space-y-5">
            {/* Contact Info */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                  {t.contact_title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      {t.contact_hotline}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200 text-sm">
                      0966.616.636
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      {t.contact_info_zalo}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200 text-sm">
                      https://zalo.me/0966616636
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      {t.contact_email}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200 text-sm">
                      bhdesignmedia@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
                    <Facebook className="w-3.5 h-3.5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      {t.contact_facebook}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200 text-sm">
                      https://www.facebook.com/tuanbaodtb
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      {t.contact_address}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {t.contact_address_detail}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="w-3.5 h-3.5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      {t.contact_working_hours}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {t.contact_working_hours_detail}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {t.contact_form_title}
                </CardTitle>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  {t.contact_form_subtitle}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                    >
                      {t.contact_form_name}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder={t.form_placeholder_name}
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
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                    >
                      {t.contact_form_phone}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder={t.form_placeholder_phone}
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
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                    >
                      {t.contact_form_email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder={t.form_placeholder_email}
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
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                    >
                      {t.contact_form_service}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent dark:bg-gray-800 dark:text-white ${
                        errors.service
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                      }`}
                    >
                      <option value="">{t.form_placeholder_service}</option>
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
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                    >
                      {t.contact_form_message}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder={t.form_placeholder_message}
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
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 mr-2" />
                    )}
                    {isLoading ? t.contact_form_sending : t.contact_form_send}
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
                <CardTitle className="text-base font-bold text-gray-900 dark:text-white">
                  {t.contact_map_title}
                </CardTitle>
                <p className="text-gray-700 dark:text-gray-200 text-xs">
                  {t.contact_map_subtitle}
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
                <h3 className="text-lg font-bold mb-4">
                  🚀 {t.contact_quick_title}
                </h3>
                <p className="text-blue-50 text-sm mb-6">
                  {t.contact_quick_subtitle}
                </p>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-white text-blue-700 hover:bg-gray-100 hover:scale-105 transform duration-200 py-3 font-medium shadow-lg hover:shadow-xl"
                    onClick={() => window.open("tel:0966616636")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {t.contact_call}
                  </Button>
                  <Button
                    className="w-full bg-white text-blue-700 hover:bg-gray-100 hover:scale-105 transform duration-200 py-3 font-medium shadow-lg hover:shadow-xl"
                    onClick={() =>
                      window.open("https://zalo.me/0966616636", "_blank")
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t.contact_zalo}
                  </Button>

                  <div className="mt-6 pt-4 border-t border-blue-400">
                    <div className="text-center">
                      <p className="text-blue-50 text-xs mb-2">
                        {t.contact_or_email}
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
            <DialogTitle className="text-center text-xl font-bold text-gray-900 dark:text-white">
              {t.success}
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 dark:text-gray-300">
              {t.contact_success_message}
              <br />
              <span className="font-medium">
                {t.contact_success_service}:{" "}
                {getServiceDisplayName(formData.service)}
              </span>
              <br />
              {t.contact_success_response}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {t.close}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
