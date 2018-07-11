import I18n from 'react-native-i18n';

// Regular expresion to match missing translations.
const missingTranslationRegex = /^\[missing ".*" translation\]$/
// Wrapper to avoid exception wich leads in an app crash.
const translate = (initialMsg) => {
  let localMsg = null;
  if (typeof initialMsg === 'string') {
    localMsg = I18n.t(initialMsg);
  }
  else if (missingTranslationRegex.test(localMsg)) {
    alert(`I18n: tryranslation "${initialMsg}" does not exists`);
  }
  else {
    alert(`I18n: Give a string to translate instead of "${typeof initialMsg}"`);
  }
  return (localMsg);
};

export default {
  ...I18n,
  t: translate
};
