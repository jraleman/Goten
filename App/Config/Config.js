import { Text } from 'native-base';
import '../I18n/I18n';

const Config = {
  allowTextFontScaling: true
}

// Allow font-scaling in app
Text.defaultProps.allowFontScaling = Config.allowTextFontScaling;

export default Config;
