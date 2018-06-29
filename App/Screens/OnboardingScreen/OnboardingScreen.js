import React from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';
import styles from './styles';

class OnboardingScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <Content>
          <Text>{ "OnboardingScreen" }</Text>
        </Content>
      </Container>
    );
  }
}

export default OnboardingScreen;
