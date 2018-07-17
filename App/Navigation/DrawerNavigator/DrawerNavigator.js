import { DrawerNavigator } from 'react-navigation';
// import DrawerNavigatorContainer from '../../Containers/DrawerNavigatorContainer';
import CategoriesScreen from '../../Screens/CategoriesScreen';
import ColorsScreen from '../../Screens/ColorsScreen';
import NativeBaseScreen from '../../Screens/NativeBaseScreen';
import TestScreen from '../../Screens/TestScreen';

const DrawerNavigation = DrawerNavigator({
    'Categories': { screen: CategoriesScreen },
    'Colors': { screen: ColorsScreen },
    'Native Base': { screen: NativeBaseScreen },
    'Test': { screen: TestScreen },
  },
  {
    initialRouteName: 'Native Base',
    // contentComponent: props => (<DrawerNavigatorContainer { ...props } />)
  }
);
