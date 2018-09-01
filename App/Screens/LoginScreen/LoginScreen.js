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
import { Images } from '../../Themes';

// ~~ Local Dependencies ~~
import WallpaperContainer from '../../Containers/WallpaperContainer';

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
      <React.Fragment>
        <Container style={ styles.container }>
          <WallpaperContainer
            img={ Images.loginBackground }
            overlay={ '#e4e4a1' }
          >
            <Text>{ "LoginScreen" }</Text>
            <Button onPress={ () => this.onSubmitHandler() }>
              <Text>{ "Press here to login" }</Text>
            </Button>
          </WallpaperContainer>
        </Container>
      </React.Fragment>
    );
  }
}

export default LoginScreen;
