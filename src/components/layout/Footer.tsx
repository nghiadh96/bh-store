import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { useTranslation } from "../../translations/index";
import logo from "../../assets/images/bhstore.png";
import { smoothScrollTo } from "../../utils/scroll";

export default function Footer() {
  const t = useTranslation();

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
                <p className="text-sm text-gray-300">{t.footer_tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{t.footer_description}</p>
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
            <h4 className="font-bold text-lg">{t.services_title}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>🎨 {t.services_design_title}</li>
              <li>🖨️ {t.services_printing_title}</li>
              <li>🏗️ {t.services_construction_title}</li>
              <li>⚙️ {t.footer_services_cnc}</li>
              <li>📋 {t.footer_services_standee}</li>
              <li>🏷️ {t.footer_services_decal}</li>
              <li>💡 {t.footer_services_led}</li>
              <li>🏢 {t.footer_services_building}</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">{t.footer_quick_links}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => smoothScrollTo("home")}
                  className="text-gray-300 hover:text-white transition-colors md:hover:scale-105 transform duration-200"
                >
                  {t.nav_home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScrollTo("services")}
                  className="text-gray-300 hover:text-white transition-colors md:hover:scale-105 transform duration-200"
                >
                  {t.nav_services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScrollTo("portfolio")}
                  className="text-gray-300 hover:text-white transition-colors md:hover:scale-105 transform duration-200"
                >
                  {t.nav_portfolio}
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScrollTo("about")}
                  className="text-gray-300 hover:text-white transition-colors md:hover:scale-105 transform duration-200"
                >
                  {t.nav_about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => smoothScrollTo("contact")}
                  className="text-gray-300 hover:text-white transition-colors md:hover:scale-105 transform duration-200"
                >
                  {t.nav_contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">{t.footer_contact_info}</h4>
            <div className="space-y-3 text-sm text-gray-300">
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
                <span>{t.footer_address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{t.footer_working_hours}</span>
              </div>
            </div>

            <Separator className="bg-gray-700" />

            <div className="bg-blue-600 rounded-lg p-4">
              <h5 className="font-bold mb-2 flex items-center">
                <Star className="w-4 h-4 mr-2" />
                {t.footer_special_offer}
              </h5>
              <div className="text-sm">
                {t.footer_discount}
                <Badge variant="secondary" className="ml-2">
                  {t.footer_hot}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="bg-gray-700 my-8" />
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center text-sm text-gray-300">
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-4">
            <span className="flex items-center justify-center md:justify-start">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              {t.footer_commitment}
            </span>
            <span className="flex items-center justify-center md:justify-start">
              <Clock className="w-4 h-4 mr-2 text-green-400" />
              {t.footer_delivery}
            </span>
            <span className="flex items-center justify-center md:justify-start">
              <Phone className="w-4 h-4 mr-2 text-blue-400" />
              {t.footer_consultation}
            </span>
          </div>
          <p className="text-center md:text-left">{t.footer_copyright}</p>
        </div>
      </div>
    </footer>
  );
}
