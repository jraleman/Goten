import React from 'react';
import { AsyncStorage } from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base';
import {
  StackActions,
  NavigationActions
} from 'react-navigation';
import '../../Config';
import I18n from 'react-native-i18n';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';

const slides = [
  {
    key: 'slideOne',
    title: I18n.t('onboardingScreen.slideOne.title'),
    text: I18n.t('onboardingScreen.slideOne.text'),
    // image: require('./assets/1.jpg'),
    // imageStyle: styles.image,
    backgroundColor: '#333',
  },
  {
    key: 'slideTwo',
    title: I18n.t('onboardingScreen.slideTwo.title'),
    text: I18n.t('onboardingScreen.slideTwo.text'),
    // image: require('./assets/2.jpg'),
    // imageStyle: styles.image,
    backgroundColor: '#444',
  },
  {
    key: 'slideThree',
    title: I18n.t('onboardingScreen.slideThree.title'),
    text: I18n.t('onboardingScreen.slideThree.text'),
    // image: require('./assets/3.jpg'),
    // imageStyle: styles.image,
    backgroundColor: '#555',
  },
  {
    key: 'slideFour',
    title: I18n.t('onboardingScreen.slideFour.title'),
    text: I18n.t('onboardingScreen.slideFour.text'),
    // image: require('./assets/3.jpg'),
    // imageStyle: styles.image,
    backgroundColor: '#666',
  }
];

// Thanks for your amazing stackoverflow answer, martinarroyo.
// Source: https://stackoverflow.com/a/40729761
class OnboardingScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstLaunch: null
    };
    return ;
  }
  componentDidMount () {
    AsyncStorage.getItem("alreadyLaunched")
    .then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', JSON.stringify(true));
        this.setState({ firstLaunch: true });
      }
      else {
        this.setState({ firstLaunch: false });
        // ...you can also add your error handling code here :)
      }
    });
    return ;
  }
  componentDidUpdate () {
    if (this.state.firstLaunch == true) {
      this.handleNavigation();
    }
  }
  handleNavigation () {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'NativeBase' })],
    });
    this.props.navigation.dispatch(resetAction);
    return ;
  }
  render () {
    if (this.state.firstLaunch == false) {
      return (
        <Container style={ styles.container }>
          <AppIntroSlider
            slides={ slides }
            onDone={ () => this.handleNavigation() }
          />
        </Container>
      );
    }
    else {
      // This is the 'tricky' part:
      // The query to AsyncStorage is not finished, but we have to present
      // something to the user.
      // Null will just render nothing, so you can also put a placeholder of
      // some sort, but effectively the interval between the first mount and
      // AsyncStorage retrieving your data won't be noticeable to the user.
      return (null);
    }
  }
}

export default OnboardingScreen;
