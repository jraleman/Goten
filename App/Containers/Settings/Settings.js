import React from 'react';
import {
  BackHandler,
  FlatList,
  StatusBar
} from 'react-native'
import {
  Content,
  Container,
  Left,
  Right,
  Text,
  Icon,
  ListItem,
} from 'native-base'

import AppHeader from '../../Components/AppHeader';
import styles from './styles';

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

class Settings extends React.Component {
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
        return ; // REMOVE THIS LINE
      }
      else if (key === "developerItem") {
        this.props.navigation.navigate('Developer');
      }
      window.alert('Work in Progress');  // REMOVE THIS LINE
      return ;
    }
    settingItem = ({ item }) => {
      return (
        <ListItem
          style={ styles.listItem }
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
    render () {
      return (
        <React.Fragment>
          <StatusBar
            hidden={ false }
            barStyle={ 'light-content' }
            animated={ true }
          />
          <Container style={ styles.container }>
            <AppHeader
              title={ 'Settings' }
              icon={ 'menu' }
              onPress={ () => this.props.navigation.openDrawer() }
            />
            <Content
              style={ styles.content }
              padder={ true }
            >
              <FlatList
                style={ styles.flatList }
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

export default Settings;
