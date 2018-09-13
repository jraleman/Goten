#!/usr/bin/env node

/**
 *      |    o             |
 * ,---.|---..,---.,---. --|--- ,---.
 * ,---||   |||---'|       |    |   |
 * `---^`---'``---'`    o  `---'`---'
 *
 * SettingsScreen/SettingsScreen.js
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import React from 'react';
import {
  BackHandler,
  FlatList
} from 'react-native'
import {
  Content,
  Container,
  Header,
  Left,
  Right,
  Body,
  Button,
  Text,
  Title,
  Icon,
  Footer,
  FooterTab,
  List,
  ListItem,
} from 'native-base'
import I18n from 'react-native-i18n';
// ~~ Local Dependencies ~~
import styles from './styles';


/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class SettingsScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return;
  }
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true
    });
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
            <Text>{ "SettingsScreen" }</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

export default SettingsScreen;
