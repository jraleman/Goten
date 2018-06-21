import React from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';
import styles from './styles';

class LoginScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <Content>
          <Text>{ "LoginScreen" }</Text>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;
