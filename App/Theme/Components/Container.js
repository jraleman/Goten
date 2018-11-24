import { Platform, Dimensions } from 'react-native';

import variables from './../variables';

const deviceHeight = Dimensions.get('window').height;
export default (variable = variables) => {
  const theme = {
    flex: 1,
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20
  };

  return theme;
};
