import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer
      className="bg-white dark:bg-gray-900 text-white mt-auto"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-leaf">
              Urban Harvest Hub
            </h3>
            <p className="text-black dark:text-white">{t("aboutDesc")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("quickLinks") || "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-black dark:text-white hover:text-leaf transition-colors focus:outline-none focus:ring-2 focus:ring-leaf"
                >
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link
                  to="/workshops"
                  className="text-black dark:text-white hover:text-leaf transition-colors focus:outline-none focus:ring-2 focus:ring-leaf"
                >
                  {t("workshops")}
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-black dark:text-white hover:text-leaf transition-colors focus:outline-none focus:ring-2 focus:ring-leaf"
                >
                  {t("events")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black dark:text-white hover:text-leaf transition-colors focus:outline-none focus:ring-2 focus:ring-leaf"
                >
                  {t("about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("contactUs") || "Contact Us"}
            </h3>
            <ul className="space-y-2 text-black dark:text-white">
              <li>📧 eco@urbanharvest.com</li>
              <li>📞 (555) 123-4567</li>
              <li>📍 123 Green Street, Eco City</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("followUs") || "Follow Us"}
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black dark:text-white hover:text-leaf transition-colors focus:outline-none focus:ring-2 focus:ring-leaf"
                aria-label="Facebook"
              >
                📘 Facebook
              </a>
              <a
                href="#"
                className="text-black dark:text-white hover:text-leaf transition-colors focus:outline-none focus:ring-2 focus:ring-leaf"
                aria-label="Instagram"
              >
                📸 Instagram
              </a>
              <a
                href="#"
                className="text-black dark:text-white hover:text-leaf transition-colors focus:outline-none focus:ring-2 focus:ring-leaf"
                aria-label="Twitter"
              >
                🐦 Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-black dark:text-white">
          <p>
            &copy; 2026 Urban Harvest Hub.{" "}
            {t("allRightsReserved") || "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
