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
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
});
