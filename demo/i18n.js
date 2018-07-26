import i18next from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import Fetch from 'i18next-fetch-backend';

i18next
  .use(LngDetector)
  .use(Fetch)
  .init({
    debug: false,
    initImmediate: false,
    fallbackLng: 'en',
    whitelist: ['en', 'ar'],
    load: ['en', 'ar'],
    preload: ['en', 'ar'],
    lowerCaseLng: true,
    joinArrays: true,
    returnObjects: true,
    ns: ['app'],
    defaultNS: 'app',
    detection: {
      order: ['htmlTag', 'path'],
      lookupFromPathIndex: 0
    },
    backend: {
      loadPath: '/locales/{{ns}}/{{lng}}.json'
    }
  });

  export default i18next;
