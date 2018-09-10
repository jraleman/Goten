import { StackNavigator } from 'react-navigation';

import TestScreen from '../../Screens/TestScreen';
import LoginScreen from '../../Screens/LoginScreen';
import SignupScreen from '../../Screens/SignupScreen';
import ForgotPasswordScreen from '../../Screens/ForgotPasswordScreen';
import ThemeScreen from '../../Screens/ThemeScreen';
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
    'Theme': { screen: ThemeScreen },
    'Onboarding': { screen: OnboardingScreen },
    'MainDrawer': { screen: DrawerNavigation.Main },
    'AltDrawer': { screen: DrawerNavigation.Alt }
  },
  {
    initialRouteName: 'Onboarding',
    headerMode: mode
  }
);

export default AppNavigation;
