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
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form,
  H2,
  Label,
  Text,
  Textarea
} from "native-base";

// ~~ Configuration ~~
import '../../Config';

// ~~ Dependencies ~~
import I18n from 'react-native-i18n';

// ~~ Local Dependencies ~~
import styles from './styles';
import { Images } from '../../Themes';
import WallpaperContainer from '../../Containers/WallpaperContainer';

// ~~ Constants ~~
const WALLPAPER_OPACITY = 0.45;
const WALLPAPER_BLUR = 2.5

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
            opacity={ WALLPAPER_OPACITY }
            blur={ WALLPAPER_BLUR }
          >
            <Form style={ styles.form }>
              <Item floatingLabel={ true }>
                <Label>{ "Email" }</Label>
                <Input />
              </Item>
              <Item floatingLabel={ true }>
                <Label>{ "Password" }</Label>
                <Input />
              </Item>
              <Button
                block={ true }
                light={ true }
                style={ styles.button }
              >
                <Text>{ "Login" }</Text>
              </Button>
            </Form>
          </WallpaperContainer>
        </Container>
      </React.Fragment>
    );
  }
}

export default LoginScreen;
