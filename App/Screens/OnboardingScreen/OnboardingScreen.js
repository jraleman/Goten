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
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    // image: require('./assets/1.jpg'),
    // imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    // image: require('./assets/2.jpg'),
    // imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    // image: require('./assets/3.jpg'),
    // imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  }
]

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
    if (this.state.firstLaunch == null) {
      // This is the 'tricky' part:
      // The query to AsyncStorage is not finished, but we have to present
      // something to the user.
      // Null will just render nothing, so you can also put a placeholder of
      // some sort, but effectively the interval between the first mount and
      // AsyncStorage retrieving your data won't be noticeable to the user.
      return (null);
    }
    else if (this.state.firstLaunch == true) {
      return (
        <Container style={ styles.container }>
          <AppIntroSlider
            slides={ slides }
            onDone={ () => this.handleNavigation() }
          />
        </Container>
      );
    }
    else if (this.state.firstLaunch == false) {
      return (
        <Container>
          { this.handleNavigation() }
        </Container>
      );
    }
  }
}

export default OnboardingScreen;
