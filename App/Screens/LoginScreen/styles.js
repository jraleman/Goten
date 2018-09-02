import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  logo: {
    flex: 0.42,
    alignSelf: 'center',
    top: '10%'
  },
  input: {
    flex: 0.21,
    alignSelf: 'flex-end',
    fontWeight: '900',
  },
  label: {
    fontWeight: '900',
    color: '#222'
  },
  button: {
    marginBottom: 15,
    width: '90%',
    alignSelf: 'center'
  },
  animatedView: {
    alignSelf: 'center',
    bottom: '5%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
