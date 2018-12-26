import React from 'react';
import { StackNavigator } from 'react-navigation';

import DrawerNavigation from '../DrawerNavigation';
// import { DrawerNavMain, DrawerNavAlt } from '../DrawerNavigation';

import Calendar from '../../Containers/Calendar';
import Camera from '../../Containers/Camera';
import Chat from '../../Containers/Chat';
import ChangePassword from '../../Containers/Settings/ChangePassword';
import ForgotPassword from '../../Containers/Login/ForgotPassword';
import Login from '../../Containers/Login';
import Notifications from '../../Containers/Notifications';
import Onboard from '../../Containers/Onboard';
import Profile from '../../Containers/Profile';
import Search from '../../Containers/Search';
import Settings from '../../Containers/Settings';
import Signup from '../../Containers/Signup';
import Test from '../../Containers/Settings/Test';
import Theme from '../../Containers/Settings/Theme';
import Video from '../../Containers/Video';

// 'float'  -> Stays at the top and animates as screens are changed.
// 'screen' -> Each screen has a header attached to it,
//             and the header fades in and out together with the screen.
// const mode = (Platform.OS === 'android' ? 'screen' : 'float');
const mode = 'none';

const AppNavigation = StackNavigator(
  {
    'AltDrawer': { screen: DrawerNavigation.alt },
    'Calendar': { screen: Calendar },
    'Camera': { screen: Camera },
    'Chat': { screen: Chat },
    'ChangePassword': { screen: ChangePassword },
    'ForgotPassword': { screen: ForgotPassword },
    'Login': { screen: Login },
    'MainDrawer': { screen: DrawerNavigation.main },
    'NotificationsScreen': { screen: Notifications },
    'Onboard': { screen: Onboard },
    'Profile': { screen: Profile },
    'Search': { screen: Search },
    'Settings': { screen: Settings },
    'Signup': { screen: Signup },
    'Test': { screen: Test },
    'Theme': { screen: Theme },
    'Video': { screen: Video }
  },
  {
    initialRouteName: 'Onboard',
    headerMode: mode
  }
);

export default AppNavigation;
