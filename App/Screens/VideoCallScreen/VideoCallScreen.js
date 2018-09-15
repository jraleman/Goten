#!/usr/bin/env node

// ~~ Dependencies ~~
import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Content,
  Text,
} from 'native-base';
// ~~ Local Dependencies ~~
import styles from './styles';

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class VideoCallScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return;
  }
  /**
   * Renders the component.
   * @return { string } - RN markup for the component
   */
  render () {
    return (
      <React.Fragment>
        <StatusBar
          hidden={ false }
          barStyle={ 'light-content' }
          animated={ true }
        />
        <Container style={ styles.container }>
          <Content style={ styles.content }>
            <Text>{ "VideoCallScreen" }</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

export default VideoCallScreen;
