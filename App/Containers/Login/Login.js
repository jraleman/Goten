import * as React from 'react';
import {
  Animated,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  StatusBar
} from 'react-native';
import {
  Container,
  Button,
  Item,
  Form,
  Label,
  Text
} from 'native-base';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './styles';
import { Images } from '../../Theme';
import Wallpaper from '../../Components/Wallpaper';
import Loader from '../../Components/Loader';

import '../../Config';

const WALLPAPER_OPACITY = 0.25;
const WALLPAPER_BLUR = 2.25;
const WALLPAPER_OVERLAY = '';

class Login extends React.Component {
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
  }
  _keyboardDidShow = () => {
    // this._fadeAnimation();
    this.setState({ visible: false });
  }
  _keyboardDidHide = () => {
    this.setState({ visible: true });
  }
  _handleNavigation () {
    // hotfix!
    var self = this;
    window.setTimeout(function() {
      self._fadeAnimation();
      self.setState({ loading: false });
        // refactor this!
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'MainDrawer' })],
        });
        self.props.navigation.dispatch(resetAction);

    }, 1500);

    // this.props.navigation.navigate('AltDrawer');
  }
  _onLoginHandler = () => {
    this.setState({ loading: true });
    this._handleNavigation();
  }
  _onSignupHandler = () => {
    this.props.navigation.navigate('Signup');
  }
  _onForgotPassHandler = () => {
    this.props.navigation.navigate('ForgotPassword');
  }
  _focusNextField = (id) => {
    this.inputs[id].focus();
  }
  _fadeAnimation () {
    this.setState({ loading: true });
    Animated.timing(this.state.fadeValue, {
      toValue: 0,
      duration: 300
    }).start();
  }
  render () {
    return (
      <React.Fragment>
        <StatusBar hidden={ true } />
        <Container style={ styles.container }>
          { this.state.loading ? (<Loader />) : (null) }
          <Wallpaper
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
                <Label style={ styles.label }>{ 'Email' }</Label>
                <TextInput
                  keyboardType={ 'email-address' }
                  returnKeyType={ 'next' }
                  style={ styles.input }
                />
              </Item> 
              <Item
                floatingLabel={ true }
                last={ true }
              >
                <Label style={ styles.label }>{ 'Password' }</Label>
                <TextInput
                  onSubmitEditing={ Keyboard.dismiss }
                  style={ styles.input }
                />
              </Item>
              { this.state.visible ? (
                <React.Fragment>
                  <Button
                    block={ true }
                    dark={ true }
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
              <Animated.View style={ [
                styles.animatedView,
                { opacity: this.state.fadeValue }
              ] }
              >
                <Button
                  onPress={ this._onForgotPassHandler }
                  transparent={ true }
                  style={ styles.button }
                  dark={ true }
                >
                  <Text>{ 'Forgot password?' }</Text>
                </Button>
                <Button
                  onPress={ this._onSignupHandler }
                  style={ styles.button }
                  light={ true }
                >
                  <Text>{ 'Tap here to Sign up!' }</Text>
                </Button>
              </Animated.View>
            ) : (null)
            }
          </Wallpaper>
          
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;
