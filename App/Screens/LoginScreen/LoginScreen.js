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
  View,
  TouchableWithoutFeedback
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
const WALLPAPER_OPACITY = 0.25;
const WALLPAPER_BLUR = 2.25
const WALLPAPER_OVERLAY = '#e4e4a1';

// ~~ React Component ~~
class LoginScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      loading: false
    };
    return;
  }
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    return ;
  }
  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    return ;
  }
  _keyboardDidShow () {
    // alert('Keyboard Shown');
    return ;
  }
  _keyboardDidHide () {
    // alert('Keyboard Hidden');
    return ;
  }
  _handleNavigation () {
    this.props.navigation.navigate('DrawerNavigation');
    return ;
  }
  _onLoginHandler = () => {
    this._handleNavigation();
    return ;
  }
  _onSignupHandler = () => {
    alert('SignupHandler')
    return ;
  }
  _onForgotPassHandler = () => {
    alert('ForgotPassHandler')
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <Container style={ styles.container }>
          <WallpaperContainer
            image={ Images.loginBackground }
            overlay={ WALLPAPER_OVERLAY }
            opacity={ WALLPAPER_OPACITY }
            blur={ WALLPAPER_BLUR }
          >
            <TouchableWithoutFeedback
              onPress={ Keyboard.dismiss }
              accessible={ false }
            >
              <Image
                source={ Images.logoBlack }
                style={ styles.logo }
                resizeMode={ 'contain' }
              />
            </TouchableWithoutFeedback>
            <Form style={ styles.form }>
              <Item floatingLabel={ true }>
                <Label>{ "Email" }</Label>
                <Input />
              </Item>
              <Item
                floatingLabel={ true }
                last={ true }
              >
                <Label>{ "Password" }</Label>
                <Input onSubmitEditing={ Keyboard.dismiss } />
              </Item>
              <Button
                block={ true }
                light={ true }
                style={ styles.button }
                onPress={ this._onLoginHandler }
              >
                <Text>{ "Login" }</Text>
              </Button>
            </Form>
            <View style={ styles.forgotPassword }>
              <Button
                onPress={ this._onForgotPassHandler }
                transparent={ true }
                dark={ true }
              >
                <Text>{ "Forgot password?" }</Text>
              </Button>
            </View>
            <View style={ styles.signup }>
              <Button
                onPress={ this._onSignupHandler }
                info={ true }
              >
                <Text>{ "Tap here to Sign up!" }</Text>
              </Button>
            </View>
          </WallpaperContainer>
        </Container>
      </React.Fragment>
    );
  }
}

export default LoginScreen;
