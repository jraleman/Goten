import React from 'react';

import { AsyncStorage, StatusBar, View } from 'react-native';
import { Container, Icon } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';

import AppIntroSlider from 'react-native-app-intro-slider';
import I18n from 'react-native-i18n';

import styles from './styles';
import { Images } from '../../Theme';

import '../../Config';

const slides = [
  {
    key: 'slideOne',
    title: I18n.t('containers.onboard.slideOne.title'),
    titleStyle: styles.titleStyle,
    text: I18n.t('containers.onboard.slideOne.text'),
    textStyle: styles.textStyle,
    image: Images.onboardingSlideOne,
    imageStyle: styles.imageStyle,
    backgroundColor: '#121212'
  },
  {
    key: 'slideTwo',
    title: I18n.t('containers.onboard.slideTwo.title'),
    titleStyle: styles.titleStyle,
    text: I18n.t('containers.onboard.slideTwo.text'),
    textStyle: styles.textStyle,
    image: Images.onboardingSlideTwo,
    imageStyle: styles.imageStyle,
    backgroundColor: '#232323'
  },
  {
    key: 'slideThree',
    title: I18n.t('containers.onboard.slideThree.title'),
    titleStyle: styles.titleStyle,
    text: I18n.t('containers.onboard.slideThree.text'),
    textStyle: styles.textStyle,
    image: Images.onboardingSlideThree,
    imageStyle: styles.imageStyle,
    backgroundColor: '#343436'
  },
  {
    key: 'slideFour',
    title: I18n.t('containers.onboard.slideFour.title'),
    titleStyle: styles.titleStyleLast,
    text: I18n.t('containers.onboard.slideFour.text'),
    textStyle: styles.textStyleLast,
    image: Images.onboardingSlideFour,
    imageStyle: styles.imageStyle,
    backgroundColor: '#f9f9f9'
  }
];

class Onboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstLaunch: null
    };
  }
  componentDidMount () {
    AsyncStorage.getItem('alreadyLaunched')
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
  }
  componentDidUpdate () {
    if (this.state.firstLaunch === false) {
      this._handleNavigation();
    }
  }
  _renderDoneButton = () => {
    return (
      <View style={ styles.btnCircle }>
        <Icon
          style={ styles.btnIcon }
          name={ 'paw' }
        />
      </View>
    );
  }
  _handleNavigation = () => {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'Login' })]
    });
    this.props.navigation.dispatch(resetAction);
  }
  render () {
    if (this.state.firstLaunch === true) {
      return (
        <React.Fragment>
          <StatusBar
            translucent={ true }
            barStyle={ 'light-content' }
            hidden={ true }
          />
          <Container style={ styles.container }>
            <AppIntroSlider
              slides={ slides }
              onDone={ this._handleNavigation }
              renderDoneButton={ this._renderDoneButton }
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

export default Onboard;
