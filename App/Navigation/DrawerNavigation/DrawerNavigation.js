import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import Drawer from '../../Components/Drawer';

import Calendar from '../../Containers/Calendar';
import Camera from '../../Containers/Camera';
import Chat from '../../Containers/Chat';
import Notifications from '../../Containers/Notifications';
import Search from '../../Containers/Search';
import Settings from '../../Containers/Settings';
import Video from '../../Containers/Video';

const DrawerNavMain = DrawerNavigator(
  {
    'Calendar': { screen: Calendar },
    'Search': { screen: Search },
    'Video': { screen: Video },
    'Notifications': { screen: Notifications },
    'Settings': { screen: Settings }
  },
  {
    initialRouteName: 'Calendar',
    contentComponent: props => <Drawer { ...props } />
  }
);

const DrawerNavAlt = DrawerNavigator(
  {
    'Calendar': { screen: Calendar },
    'Search': { screen: Search },
    'Video': { screen: Video },
    'Notifications': { screen: Notifications },
    'Chat': { screen: Chat },
    'Camera': { screen: Camera },
    'Settings': { screen: Settings }
  },
  {
    initialRouteName: 'Notifications',
    contentComponent: props => <Drawer { ...props } />
  }
);

const DrawerNavigation = {
  main: DrawerNavMain,
  alt: DrawerNavAlt
}

export default DrawerNavigation;

// export {
  
//   DrawerNavAlt
// };