import { Platform } from 'react-native';

import variables from './../variables';

export default (variable = variables) => {
  const radioTheme = {
    '.selected': {
      'NativeBase.IconNB': {
        color: Platform.OS === 'ios'
          ? variable.radioColor
          : variable.radioSelectedColorAndroid,
        lineHeight: Platform.OS === 'ios' ? 25 : variable.radioBtnLineHeight,
        height: Platform.OS === 'ios' ? 20 : undefined
      }
    },
    'NativeBase.IconNB': {
      color: Platform.OS === 'ios' ? 'transparent' : undefined,
      lineHeight: Platform.OS === 'ios'
        ? undefined
        : variable.radioBtnLineHeight,
      fontSize: Platform.OS === 'ios' ? undefined : variable.radioBtnSize
    }
  };

  return radioTheme;
};
