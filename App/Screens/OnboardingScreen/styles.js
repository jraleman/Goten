import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between"
  },
  imageStyle: {
    flex: 1,
    maxWidth: 320,
    // height: 'auto',
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  titleStyle: {
    fontSize: 36,
    color: '#f9f9f9'
  },
  textStyle: {
    marginBottom: 20,
    color: '#f9f9f9'
  },
  titleStyleLast: {
    color: '#111111',
    fontSize: 36
  },
  textStyleLast: {
    color: '#111111',
    marginBottom: 20,
  },
  btnCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .75)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnIcon: {
    color: '#e4e4a1'
  }
});

export default styles;
