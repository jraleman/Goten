#!/usr/bin/env node

/*
** LoginScreen
** ---------------------------------------------------------------------------|
** Author: jraleman
** Date: Sat, Sep 01 2018
** Dependencies: I18n
*/

// ~~ Basic Stuff ~~
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

// ~~ Configuration ~~
import '../../Config';

// ~~ Dependencies ~~
import I18n from 'react-native-i18n';

// ~~ Local Dependencies ~~
import styles from './styles';
import { Images } from '../../Themes';
import WallpaperContainer from '../../Containers/WallpaperContainer';

// ~~ Constants ~~
const OPACITY_WALLPAPER = 0.45;

// ~~ React Component ~~
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
            image={ Images.loginBackground }
            overlay={ '#e4e4a1' }
            opacity={ OPACITY_WALLPAPER }
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
