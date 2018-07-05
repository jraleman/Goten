import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: Dimensions.width
  }
});



// //....
// //In image style
// image:{
//    width: width * 0.5
// }
// //In render function
// <Image resizeMode = 'cover' style = {styles.image}/>
