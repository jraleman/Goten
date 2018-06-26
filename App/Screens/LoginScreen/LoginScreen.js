import React from 'react';
import {
  Text,
  View
} from 'react-native-animatable';
import styles from './styles';

import AnimatedTextInput from '../../Components/AnimatedTextInput';

class LoginScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
    return;
  }
  hideForm = async () => {
    if (this.buttonRef && this.formRef && this.linkRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300)
      ])
    }
  }
  render () {
    //const { email, password } = this.state
    //const { isLoading, onSignupLinkPress, onLoginPress } = this.props
    //const isValid = email !== '' && password !== ''
    return (
      <View style={ styles.container }>
        <View
          style={ styles.form }
          ref={(ref) => { this.formRef = ref }}
        >
          {/* EmailInput */}
          <AnimatedTextInput
            blurOnSubmit={ false }
            editable={ true }
            isEmail={ true }
            name={ 'email' }
            onChangeText={ (value) => this.setState({ email: value })}
            onSubmitEditing={ () => this.passwordInputRef.focus() }
            placeholder={ 'Email' }
            ref={ (ref) => this.emailInputRef = ref }
            withRef={ true }
          />
          {/* PasswordInput */}
          <AnimatedTextInput
            editable={ true }
            isPassword={ true }
            name={ 'password' }
            onChangeText={ (value) => this.setState({ password: value })}
            onSubmitEditing={ () => this.passwordInputRef.focus() }
            placeholder={ 'Password' }
            ref={ (ref) => this.passwordInputRef = ref }
            returnKeyType={'done'}
            withRef={ true }
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
