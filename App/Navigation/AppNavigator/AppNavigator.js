import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TestScreen from '../../Screens/TestScreen';
import LoginScreen from '../../Screens/LoginScreen';
import CategoriesScreen from '../../Screens/CategoriesScreen';

// 'float'  -> Stays at the top and animates as screens are changed.
// 'screen' -> Each screen has a header attached to it,
//             and the header fades in and out together with the screen.
const mode = (Platform.OS === 'android' ? 'screen' : 'float');

export default StackNavigator(
  {
    'Login': { screen: LoginScreen },
    'Test': { screen: TestScreen },
    'Categories': { screen: CategoriesScreen }
  },
  {
    initialRoute: 'Login',
    headerMode: mode
  }
);
