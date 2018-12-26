import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
    // opacity: 0.175
  },
  wallpaper: {
    flex: 1,
    width: null,
    height: null
  }
});

export default styles;