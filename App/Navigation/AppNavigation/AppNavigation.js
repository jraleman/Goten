import { StackNavigator } from 'react-navigation';

import TestScreen from '../../Screens/TestScreen';
import LoginScreen from '../../Screens/LoginScreen';
import SignupScreen from '../../Screens/SignupScreen';
import ForgotPasswordScreen from '../../Screens/ForgotPasswordScreen';
import CategoriesScreen from '../../Screens/CategoriesScreen';
import ThemeScreen from '../../Screens/ThemeScreen';
import ColorsScreen from '../../Screens/ColorsScreen';
import OnboardingScreen from '../../Screens/OnboardingScreen';

import DrawerNavigation from '../DrawerNavigation';

// 'float'  -> Stays at the top and animates as screens are changed.
// 'screen' -> Each screen has a header attached to it,
//             and the header fades in and out together with the screen.
// const mode = (Platform.OS === 'android' ? 'screen' : 'float');
const mode = 'none';

const AppNavigation = StackNavigator(
  {
    'Login': { screen: LoginScreen },
    'Signup': { screen: SignupScreen },
    'ForgotPassword': { screen: ForgotPasswordScreen },
    'Test': { screen: TestScreen },
    'Categories': { screen: CategoriesScreen },
    'NativeBase': { screen: ThemeScreen },
    'Colors': { screen: ColorsScreen },
    'Onboarding': { screen: OnboardingScreen },
    'DrawerNavigation': { screen: DrawerNavigation }
  },
  {
    initialRouteName: 'Onboarding',
    headerMode: mode
  }
);

export default AppNavigation;
