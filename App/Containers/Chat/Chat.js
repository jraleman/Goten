import React from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';

import AppHeader from '../../Components/AppHeader';
import styles from './styles';
// Sauce
// https://github.com/wix/react-native-gifted-chat

class Chat extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <AppHeader
          title={ 'Chat' }
          icon={ 'menu' }
          onPress={ () => { this.props.navigation.openDrawer(); }}
        />
        <Content>
          <Text>{ "ChatScreen" }</Text>
        </Content>
      </Container>
    );
  }
}

export default Chat;
