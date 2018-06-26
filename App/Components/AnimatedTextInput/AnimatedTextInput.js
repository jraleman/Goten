import React from  'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { View } from 'react-native-animatable';
import styles from './styles';

class AnimatedTextInput extends React.Component {
  constructor (props) {
    super(props);
    this.isEnabled = this.props.isEnabled;
    this.isPassword = this.props.isPassword;
    this.state = {
      isFocused: false
    };
    return ;
  }
  handleFocus () {
    // this.textInputRef.focus()
    return (this.setState({ isFocused: true }));
  }
  handleBlur () {
    return (this.setState({ isFocused: false }));
  }
  render () {
    return (
      <View style={ styles.container }>
        <View style={ styles.textInputWrapper }>
          <TextInput
            autoCapitalize={ 'none' }
            autoCorrect={ false }
            maxLength={ 50 }
            onFocus={ () => this.handleFocus }
            onBlur={ () => this.handleBlur }
            placeholdetTextColor={ '#c9c9c9' }
            ref={ (ref) => this.textInputRef = ref }
            secureTextEntry={ this.isPassword }
            selectionColor={'#f9f9f9'}
            underlineColorAndroid={ 'transparent' }
          />
        </View>
      </View>
    );
  }
}

AnimatedTextInput.propTypes = {
  isEnabled: PropTypes.bool,
  isPassword: PropTypes.bool
}

export default AnimatedTextInput;
