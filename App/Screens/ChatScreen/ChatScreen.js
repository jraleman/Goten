import React from 'react';
import { StatusBar } from 'react-native';

import AppHeader from '../../Components/AppHeader';
import styles from './styles';
// Sauce
// https://github.com/wix/react-native-gifted-chat

class ChatScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <StatusBar />
        <AppHeader />
        <Content>
          <Text>{ "ChatScreen" }</Text>
        </Content>
      <Container>
    );
  }
}

export default ChatScreen;
