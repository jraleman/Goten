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

export default StyleSheet.create ({
  container: {
    marginTop: 2,
    marginBottom: 10
  },
  textInputWrapper: {
    height: 42,
    marginBottom: 2,
    borderBottomWidth: 1
  },
  textInput: {
    flex: 1,
    color: 'white',
    margin: IS_ANDROID ? -1 : 0,
    height: 42,
    padding: 7
  }
});
