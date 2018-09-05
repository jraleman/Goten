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
  Animated,
  Keyboard,
  Image,
  View,
  TouchableWithoutFeedback,
  TextInput,
  AppRegistry,
  StatusBar
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
  Textarea,
  Spinner
} from 'native-base';
import {
  StackActions,
  NavigationActions
} from 'react-navigation';

// ~~ Configuration ~~
import '../../Config';

// ~~ Dependencies ~~
import I18n from 'react-native-i18n';

// ~~ Local Dependencies ~~
import styles from './styles';
import { Images } from '../../Themes';
import WallpaperContainer from '../../Containers/WallpaperContainer';
import LoadingContainer from '../../Containers/LoadingContainer';

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
      loading: false,
      visible: true,
      fadeValue: new Animated.Value(1)
    };
    this.inputs = {};
  }
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide
    );
  }
  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    // Keyboard.dismiss;
  }
  _keyboardDidShow = () => {
    this._fadeAnimation();
    this.setState({ visible: false });
  }
  _keyboardDidHide = () => {
    this.setState({ visible: true });
  }
  _handleNavigation () {
    // const resetAction = StackActions.reset({
    //   index: 0,
    //   key: null,
    //   actions: [NavigationActions.navigate({ routeName: 'DrawerNavigation' })],
    // });
    // this.props.navigation.dispatch(resetAction);
    this.props.navigation.navigate('DrawerNavigation');
  }
  _onLoginHandler = () => {
    this.setState({ loading: true });
    // this._handleNavigation();
  }
  _onSignupHandler = () => {
    // alert('SignupHandler')
    this.props.navigation.navigate('Signup');
  }
  _onForgotPassHandler = () => {
    // alert('ForgotPassHandler')
    this.props.navigation.navigate('ForgotPassword');
  }
  _focusNextField = (id) => {
    this.inputs[id].focus();
  }
  _fadeAnimation () {
    Animated.timing(this.state.fadeValue, {
      toValue: 0,
      duration: 300
    }).start();
  }
  render () {
    return (
      <React.Fragment>
        <StatusBar
          barStyle={ 'light-content' }
          backgroundColor={ '#121212' }
        />
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
              <Item floatingLabel>
                <Label style={ styles.label }>{ 'Email' }</Label>
                <TextInput
                  keyboardType={ 'email-address' }
                  returnKeyType={ 'next' }
                  onSubmitEditing={ () => { this._focusNextField('passRef'); }}
                  ref={ input => { this.inputs['emailRef'] = input; }}
                  style={ styles.input }
                />
              </Item>
              <Item
                floatingLabel
                last
              >
                <Label style={ styles.label }>{ 'Password' }</Label>
                <TextInput
                  onSubmitEditing={ Keyboard.dismiss }
                  ref={ input => { this.inputs['passRef'] = input; }}
                  style={ styles.input }
                />
              </Item>
              { this.state.visible ? (
                <React.Fragment>
                  <Button
                    block
                    dark
                    style={ styles.button }
                    onPress={ this._onLoginHandler }
                  >
                    <Text>{ 'Login' }</Text>
                  </Button>
                </React.Fragment>
              ) : (null)
              }
            </Form>
            { this.state.visible ? (
              <Animated.View style={[
                styles.animatedView,
                { opacity: this.state.fadeValue }
              ]}
              >
                <Button
                  onPress={ this._onForgotPassHandler }
                  transparent
                  style={ styles.button }
                  dark
                >
                  <Text>{ 'Forgot password?' }</Text>
                </Button>
                <Button
                  onPress={ this._onSignupHandler }
                  style={ styles.button }
                  light
                >
                  <Text>{ 'Tap here to Sign up!' }</Text>
                </Button>
              </Animated.View>
            ) : (null)
            }
          </WallpaperContainer>
          { this.state.loading ? (
            <LoadingContainer />
          ) : (null)
          }
        </Container>
      </React.Fragment>
    );
  }
}

export default LoginScreen;
