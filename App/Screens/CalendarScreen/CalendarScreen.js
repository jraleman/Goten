#!/usr/bin/env node

/**
 *      |    o             |
 * ,---.|---..,---.,---. --|--- ,---.
 * ,---||   |||---'|       |    |   |
 * `---^`---'``---'`    o  `---'`---'
 *
 * CalendarScreen/CalendarScreen.js
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import React from 'react';
import {
  Container,
  Content,
  View,
  Text
} from 'native-base';
import { Agenda } from 'react-native-calendars';
// ~~ Local Dependencies ~~
import styles from './styles';
import AppHeader from '../../Components/AppHeader';

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class CalendarScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: {}
    };
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
          <AppHeader
            title={ 'Calendar' }
            onPress={ () => this.props.navigation.openDrawer() }
            icon={ 'menu' }
          />
          <Content style={ styles.content }>
            <Agenda />
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

export default CalendarScreen;
