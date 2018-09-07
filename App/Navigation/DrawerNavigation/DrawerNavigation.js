#!/usr/bin/env node

/**
 *      |    o             |
 * ,---.|---..,---.,---. --|--- ,---.
 * ,---||   |||---'|       |    |   |
 * `---^`---'``---'`    o  `---'`---'
 *
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import React from 'react';
import { DrawerNavigator } from 'react-navigation';
// ~~ Local Dependencies ~~
import DrawerNavigationContainer from '../../Containers/DrawerNavigationContainer';
import CategoriesScreen from '../../Screens/CategoriesScreen';
import ColorsScreen from '../../Screens/ColorsScreen';
import TestScreen from '../../Screens/TestScreen';
import ThemeScreen from '../../Screens/ThemeScreen';

const MainDrawerNav = DrawerNavigator({
  'Categories': { screen: CategoriesScreen },
  'Colors': { screen: ColorsScreen },
  'Theme': { screen: ThemeScreen },
  'Test': { screen: TestScreen }
}, {
  initialRouteName: 'Theme',
  contentComponent: props => <DrawerNavigationContainer { ...props } />
});

const AltDrawerNav = DrawerNavigator({
  'Colors': { screen: ColorsScreen },
  'Test': { screen: TestScreen }
}, {
  initialRouteName: 'Colors',
  contentComponent: props => <DrawerNavigationContainer { ...props } />
});

const DrawerNavigation = {
  Main: MainDrawerNav,
  Alt: AltDrawerNav
}

export default DrawerNavigation;
