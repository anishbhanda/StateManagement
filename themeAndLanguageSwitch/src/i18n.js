import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      paragraph: "Hello, this is a paragraph in English."
    }
  },
  fr: {
    translation: {
      paragraph: "Bonjour, ceci est un paragraphe en français."
    }
  },
  hi: {
    translation: {
      paragraph: "नमस्ते, यह हिंदी में एक पैराग्राफ है।"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
