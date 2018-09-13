#!/usr/bin/env node

/**
 *      |    o             |
 * ,---.|---..,---.,---. --|--- ,---.
 * ,---||   |||---'|       |    |   |
 * `---^`---'``---'`    o  `---'`---'
 *
 * ProfileScreen/ProfileScreen.js
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import React from 'react';
import { BackHandler } from 'react-native';
import {
  Button,
  Container,
  Content,
  Icon,
  Text,
  H1,
  H2,
  Thumbnail,
  Item,
  Label,
  Input,
  Textarea,
  View
} from 'native-base';
// ~~ Local Dependencies ~~
import AppHeader from '../../Components/AppHeader';
import styles from './styles';

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class ProfileScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return;
  }
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return (true);
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
          <AppHeader
            title={ 'Profile' }
            icon={ 'menu' }
            onPress={ () => this.props.navigation.openDrawer() }
            iconRight={ 'more' }
            onPressRight={ () => window.alert('edit') }
          />
          <Content style={ styles.content }>
            <Text>{ "ProfileScreen" }</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

export default ProfileScreen;
