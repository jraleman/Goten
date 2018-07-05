import React from 'react';
import {
  Keyboard,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base'
import styles from './styles';
import WallpaperContainer from '../../Containers/WallpaperContainer';
import AnimatedButton from '../../Components/AnimatedButton';
import EmailInput from '../../Components/EmailInput';
import PasswordInput from '../../Components/PasswordInput';
import { Images } from '../../Themes';

class LoginScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      hidePassword: true,
      pressButton: false
    };
    return;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <WallpaperContainer
          img={ Images.loginBackground }
          overlay={ '#ED1727' }
        >
          <TouchableWithoutFeedback
            onPress={ Keyboard.dismiss }
            accessible={ false }
          >
            <View style={{ flex: 1 }}>
              <Image
                style={ styles.logo }
                resizeMode={ "contain" }
                source={ Images.logoLandscape }
              />
              <KeyboardAvoidingView
                behavior="padding"
                style={styles.container}
              >
                <EmailInput />
                <PasswordInput />
                <AnimatedButton
                  title={ "Login" }
                  color={ '#ED1727' }
                />
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        </WallpaperContainer>
      </Container>
    );
  }
}

export default LoginScreen;
