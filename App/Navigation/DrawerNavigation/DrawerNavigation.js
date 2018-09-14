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
import CalendarScreen from '../../Screens/CalendarScreen';
import DrawerNavigationContainer from '../../Containers/DrawerNavigationContainer';
import ForgotPasswordScreen from '../../Screens/ForgotPasswordScreen';
import LoginScreen from '../../Screens/LoginScreen';
import NotificationsScreen from '../../Screens/NotificationsScreen';
import OnboardingScreen from '../../Screens/OnboardingScreen';
import ProfileScreen from '../../Screens/ProfileScreen';
import SearchScreen from '../../Screens/SearchScreen';
import SettingsScreen from '../../Screens/SettingsScreen';
import SignupScreen from '../../Screens/SignupScreen';
import TestScreen from '../../Screens/TestScreen';
import ThemeScreen from '../../Screens/ThemeScreen';
import VideoCallScreen from '../../Screens/VideoCallScreen';

const MainDrawerNav = DrawerNavigator(
  {
    'Calendar': { screen: CalendarScreen },
    'Search': { screen: SearchScreen },
    'Test': { screen: TestScreen },
    'Theme': { screen: ThemeScreen },
    'Video Call': { screen: VideoCallScreen },
    'Notifications': { screen: NotificationsScreen }
  },
  {
    initialRouteName: 'Calendar',
    contentComponent: props => <DrawerNavigationContainer { ...props } />
  }
);

const AltDrawerNav = DrawerNavigator(
  {
    'Profile': { screen: ProfileScreen },
    'Search': { screen: SearchScreen },
    'Test': { screen: TestScreen },
    'Theme': { screen: ThemeScreen },
    'Notifications': { screen: NotificationsScreen }
  },
  {
    initialRouteName: 'Test',
    contentComponent: props => <DrawerNavigationContainer { ...props } />
  }
);

const DrawerNavigation = {
  Main: MainDrawerNav,
  Alt: AltDrawerNav
}

export default DrawerNavigation;
