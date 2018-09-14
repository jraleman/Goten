#!/usr/bin/env node

/***

  I can get rich later, and I WILL GET MONEY ON MY JOURNEY !!!
  Master plan!

  0 - Make TripleByte Seattle Referal
  1 - ReactBoy && Help Femi && Clean Github
  2 - Flutter App Game && Applying for Good Jobs && Open Source Organization
  3 - Get Job && Work part-time on gaming project
  4 - Explore other projects
  5 - Retire soon? Maybe too ambisiouse, but fuck it

***/


// ~~ Dependencies ~~
import React from 'react';
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
class VIdeoCallScreen extends React.Component {
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
        <Container style={ styles.container }>
          <Content style={ styles.content }>
            <Text>{ "VIdeoCallScreen" }</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

export default VIdeoCallScreen;
