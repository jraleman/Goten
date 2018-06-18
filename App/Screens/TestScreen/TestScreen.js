import React from 'react';
import {
  Platform
} from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base';
import styles from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class TestScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container>
        <Content>
          <Text>{ "TestScreen" }</Text>
          <Text>{ instructions }</Text>
        </Content>
      </Container>
    );
  }
}

export default TestScreen;
