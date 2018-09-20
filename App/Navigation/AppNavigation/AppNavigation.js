#!/usr/bin/env node

// ~~ Dependencies ~~
import React from 'react';
import { StackNavigator } from 'react-navigation';
// ~~ Local Dependencies ~~
import CalendarScreen from '../../Screens/CalendarScreen';
import DrawerNavigation from '../DrawerNavigation';
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

// 'float'  -> Stays at the top and animates as screens are changed.
// 'screen' -> Each screen has a header attached to it,
//             and the header fades in and out together with the screen.
// const mode = (Platform.OS === 'android' ? 'screen' : 'float');
const mode = 'none';

const AppNavigation = StackNavigator(
  {
    AltDrawer: { screen: DrawerNavigation.Alt },
    Calendar: { screen: CalendarScreen },
    ForgotPassword: { screen: ForgotPasswordScreen },
    Login: { screen: LoginScreen },
    MainDrawer: { screen: DrawerNavigation.Main },
    NotificationsScreen: { screen: NotificationsScreen },
    Onboarding: { screen: OnboardingScreen },
    Profile: { screen: ProfileScreen },
    Search: { screen: SearchScreen },
    Settings: { screen: SettingsScreen },
    Signup: { screen: SignupScreen },
    Test: { screen: TestScreen },
    Theme: { screen: ThemeScreen },
    VideoCall: { screen: VideoScreen },
    Chat: { screen: ChatScreen },
    Camera: { screen : CameraScreen }
  },
  {
    initialRouteName: 'Onboarding',
    headerMode: mode
  }
);

export default AppNavigation;
