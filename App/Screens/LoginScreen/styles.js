import { StyleSheet } from 'react-native';

// Move this to metrics.js
import { Dimensions, Platform } from 'react-native'
const IS_ANDROID = Platform.OS === 'android'
const { height, width } = Dimensions.get('window')
export const metrics = {
  ANDROID_STATUSBAR: 24,
  DEVICE_HEIGHT: IS_ANDROID ? height - 24 : height,
  DEVICE_WIDTH: width
}

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.DEVICE_WIDTH * 0.1
  },
  form: {
    marginTop: 20
  }
});
