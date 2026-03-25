import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationPT from './locales/pt/translation.json';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
  pt: { translation: translationPT },
  en: { translation: translationEN },
  es: { translation: translationES }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // Definido PT como idioma raiz inicial
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React já se responsabiliza por escape de XSS
    }
  });

export default i18n;
