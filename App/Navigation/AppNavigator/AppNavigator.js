import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CategoriesScreen from '../../Screens/CategoriesScreen';

// Not used, but good to have for general purpose.
// 'float'  -> Stays at the top and animates as screens are changed.
// 'screen' -> Each screen has a header attached to it,
//             and the header fades in and out together with the screen.
const headerMode = (Platform.OS === 'android' ? 'screen' : 'float');

export default StackNavigator(
  {
    'Categories': { screen: CategoriesScreen }
  },
  {
    initialRoute: 'Categories',
    headerMode: 'none'
  }
);
