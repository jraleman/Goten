#!/usr/bin/env node

/***

  Master plan!
    I can get rich later, and I WILL GET MONEY ON MY JOURNEY !!!

  0 - Make TripleByte Seattle or LA Referal to Tech Company
  1 - ReactBoy && Help Femi && Clean Github
  2 - Turn in Cantina / Dorms Site
  3 - Flutter App Game && Applying for Good Jobs && Open Source Organization
  4 - Get Job && Work part-time on Flutter App Game
  5 - Raise the baby
  6 - Take care of the baby
  7 - Sell the baby
  8 - Explore other projects
  9 - Retire soon? Maybe too ambisiouse, but fuck it...
  10 - I want to spend time with my family

***/


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
          barStyle={ 'dark-content' }
          showHideTransition={ true }
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
