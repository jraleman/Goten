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
import TestScreen from '../../Screens/TestScreen';
import ThemeScreen from '../../Screens/ThemeScreen';

const MainDrawerNav = DrawerNavigator({
  'Theme': { screen: ThemeScreen },
  'Test': { screen: TestScreen }
}, {
  initialRouteName: 'Theme',
  contentComponent: props => <DrawerNavigationContainer { ...props } />
});

const AltDrawerNav = DrawerNavigator({
  'Test': { screen: TestScreen }
}, {
  initialRouteName: 'Test',
  contentComponent: props => <DrawerNavigationContainer { ...props } />
});

const DrawerNavigation = {
  Main: MainDrawerNav,
  Alt: AltDrawerNav
}

export default DrawerNavigation;
