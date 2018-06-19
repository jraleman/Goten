import {
  StyleSheet,
  Platform
} from 'react-native';

export default StyleSheet.create({
  container:{
    flex: 1
  },
  toolbar: {
    backgroundColor: '#ba281e',
    color: '#f9f9f9',
    fontSize: 22,
    textAlign: 'center',
    padding: 10,
    ...Platform.select({
      ios: {
        paddingTop: 30
      },
      android: {
        paddingTop: 10
      }
    })
  }
})
