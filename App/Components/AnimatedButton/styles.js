import { StyleSheet } from 'react-native';

import { Dimensions } from 'react-native'
const DEVICE_WIDTH = Dimensions.width;
const DEVICE_HEIGHT = Dimensions.height;
const MARGIN = 40;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: MARGIN,
    borderRadius: 2.5,
    zIndex: 100,
  }
});
