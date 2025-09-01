import { useApp } from "../contexts/useApp";

export const translations = {
  vi: {
    // Header
    nav_home: "Trang chủ",
    nav_about: "Về chúng tôi",
    nav_services: "Dịch vụ",
    nav_portfolio: "Sản phẩm",
    nav_pricing: "Báo giá",
    nav_contact: "Liên hệ",
    nav_consult: "Tư vấn ngay",
    header_hotline: "Hotline:",
    header_support: "Hỗ trợ bảo hành:",
    header_working_hours: "7:30 - 17:30 (T2-T7)",
    header_tagline: "Thiết kế & Truyền thông - In ấn Quảng cáo",

    // Hero Section
    hero_badge: "Đông Thái Ninh, Hưng Yên",
    hero_title: "BH Design & Media",
    hero_subtitle: "Thiết kế & Truyền thông - In ấn Quảng cáo",
    hero_sologan: "Biến ý tưởng thành ấn tượng",
    hero_description:
      "Chuyên thiết kế banner, poster, standee, in phun khổ lớn, thi công biển quảng cáo tại Đông Thái Ninh, Hưng Yên",
    hero_cta_primary: "Tư vấn miễn phí",
    hero_cta_secondary: "Xem portfolio",
    hero_stats_projects: "Dự án hoàn thành",
    hero_stats_satisfaction: "Khách hàng hài lòng",
    hero_stats_experience: "Năm kinh nghiệm",
    hero_stats_warranty: "Tháng bảo hành",

    // About Section
    about_title: "Về chúng tôi",
    about_subtitle:
      "Đối tác tin cậy trong thiết kế & truyền thông - in ấn quảng cáo",
    about_description:
      "BH Design & Media tự hào là đơn vị thiết kế và in ấn quảng cáo hàng đầu tại Đông Thái Ninh, Hưng Yên. Với kinh nghiệm nhiều năm trong lĩnh vực thiết kế đồ họa và in ấn, chúng tôi cam kết mang đến những sản phẩm chất lượng cao, sáng tạo và đáp ứng mọi nhu cầu của khách hàng.",
    about_features_quality: "Chất lượng cao",
    about_features_creative: "Sáng tạo",
    about_features_fast: "Nhanh chóng",
    about_features_support: "Hỗ trợ 24/7",

    // Services Section
    services_title: "Dịch vụ của chúng tôi",
    services_subtitle: "Giải pháp toàn diện cho mọi nhu cầu quảng cáo",
    services_design_title: "Thiết kế đồ họa",
    services_design_desc: "Banner, Poster, Standee, Logo, Brochure",
    services_printing_title: "In ấn",
    services_printing_desc: "In phun khổ lớn, Decal, Photocopy, UV",
    services_construction_title: "Thi công",
    services_construction_desc: "Biển quảng cáo, CNC, LED, Chữ nổi",

    // Service Items
    service_design_title: "Thiết kế Quảng cáo",
    service_design_desc:
      "Banner, Poster, Standee, Ấn phẩm truyền thông chuyên nghiệp",
    service_printing_title: "In ấn Phun khổ lớn",
    service_printing_desc:
      "In phun khổ lớn, In decal, Photocopy, Scan màu chất lượng cao",
    service_construction_title: "Thi công Biển quảng cáo",
    service_construction_desc:
      "Biển quảng cáo, Bảng hiệu, Chữ nổi, Alu, Hộp đèn",
    service_cnc_title: "Gia công CNC",
    service_cnc_desc: "Cắt khắc CNC chính xác, đa dạng vật liệu",

    // Service Features
    service_design_feature1: "Thiết kế sáng tạo, độc đáo",
    service_design_feature2: "File vector chất lượng cao",
    service_design_feature3: "Chỉnh sửa miễn phí",
    service_design_feature4: "Giao file đúng format",

    service_printing_feature1: "Máy in công nghiệp hiện đại",
    service_printing_feature2: "Mực in chính hãng",
    service_printing_feature3: "Khổ in lên đến 3.2m",
    service_printing_feature4: "Độ bền màu cao",

    service_construction_feature1: "Thi công chuyên nghiệp",
    service_construction_feature2: "Vật liệu cao cấp",
    service_construction_feature3: "Bảo hành dài hạn",
    service_construction_feature4: "Lắp đặt tận nơi",

    service_cnc_feature1: "Máy CNC hiện đại",
    service_cnc_feature2: "Độ chính xác cao",
    service_cnc_feature3: "Đa dạng vật liệu",
    service_cnc_feature4: "Gia công nhanh chóng",

    // Service Categories
    service_category_title: "Danh mục dịch vụ chi tiết",
    service_category_signs_title: "Biển quảng cáo",
    service_category_signs_item1: "Biển Alu – chữ nổi",
    service_category_signs_item2: "Biển Mặt Tiền",
    service_category_signs_item3: "Biển Tòa Nhà",
    service_category_signs_item4: "Biển hộp đèn",
    service_category_signs_item5: "Biển Vẫy",
    service_category_signs_item6: "Biển bạt",
    service_category_signs_item7: "Biển LED",
    service_category_signs_item8: "Biển báo – Chỉ dẫn",

    service_category_printing_title: "Thiết kế in ấn",
    service_category_printing_item1: "In bạt",
    service_category_printing_item2: "In decal",
    service_category_printing_item3: "In Photocopy,scan màu",
    service_category_printing_item4: "In ấn phẩm truyền thông",
    service_category_printing_item5: "In card visit, thiếp mời, phong bì",
    service_category_processing_title: "Gia Công",
    service_category_processing_item1: "Chữ nổi",
    service_category_processing_item2: "Biển công ty",
    service_category_processing_item3: "Biển phòng / Bảng chức danh",
    service_category_processing_item4: "Cắt Khắc CNC / Lazer",

    // Why Choose Us
    why_choose_title: "Tại sao chọn BH Design & Media?",
    why_choose_quality_title: "Chất lượng cao",
    why_choose_quality_desc: "Sử dụng vật liệu cao cấp, công nghệ hiện đại",
    why_choose_delivery_title: "Giao hàng nhanh",
    why_choose_delivery_desc: "Cam kết giao hàng đúng hạn, lắp đặt tận nơi",
    why_choose_warranty_title: "Bảo hành 12 tháng",
    why_choose_warranty_desc: "Chế độ bảo hành dài hạn, hỗ trợ 24/7",
    why_choose_price_title: "Giá cả hợp lý",
    why_choose_price_desc: "Báo giá minh bạch, không phát sinh chi phí",

    // CTA Section
    cta_title: "Cần tư vấn chi tiết về dịch vụ?",
    cta_desc:
      "Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn miễn phí và báo giá chi tiết",
    cta_call: "Gọi ngay: 0966.616.636",

    // Portfolio Section
    portfolio_badge: "Portfolio",
    portfolio_item1_title: "Banner Quảng cáo",
    portfolio_item1_category: "Thiết kế",
    portfolio_item1_desc: "Banner khổ lớn cho sự kiện",
    portfolio_item2_title: "Poster Sự kiện",
    portfolio_item2_category: "Thiết kế",
    portfolio_item2_desc: "Poster chuyên nghiệp",
    portfolio_item3_title: "Standee Quảng cáo",
    portfolio_item3_category: "Thiết kế",
    portfolio_item3_desc: "Standee đứng chuyên nghiệp",
    portfolio_item4_title: "Biển Quảng cáo",
    portfolio_item4_category: "Thi công",
    portfolio_item4_desc: "Biển LED ngoài trời",
    portfolio_item5_title: "In Decal",
    portfolio_item5_category: "In ấn",
    portfolio_item5_desc: "Decal dán kính chất lượng cao",
    portfolio_item6_title: "Photocopy",
    portfolio_item6_category: "In ấn",
    portfolio_item6_desc: "In ấn tài liệu số lượng lớn",
    portfolio_item7_title: "Chữ nổi Alu",
    portfolio_item7_category: "Thi công",
    portfolio_item7_desc: "Chữ nổi cao cấp",
    portfolio_item8_title: "Hộp đèn",
    portfolio_item8_category: "Thi công",
    portfolio_item8_desc: "Hộp đèn quảng cáo",

    // Portfolio CTA
    portfolio_cta_title: "Bạn có dự án tương tự?",
    portfolio_cta_desc:
      "Hãy liên hệ ngay để được tư vấn và báo giá chi tiết cho dự án của bạn",
    portfolio_cta_button: "Tư vấn miễn phí",

    // Portfolio Section
    portfolio_title: "Sản phẩm mẫu",
    portfolio_subtitle:
      "Khám phá các dự án tiêu biểu đã được BH Design & Media thực hiện thành công. Mỗi sản phẩm đều thể hiện sự sáng tạo và chất lượng chuyên nghiệp.",
    portfolio_view: "Xem sản phẩm",
    portfolio_download: "Tải xuống",
    portfolio_more: "Xem thêm sản phẩm",

    // Pricing Section
    pricing_title: "Báo giá dịch vụ",
    pricing_subtitle: "Giá cả cạnh tranh, chất lượng đảm bảo",
    pricing_basic_title: "Cơ bản",
    pricing_basic_price: "500K",
    pricing_basic_period: "/dự án",
    pricing_standard_title: "Tiêu chuẩn",
    pricing_standard_price: "1.5M",
    pricing_standard_period: "/dự án",
    pricing_premium_title: "Cao cấp",
    pricing_premium_price: "3M",
    pricing_premium_period: "/dự án",
    pricing_cta: "Cần báo giá chi tiết?",
    pricing_cta_desc:
      "Hãy liên hệ ngay để được tư vấn và báo giá chính xác cho dự án của bạn",
    pricing_call: "Gọi ngay: 0966.616.636",
    pricing_zalo: "Chat Zalo tư vấn",

    // Pricing Plans
    pricing_plan_basic_title: "Thiết kế",
    pricing_plan_basic_price: "Từ 500.000đ",
    pricing_plan_basic_desc: "Thiết kế banner, poster, standee",
    pricing_plan_standard_title: "In ấn",
    pricing_plan_standard_price: "Từ 50.000đ/m²",
    pricing_plan_standard_desc: "In phun khổ lớn, decal, photocopy",
    pricing_plan_premium_desc: "Thi công biển quảng cáo, CNC",
    pricing_plan_premium_price: "Liên hệ báo giá",
    pricing_popular: "Phổ biến",

    // Pricing Notes & Offers
    pricing_notes_title: "💡 Lưu ý quan trọng",
    pricing_notes_vat: "Giá trên chưa bao gồm thuế VAT",
    pricing_notes_complex: "Thi công phức tạp cần khảo sát và báo giá riêng",
    pricing_notes_bulk: "Giảm giá cho đơn hàng số lượng lớn",
    pricing_notes_payment: "Thanh toán linh hoạt: tiền mặt, chuyển khoản",
    pricing_offers_title: "🎯 Ưu đãi đặc biệt",
    pricing_offers_new_customer: "Khách hàng mới",
    pricing_offers_large_order: "Đơn hàng trên 5 triệu",
    pricing_offers_loyal_customer: "Khách hàng thân thiết",
    pricing_offers_discount_10: "Giảm 10%",
    pricing_offers_discount_15: "Giảm 15%",
    pricing_offers_discount_20: "Giảm 20%",

    // Pricing Buttons
    pricing_call_quote: "Gọi báo giá",

    // Pricing Features
    pricing_basic_feature1: "Thiết kế banner khổ lớn",
    pricing_basic_feature2: "Poster sự kiện chuyên nghiệp",
    pricing_basic_feature3: "Standee đứng quảng cáo",
    pricing_basic_feature4: "Ấn phẩm truyền thông",
    pricing_basic_feature5: "Chỉnh sửa miễn phí",
    pricing_basic_feature6: "File vector chất lượng cao",

    pricing_standard_feature1: "In phun khổ lớn đến 3.2m",
    pricing_standard_feature2: "In decal dán kính",
    pricing_standard_feature3: "Photocopy số lượng lớn",
    pricing_standard_feature4: "Scan màu chất lượng cao",
    pricing_standard_feature5: "Mực in chính hãng",
    pricing_standard_feature6: "Độ bền màu cao",

    pricing_premium_feature1: "Biển quảng cáo ngoài trời",
    pricing_premium_feature2: "Chữ nổi Alu cao cấp",
    pricing_premium_feature3: "Hộp đèn quảng cáo",
    pricing_premium_feature4: "Gia công CNC chính xác",
    pricing_premium_feature5: "Lắp đặt tận nơi",
    pricing_premium_feature6: "Bảo hành 12 tháng",

    // Contact Service Options
    contact_service_design: "Thiết kế (Banner, Poster, Standee)",
    contact_service_printing: "In ấn (Phun khổ lớn, Decal, Photocopy)",
    contact_service_construction: "Thi công (Biển quảng cáo, CNC)",
    contact_service_consultation: "Tư vấn tổng thể",

    floating_call_phone: "Gọi điện",
    floating_chat_zalo: "Chat Zalo",
    floating_send_email: "Gửi email",
    floating_facebook: "Facebook",
    floating_scroll_top: "Lên đầu trang",

    // Contact Section
    contact_title: "Liên hệ với chúng tôi",
    contact_subtitle: "Hãy để lại thông tin để được tư vấn miễn phí",
    contact_address: "Địa chỉ",
    contact_hours: "Giờ làm việc",
    contact_form_title: "Gửi tin nhắn cho chúng tôi",
    contact_form_subtitle: "Điền thông tin bên dưới để được tư vấn miễn phí",
    contact_form_name: "Họ và tên",
    contact_form_phone: "Số điện thoại",
    contact_form_email: "Email",
    contact_form_service: "Dịch vụ quan tâm",
    contact_form_message: "Nội dung tin nhắn",
    contact_form_send: "Gửi tin nhắn",
    contact_form_sending: "Đang gửi...",
    contact_quick_title: "Liên hệ nhanh",
    contact_quick_subtitle: "Liên hệ ngay để được tư vấn miễn phí",
    contact_call: "Gọi ngay: 0966.616.636",
    contact_zalo: "Chat Zalo tư vấn",
    contact_or_email: "Hoặc gửi email",
    contact_success_message: "Tin nhắn của bạn đã được gửi thành công.",
    contact_success_service: "Dịch vụ",
    contact_success_response:
      "Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất!",

    // Contact Info Labels
    contact_hotline: "Hotline",
    contact_info_zalo: "Zalo",
    contact_email: "Email",
    contact_facebook: "Facebook",
    contact_working_hours: "Giờ làm việc",
    contact_working_hours_detail: "Sáng: 7:00 - 11:30",
    contact_working_hours_detail_2: "Chiều: 13:30 - 17:30",
    contact_address_detail: "Thôn Lục Nam, xã Đông Thái Ninh, Tỉnh Hưng Yên",

    // Footer
    footer_tagline: "Thiết kế & In ấn Quảng cáo",
    footer_description:
      "Chuyên cung cấp dịch vụ thiết kế, in ấn và thi công biển quảng cáo với chất lượng cao, giá cả hợp lý. Tư vấn khảo sát thiết kế miễn phí.",
    footer_quick_links: "Liên kết nhanh",
    footer_services_cnc: "Gia công CNC",
    footer_services_standee: "Standee - Ấn phẩm",
    footer_services_decal: "In decal - Photocopy",
    footer_services_led: "Biển LED - Hộp đèn",
    footer_services_building: "Biển tòa nhà - Chữ nổi",
    footer_contact_info: "Thông tin liên hệ",
    footer_address: "Đông Thái Ninh, Hưng Yên",
    footer_working_hours: "7:30 - 17:30 (T2-T7)",
    footer_copyright: "© 2025 BH Design & Media. Tất cả quyền được bảo lưu.",
    footer_commitment: "Cam kết chất lượng - Uy tín - Giá cả hợp lý",
    footer_special_offer: "Ưu đãi đặc biệt",
    footer_discount: "Giảm 10% cho khách hàng mới",
    footer_hot: "HOT",
    footer_delivery: "Giao hàng đúng hạn",
    footer_consultation: "Tư vấn miễn phí 24/7",

    // Form Validation Messages
    form_error_name_required: "Họ và tên là bắt buộc",
    form_error_name_invalid:
      "Họ và tên phải có 2-50 ký tự, chỉ chứa chữ cái và dấu cách",
    form_error_phone_required: "Số điện thoại là bắt buộc",
    form_error_phone_invalid: "Số điện thoại không hợp lệ (VD: 0123.456.789)",
    form_error_email_invalid: "Email không hợp lệ",
    form_error_service_required: "Vui lòng chọn dịch vụ quan tâm",
    form_error_message_required: "Nội dung tin nhắn là bắt buộc",
    form_error_message_min_length: "Nội dung tin nhắn phải có ít nhất 10 ký tự",

    // Form Placeholders
    form_placeholder_name: "Nhập họ và tên",
    form_placeholder_phone: "0966.616.636",
    form_placeholder_email: "example@email.com",
    form_placeholder_service: "Chọn dịch vụ",
    form_placeholder_message:
      "Mô tả chi tiết yêu cầu của bạn (ví dụ: Thiết kế banner 3x6m cho sự kiện, In 100 trang A4...)",

    // Map Section
    contact_map_title: "Vị trí của chúng tôi",
    contact_map_subtitle: "BH Design & Media - Thái Bình",

    // Common
    loading: "Đang tải...",
    error: "Có lỗi xảy ra",
    success: "Thành công",
    close: "Đóng",
    cancel: "Hủy",
    confirm: "Xác nhận",
  },
  en: {
    // Header
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_pricing: "Pricing",
    nav_contact: "Contact",
    nav_consult: "Consult Now",
    header_hotline: "Hotline:",
    header_support: "Support:",
    header_working_hours: "7:30 - 17:30 (Mon-Sat)",
    header_tagline: "Design & Media - Advertising Printing",

    // Hero Section
    hero_badge: "Dong Thai Ninh, Hung Yen",
    hero_title: "BH Design & Media",
    hero_subtitle: "Professional Design & Media - Advertising Printing",
    hero_sologan: "Transform ideas into impactful visuals",
    hero_description:
      "Specializing in banner design, poster, standee, large format printing, advertising construction in Dong Thai Ninh, Hung Yen",
    hero_cta_primary: "Free Consultation",
    hero_cta_secondary: "View Portfolio",
    hero_stats_projects: "Completed projects",
    hero_stats_satisfaction: "Satisfied customers",
    hero_stats_experience: "Years Experience",
    hero_stats_warranty: "Months warranty",

    // About Section
    about_title: "About Us",
    about_subtitle: "Trusted partner in design & advertising printing",
    about_description:
      "BH Design & Media is proud to be the leading design and advertising printing unit in Dong Thai Ninh, Hung Yen. With years of experience in graphic design and printing, we are committed to bringing high-quality, creative products that meet all customer needs.",
    about_features_quality: "High Quality",
    about_features_creative: "Creative",
    about_features_fast: "Fast",
    about_features_support: "24/7 Support",

    // Services Section
    services_title: "Our Services",
    services_subtitle: "Comprehensive solutions for all advertising needs",
    services_design_title: "Graphic Design",
    services_design_desc: "Banner, Poster, Standee, Logo, Brochure",
    services_printing_title: "Printing",
    services_printing_desc: "Large format printing, Decal, Photocopy, UV",
    services_construction_title: "Construction",
    services_construction_desc: "Advertising signs, CNC, LED, 3D letters",

    // Service Items
    service_design_title: "Advertising Design",
    service_design_desc:
      "Banner, Poster, Standee, Professional communication materials",
    service_printing_title: "Large Format Printing",
    service_printing_desc:
      "Large format printing, Decal, Photocopy, High-quality color scanning",
    service_construction_title: "Advertising Construction",
    service_construction_desc:
      "Advertising signs, Signage, 3D letters, Alu, Light boxes",
    service_cnc_title: "CNC Processing",
    service_cnc_desc: "Precise CNC cutting and engraving, diverse materials",

    // Service Features
    service_design_feature1: "Creative, unique design",
    service_design_feature2: "High-quality vector file",
    service_design_feature3: "Free revisions",
    service_design_feature4: "Deliver file in correct format",

    service_printing_feature1: "Modern industrial printer",
    service_printing_feature2: "Genuine ink",
    service_printing_feature3: "Print size up to 3.2m",
    service_printing_feature4: "High color durability",

    service_construction_feature1: "Professional construction",
    service_construction_feature2: "High-grade materials",
    service_construction_feature3: "Long-term warranty",
    service_construction_feature4: "On-site installation",

    service_cnc_feature1: "Modern CNC machine",
    service_cnc_feature2: "High precision",
    service_cnc_feature3: "Diverse materials",
    service_cnc_feature4: "Fast processing",

    // Service Categories
    service_category_title: "Detailed Service Categories",
    service_category_signs_title: "Advertising signs",
    service_category_signs_item1: "Alu signs – raised letters",
    service_category_signs_item2: "Facade signs",
    service_category_signs_item3: "Building signs",
    service_category_signs_item4: "Light box signs",
    service_category_signs_item5: "Waving signs",
    service_category_signs_item6: "Tarpaulin signs",
    service_category_signs_item7: "LED signs",
    service_category_signs_item8: "Directional signs",

    service_category_printing_title: "Print design",
    service_category_printing_item1: "Tarpaulin printing",
    service_category_printing_item2: "Decal printing",
    service_category_printing_item3: "Photocopy",
    service_category_printing_item4: "Publication printing media",
    service_category_printing_item5:
      "Print business cards, invitations, envelopes",

    service_category_processing_title: "Processing",
    service_category_processing_item1: "Raised letters",
    service_category_processing_item2: "Company signs",
    service_category_processing_item3: "Room signs / Nameplates",
    service_category_processing_item4: "CNC / Laser cutting and engraving",

    // Why Choose Us
    why_choose_title: "Why choose BH Design & Media?",
    why_choose_quality_title: "High Quality",
    why_choose_quality_desc: "Using high-grade materials, modern technology",
    why_choose_delivery_title: "Fast Delivery",
    why_choose_delivery_desc:
      "Commitment to on-time delivery, on-site installation",
    why_choose_warranty_title: "12-Month Warranty",
    why_choose_warranty_desc: "Long-term warranty policy, 24/7 support",
    why_choose_price_title: "Reasonable Price",
    why_choose_price_desc: "Transparent quotation, no hidden costs",

    // CTA Section
    cta_title: "Need detailed service consultation?",
    cta_desc:
      "Our team of experts is ready to provide free consultation and detailed quotation",
    cta_call: "Call now: 0966.616.636",

    // Portfolio Section
    portfolio_badge: "Portfolio",
    portfolio_item1_title: "Advertising Banner",
    portfolio_item1_category: "Design",
    portfolio_item1_desc: "Large format banner for events",
    portfolio_item2_title: "Event Poster",
    portfolio_item2_category: "Design",
    portfolio_item2_desc: "Professional poster",
    portfolio_item3_title: "Advertising Standee",
    portfolio_item3_category: "Design",
    portfolio_item3_desc: "Professional standing standee",
    portfolio_item4_title: "Advertising Sign",
    portfolio_item4_category: "Construction",
    portfolio_item4_desc: "Outdoor LED sign",
    portfolio_item5_title: "Decal Printing",
    portfolio_item5_category: "Printing",
    portfolio_item5_desc: "High-quality glass decal",
    portfolio_item6_title: "Photocopy",
    portfolio_item6_category: "Printing",
    portfolio_item6_desc: "Large volume document printing",
    portfolio_item7_title: "Alu Raised Letters",
    portfolio_item7_category: "Construction",
    portfolio_item7_desc: "High-grade raised letters",
    portfolio_item8_title: "Light Box",
    portfolio_item8_category: "Construction",
    portfolio_item8_desc: "Advertising light box",

    // Portfolio CTA
    portfolio_cta_title: "Do you have a similar project?",
    portfolio_cta_desc:
      "Contact us now for detailed consultation and quotation for your project",
    portfolio_cta_button: "Free consultation",

    // Portfolio Section
    portfolio_title: "Sample Products",
    portfolio_subtitle: "Our outstanding projects",
    portfolio_view: "View Product",
    portfolio_download: "Download",
    portfolio_more: "View More Products",

    // Pricing Section
    pricing_title: "Service Pricing",
    pricing_subtitle: "Competitive prices, guaranteed quality",
    pricing_basic_title: "Basic",
    pricing_basic_price: "500K",
    pricing_basic_period: "/project",
    pricing_standard_title: "Standard",
    pricing_standard_price: "1.5M",
    pricing_standard_period: "/project",
    pricing_premium_title: "Premium",
    pricing_premium_price: "3M",
    pricing_premium_period: "/project",
    pricing_cta: "Need detailed quote?",
    pricing_cta_desc:
      "Contact us now for consultation and accurate pricing for your project",
    pricing_call: "Call now: 0966.616.636",
    pricing_zalo: "Chat Zalo for consultation",

    // Pricing Plans
    pricing_plan_basic_title: "Design",
    pricing_plan_basic_price: "From 500K VND",
    pricing_plan_basic_desc: "Banner, poster, standee design",
    pricing_plan_standard_title: "Printing",
    pricing_plan_standard_price: "From 50K VND/m²",
    pricing_plan_standard_desc: "Large format printing, decal, photocopy",
    pricing_plan_premium_desc: "Advertising construction, CNC",
    pricing_plan_premium_price: "Request Quote",
    pricing_popular: "Popular",

    // Pricing Notes & Offers
    pricing_notes_title: "💡 Important Notes",
    pricing_notes_vat: "Prices do not include VAT",
    pricing_notes_complex:
      "Complex construction requires survey and separate quotation",
    pricing_notes_bulk: "Discount for large quantity orders",
    pricing_notes_payment: "Flexible payment: cash, bank transfer",
    pricing_offers_title: "🎯 Special Offers",
    pricing_offers_new_customer: "New customers",
    pricing_offers_large_order: "Orders over 5 million",
    pricing_offers_loyal_customer: "Loyal customers",
    pricing_offers_discount_10: "10% off",
    pricing_offers_discount_15: "15% off",
    pricing_offers_discount_20: "20% off",

    // Pricing Buttons
    pricing_call_quote: "Request Quote",

    // Pricing Features
    pricing_basic_feature1: "Large format banner design",
    pricing_basic_feature2: "Professional event poster",
    pricing_basic_feature3: "Advertising standee",
    pricing_basic_feature4: "Communication materials",
    pricing_basic_feature5: "Free revisions",
    pricing_basic_feature6: "High-quality vector file",

    pricing_standard_feature1: "Large format printing up to 3.2m",
    pricing_standard_feature2: "Glass decal printing",
    pricing_standard_feature3: "Large volume photocopy",
    pricing_standard_feature4: "High-quality color scanning",
    pricing_standard_feature5: "Genuine ink",
    pricing_standard_feature6: "High color durability",

    pricing_premium_feature1: "Outdoor advertising signs",
    pricing_premium_feature2: "High-grade Alu raised letters",
    pricing_premium_feature3: "Advertising light boxes",
    pricing_premium_feature4: "Precise CNC processing",
    pricing_premium_feature5: "On-site installation",
    pricing_premium_feature6: "12-month warranty",

    // Contact Service Options
    contact_service_design: "Design (Banner, Poster, Standee)",
    contact_service_printing: "Printing (Large format, Decal, Photocopy)",
    contact_service_construction: "Construction (Advertising signs, CNC)",
    contact_service_consultation: "General consultation",

    // Contact Section
    contact_title: "Contact Us",
    contact_subtitle: "Leave your information for free consultation",
    contact_hours: "Working Hours",
    contact_form_title: "Send us a message",
    contact_form_subtitle:
      "Fill in the information below for free consultation",
    contact_form_name: "Full Name",
    contact_form_phone: "Phone Number",
    contact_form_email: "Email",
    contact_form_service: "Service of Interest",
    contact_form_message: "Message Content",
    contact_form_send: "Send Message",
    contact_form_sending: "Sending...",
    contact_quick_title: "Quick Contact",
    contact_quick_subtitle: "Contact now for free consultation",
    contact_call: "Call now: 0966.616.636",
    contact_zalo: "Chat Zalo for consultation",
    contact_or_email: "Or send email",
    contact_success_message: "Your message has been sent successfully.",
    contact_success_service: "Service",
    contact_success_response: "We will contact you as soon as possible!",

    // Contact Info Labels
    contact_hotline: "Hotline",
    contact_info_zalo: "Zalo",
    contact_email: "Email",
    contact_facebook: "Facebook",
    contact_address: "Address",
    contact_working_hours: "Working Hours",
    contact_working_hours_detail: "Morning: 7:00 - 11:30",
    contact_working_hours_detail_2: "Afternoon: 13:30 - 17:30",
    contact_address_detail: "Luc Nam, Dong Thai Ninh, Hung Yen",

    // Footer
    footer_tagline: "Design & Advertising Printing",
    footer_description:
      "Specializing in design, printing and advertising construction services with high quality, reasonable prices. Free design consultation and survey.",
    footer_quick_links: "Quick Links",
    footer_services_cnc: "CNC Processing",
    footer_services_standee: "Standee - Publications",
    footer_services_decal: "Decal - Photocopy",
    footer_services_led: "LED Signs - Light Boxes",
    footer_services_building: "Building Signs - Raised Letters",
    footer_contact_info: "Contact Information",
    footer_address: "Dong Thai Ninh, Hung Yen",
    footer_working_hours: "7:30 - 17:30 (Mon-Sat)",
    footer_copyright: "© 2025 BH Design & Media. All rights reserved.",
    footer_commitment: "Committed to quality - Reputation - Reasonable prices",
    footer_special_offer: "Special Offer",
    footer_discount: "10% discount for new customers",
    footer_hot: "HOT",
    footer_delivery: "On-time delivery",
    footer_consultation: "Free consultation 24/7",

    // Form Validation Messages
    form_error_name_required: "Full name is required",
    form_error_name_invalid:
      "Full name must be 2-50 characters, containing only letters and spaces",
    form_error_phone_required: "Phone number is required",
    form_error_phone_invalid: "Invalid phone number (e.g., 0123.456.789)",
    form_error_email_invalid: "Invalid email",
    form_error_service_required: "Please select a service of interest",
    form_error_message_required: "Message content is required",
    form_error_message_min_length:
      "Message content must be at least 10 characters",

    // Form Placeholders
    form_placeholder_name: "Enter your full name",
    form_placeholder_phone: "0966.616.636",
    form_placeholder_email: "example@email.com",
    form_placeholder_service: "Select service",
    form_placeholder_message:
      "Describe your detailed request (e.g., Design a 3x6m banner for an event, Print 100 A4 pages...)",

    // Map Section
    contact_map_title: "Our Location",
    contact_map_subtitle: "BH Design & Media - Thai Binh",

    // Floating Buttons Tooltips
    floating_call_phone: "Call Phone",
    floating_chat_zalo: "Chat Zalo",
    floating_send_email: "Send Email",
    floating_facebook: "Facebook",
    floating_scroll_top: "Scroll to Top",

    // Common
    loading: "Loading...",
    error: "An error occurred",
    success: "Success",
    close: "Close",
    cancel: "Cancel",
    confirm: "Confirm",
  },
};

export const useTranslation = () => {
  const { language } = useApp();
  return translations[language];
};
