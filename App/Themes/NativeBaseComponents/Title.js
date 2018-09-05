import { Platform } from 'react-native';

import variables from './../variables';

export default (variable = variables) => {
  const titleTheme = {
    fontSize: variable.titleFontSize,
    fontFamily: variable.titleFontfamily,
    color: variable.titleFontColor,
    fontWeight: Platform.OS === 'ios' ? '600' : undefined,
    textAlign: 'center'
  };

  return titleTheme;
};
