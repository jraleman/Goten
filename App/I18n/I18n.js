import I18n from 'react-native-i18n';

// English is going to be the fallback language.
I18n.fallbacks = true;
I18n.translations = {
  en: require("./languages/en.json");
};
// We just care about the language code, ignoring the localization :o
// i.e.    [en]-US and [en]-UK
const langCode = I18n.locale.substr(0, 2);
switch (langCode) {
  case 'es':
    I18n.translations.es = require("./languages/es.json");
    break ;
  case 'de':
    I18n.translations.de = require("./languages/de.json");
    break ;
}
