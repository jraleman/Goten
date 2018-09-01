#!/usr/bin/env node

/*
** OnboardingScreen
** ---------------------------------------------------------------------------|
** Author: jraleman
** Date: Fri, Aug 31 2018
** Dependencies: react-native-app-intro-slider
**
** Thanks for your amazing stackoverflow answer, martinarroyo.
** Source: https://stackoverflow.com/a/40729761
*/

// ~~ Basic Stuff ~~
import React from 'react';
import {
  AsyncStorage,
  StatusBar
} from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base';
import {
  StackActions,
  NavigationActions
} from 'react-navigation';

// ~~ Configuration ~~
import '../../Config';
import styles from './styles';
import { Images } from '../../Themes';
import I18n from 'react-native-i18n';

// ~~ Dependencies ~~
import AppIntroSlider from 'react-native-app-intro-slider';

// ~~ Constants ~~
const slides = [
  {
    key: 'slideOne',
    title: I18n.t('onboardingScreen.slideOne.title'),
    titleStyle: styles.titleStyle,
    text: I18n.t('onboardingScreen.slideOne.text'),
    textStyle: styles.textStyle,
    image: Images.onboardingSlideOne,
    imageStyle: styles.imageStyle,
    backgroundColor: '#121212'
  },
  {
    key: 'slideTwo',
    title: I18n.t('onboardingScreen.slideTwo.title'),
    titleStyle: styles.titleStyle,
    text: I18n.t('onboardingScreen.slideTwo.text'),
    textStyle: styles.textStyle,
    image: Images.onboardingSlideTwo,
    imageStyle: styles.imageStyle,
    backgroundColor: '#343434'
  },
  {
    key: 'slideThree',
    title: I18n.t('onboardingScreen.slideThree.title'),
    titleStyle: styles.titleStyle,
    text: I18n.t('onboardingScreen.slideThree.text'),
    textStyle: styles.textStyle,
    image: Images.onboardingSlideThree,
    imageStyle: styles.imageStyle,
    backgroundColor: '#565656'
  },
  {
    key: 'slideFour',
    title: I18n.t('onboardingScreen.slideFour.title'),
    titleStyle: styles.titleStyle,
    text: I18n.t('onboardingScreen.slideFour.text'),
    textStyle: styles.textStyle,
    image: Images.onboardingSlideFour,
    imageStyle: styles.imageStyle,
    backgroundColor: '#787878'
  }
];

// ~~ React Component ~~
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
    // if (this.state.firstLaunch == true) {
    if (this.state.firstLaunch == false) {
      this.handleNavigation();
    }
  }
  handleNavigation () {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    this.props.navigation.dispatch(resetAction);
    return ;
  }
  render () {
    // if (this.state.firstLaunch == false) {
    if (this.state.firstLaunch == true) {
      return (
        <React.Fragment>
          <StatusBar
            translucent={ true }
            barStyle={ "light-content" }
            hidden={ true }
          />
          <Container style={ styles.container }>
            <AppIntroSlider
              slides={ slides }
              onDone={ () => this.handleNavigation() }
            />
          </Container>
        </React.Fragment>
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
