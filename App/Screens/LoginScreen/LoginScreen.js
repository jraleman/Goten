import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base'
import styles from './styles';
import WallpaperContainer from '../../Containers/WallpaperContainer';
import { Images } from '../../Themes';

class LoginScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
    return;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <WallpaperContainer
          img={ Images.loginBg }
          overlay={ "#ED1727" }
        >
          <Content>
            <Image
              style={ styles.logo }
              source={ Images.logoLandscape }
            />
            <Text style={{color: 'white'}}>{ "LoginScreen" }</Text>
          </Content>
        </WallpaperContainer>
      </Container>
    );
  }
}

export default LoginScreen;
