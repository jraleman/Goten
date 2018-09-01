import React from 'react';
import {
  Keyboard,
  Image,
  View
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button
} from 'native-base'
import styles from './styles';

class LoginScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
    return;
  }
  handleNavigation () {
    this.props.navigation.navigate('DrawerNavigation');
    return ;
  }
  onSubmitHandler () {
    this.handleNavigation();
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <Text>{ "LoginScreen" }</Text>
        <Button onPress={ () => this.onSubmitHandler() }>
          <Text>{ "Press here to login" }</Text>
        </Button>
      </Container>
    );
  }
}

export default LoginScreen;
