// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ar from './ar.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        ar: { translation: ar },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // React already handles escaping
    },
});

export default i18n;