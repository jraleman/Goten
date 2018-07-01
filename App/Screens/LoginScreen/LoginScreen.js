import React from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base'
import styles from './styles';
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
  render () {
    return (
      <Container style={ styles.container }>
        <WallpaperContainer>
          <Content>
            <Text>{ "LoginScreen" }</Text>
          </Content>
        </WallpaperContainer>
      </Container>
    );
  }
}

export default LoginScreen;
