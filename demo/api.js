const express = require('express');
const i18next = require('i18next'),
  FilesystemBackend = require('i18next-sync-fs-backend'),
  i18nextMiddleware = require('i18next-express-middleware');
const path = require('path');

i18next
  .use(i18nextMiddleware.LanguageDetector)
  .use(FilesystemBackend)
  .init(
    {
      debug: false,
      initImmediate: false,
      fallbackLng: 'en',
      whitelist: ['en', 'ar'],
      load: ['en', 'ar'],
      preload: ['en', 'ar'],
      lowerCaseLng: true,
      joinArrays: true,
      returnObjects: true,
      ns: ['site'],
      defaultNS: 'site',
      detection: {
        order: ['querystring'],
        // keys or params to lookup language from
        lookupQuerystring: 'lng',
        caches: false
      },
      backend: {
        loadPath: path.join(__dirname, './data/locales/{{ns}}/{{lng}}.json')
      }
    });

module.exports = function (app) {
  app.use(i18nextMiddleware.handle(i18next));
  app.use('/locales', express.static(path.join(__dirname, './data/locales/')));
  app.get('/api/locales/site/:key', (req, res) => {
    const key = req.params.key;

    const site = req.i18n.t(key);
    res.json(site);
  });

};
