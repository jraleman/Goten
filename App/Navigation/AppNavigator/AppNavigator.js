import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CategoriesScreen from '../../Screens/CategoriesScreen';

export default StackNavigator(
  {
    'Categories': { screen: CategoriesScreen }
  },
  {
    initialRoute: 'Categories',
    headerMode: 'none'
  }
);
