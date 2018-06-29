import React from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';
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

class OnboardingScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  handleNavigation () {
    this.props.navigation.navigate('NativeBase');
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <AppIntroSlider
          slides={ slides }
          onDone={ () => this.handleNavigation() }
        />
      </Container>
    );
  }
}

export default OnboardingScreen;
