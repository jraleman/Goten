import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TestScreen from '../../Screens/TestScreen';
import LoginScreen from '../../Screens/LoginScreen';
import CategoriesScreen from '../../Screens/CategoriesScreen';
import NativeBaseScreen from '../../Screens/NativeBaseScreen';
import ColorsScreen from '../../Screens/ColorsScreen';
import OnboardingScreen from '../../Screens/OnboardingScreen';

// 'float'  -> Stays at the top and animates as screens are changed.
// 'screen' -> Each screen has a header attached to it,
//             and the header fades in and out together with the screen.
// const mode = (Platform.OS === 'android' ? 'screen' : 'float');
const mode = 'none';

const AppNavigator = StackNavigator(
  {
    'Login': { screen: LoginScreen },
    'Test': { screen: TestScreen },
    'Categories': { screen: CategoriesScreen },
    'NativeBase': { screen: NativeBaseScreen },
    'Colors': { screen: ColorsScreen },
    'Onboarding': { screen: OnboardingScreen }
  },
  {
    initialRouteName: 'Onboarding',
    headerMode: mode
  }
);

export default AppNavigator;
