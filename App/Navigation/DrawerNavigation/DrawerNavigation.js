#!/usr/bin/env node

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
import VideoScreen from '../../Screens/VideoScreen';
import ChatScreen from '../../Screens/ChatScreen';
import CameraScreen from '../../Screens/CameraScreen';
import ReduxScreen from '../../Screens/ReduxScreen';

const MainDrawerNav = DrawerNavigator(
  {
    'Calendar': { screen: CalendarScreen },
    'Search': { screen: SearchScreen },
    'Video': { screen: VideoScreen },
    'Notifications': { screen: NotificationsScreen },
    'Chat': { screen: ChatScreen },
    'Camera': { screen: CameraScreen },
    'Redux': { screen: ReduxScreen },
    'Settings': { screen: SettingsScreen }
  },
  {
    initialRouteName: 'Calendar',
    contentComponent: props => <DrawerNavigationContainer { ...props } />
  }
);

const AltDrawerNav = DrawerNavigator(
  {
    'Test': { screen: TestScreen },
    'Theme': { screen: ThemeScreen }
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
