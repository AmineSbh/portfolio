import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Les traductions sont embarquées dans le bundle (~7 Ko) plutôt que chargées
// par HTTP : cela évite l'affichage des clés brutes au premier rendu.
import fr from "./locales/fr/translation.json";
import en from "./locales/en/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    fallbackLng: "fr",
    supportedLngs: ["fr", "en"],
    nonExplicitSupportedLngs: true, // "fr-FR" -> "fr"
    debug: import.meta.env.DEV,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
