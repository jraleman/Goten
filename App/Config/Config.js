import { Text } from 'native-base';
// import LocaleConfig from './LocaleConfig';
import '../I18n/I18n';

const Config = {
  allowTextFontScaling: true,
  // locale: LocaleConfig
}

// Allow font-scaling in app
Text.defaultProps.allowFontScaling = Config.allowTextFontScaling;

export default Config;
