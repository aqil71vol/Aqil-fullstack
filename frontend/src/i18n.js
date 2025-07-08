// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome to Aqil Humanitarian Platform",
        },
      },
      ar: {
        translation: {
          welcome: "مرحبا بك في منصة عقيل الإنسانية",
        },
      },
    },
  });

export default i18n;
