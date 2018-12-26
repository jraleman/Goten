import {
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native';

const statusBarHeight = (Platform.OS === 'ios') ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#393939',
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    marginTop: statusBarHeight,
    width: '100%'
  },
  text: {
    color: '#fefefe'
  }
});

export default styles;