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
    flex: 0.35,
    alignSelf: 'center'
  },
  button: {
    marginBottom: 15,
    width: '90%',
    alignSelf: 'center'
  },
  forgotPassword: {
    alignSelf: 'center',
    bottom: '5%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signup: {
    alignSelf: 'center',
    bottom: '5%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
