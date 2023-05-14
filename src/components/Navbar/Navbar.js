import "./Navbar.css";
import "./dropdownmenu.css";
import arrow from "../../Assets/arrow.svg";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default function Navbar() {
  let { t, i18n } = useTranslation();

  return (
    <nav className="navbar flex-between-center">
      <a className="brand" href="#">
        {t("links.brand")}
      </a>

      <ul className="links flex-between-center">
        <li className="link flex-center-center dropdown-container">
          {t("links.fields")}
          <img src={arrow} alt="arrow" style={{ width: "10px" }} />
          <div className="dropdownmenu">
            <a href="#" className="dropdown-link">
              Front-End
            </a>
            <a href="#" className="dropdown-link">
              Back-End
            </a>
            <a href="#" className="dropdown-link">
              Mobile App
            </a>
            <a href="#" className="dropdown-link">
              Network
            </a>
            <a href="#" className="dropdown-link">
              Security
            </a>
            <a href="#" className="dropdown-link">
              IOT
            </a>
          </div>
        </li>
        <li className="link flex-center-center dropdown-container">
          {t("links.technologies")}{" "}
          <img src={arrow} alt="arrow" style={{ width: "10px" }} />
          <div className="dropdownmenu-lg">
            <a href="#" className="dropdown-link">
              ReactJS
            </a>
            <a href="#" className="dropdown-link">
              Vue.JS
            </a>
            <a href="#" className="dropdown-link">
              Angular
            </a>
            <a href="#" className="dropdown-link">
              Node.js
            </a>
            <a href="#" className="dropdown-link">
              React Native
            </a>
            <a href="#" className="dropdown-link">
              Flutter
            </a>
            <a href="#" className="dropdown-link">
              .Net
            </a>
            <a href="#" className="dropdown-link">
              PHP(Laravel)
            </a>
            <a href="#" className="dropdown-link">
              Python(Django)
            </a>
            <a href="#" className="dropdown-link">
              Kali Linux
            </a>
            <a href="#" className="dropdown-link">
              Apache
            </a>
            <a href="#" className="dropdown-link">
              NGINX
            </a>
          </div>
        </li>
        <li className="link">{t("links.about")}</li>
        <li className="link">{t("links.contact")}</li>
      </ul>

      <ul className="langs flex-center-center">
        <li className="lang">
          <a
            onClick={() => {
              i18n.changeLanguage("fa");
            }}
            href="#"
          >
            فارسی/
          </a>
        </li>
        <li className="lang">
          <a
            onClick={() => {
              i18n.changeLanguage("en");
              console.log("english");
            }}
            href="#"
          >
            English
          </a>
        </li>
      </ul>
    </nav>
  );
}
