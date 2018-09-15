#!/usr/bin/env node

// ~~ Dependencies ~~
import React from 'react';
import {
  BackHandler,
  FlatList,
  StatusBar
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
import AppHeader from '../../Components/AppHeader';
import styles from './styles';

/*
 TODO:
 - entryTexy -> i18n display text
 - text      -> tmp display text
*/

const settingsItems = [
  {
    key: 'aboutItem',
    text: 'About',
    icon: 'alert',
  },
  {
    key: 'modifyPinItem',
    text: 'Modify Pin',
    icon: 'lock',
  },
  {
    key: 'changePasswordItem',
    text: 'Change Password',
    icon: 'key',
  },
  {
    key: 'logOutItem',
    text: 'Log Out',
    icon: 'log-out',
  }
];

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
   handleAction = (key) => {
      if (key === "aboutItem") {
        this.props.navigation.navigate('About');
      }
      else if (key === "modifyPinItem") {
        this.props.navigation.navigate('ModifyPin');
      }
      else if (key === "changePasswordItem") {
        this.props.navigation.navigate('ChangePassword');;
      }
      else if (key === "logOutItem") {
        this.props.navigation.navigate('Login');
      }
      else if (key === "developerItem") {
        this.props.navigation.navigate('Developer');
      }
      return ;
    }
    settingItem = ({ item }) => {
      return (
        <ListItem
          button={ true }
          onPress={ () => { this.handleAction(item.key) }}
        >
          <Left>
            <Icon name={ item.icon } />
            <Text>{ item.text }</Text>
          </Left>
          <Right>
            <Icon name={ "arrow-dropright" } />
          </Right>
        </ListItem>
      );
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
        <Container>
          <AppHeader
            title={ 'Settings' }
            icon={ 'arrow-back' }
            onPress={ () => this.props.navigation.goBack() }
          />
          <Content padder>
            <FlatList
              data={ settingsItems }
              keyExtractor={ item => item.key }
              renderItem={ this.settingItem }
            />
          </Content>
        </Container>
        </React.Fragment>
      )
    }
}

export default SettingsScreen;
