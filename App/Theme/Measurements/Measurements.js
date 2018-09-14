import {
  Dimensions,
  Platform,
  StatusBar
} from 'react-native';

const {
  deviceWidth,
  deviceHeight
} = Dimensions.get('window');

// Used via Measurements.baseMargin
const Measurements = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  container: 70,
  screenWidth: deviceWidth < deviceHeight ? deviceWidth : deviceHeight,
  screenHeight: deviceWidth < deviceHeight ? deviceHeight : deviceWidth,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : StatusBar.currentHeight,
  buttonRadius: 4,
  inputHeight: 40,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
};

export default Measurements;
