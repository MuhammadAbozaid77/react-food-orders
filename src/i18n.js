import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arabicFile from "./../public/Locale/Ar.json";
import englishFile from "./../public/Locale/En.json";
const resources = {
  en: {
    translation: englishFile,
  },
  ar: {
    translation: arabicFile,
  },
};

const languageInLocalStorage = localStorage.getItem("i18nextLng") || "en";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: languageInLocalStorage,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
