#!/usr/bin/env node

/**
 * OnboardingScreen/OnboardingScreen.js
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  ImageBackground
} from 'react-native';
import {
  List,
  ListItem,
  Text,
  View,
  Icon,
  Content,
  Container,
  Left,
  Right,
  Badge,
  Thumbnail,
  H2
} from 'native-base';
// ~~ Local Dependencies ~~
import styles from './styles';
import { Images } from '../../Themes';

// ~~ Constants ~~
const BACKGROUND_OPACITY = 0.35;
const BACKGROUND_BLUR = 0.75;
const BACKGROUND_OVERLAY = '#121212';

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends {React.Component}
 */
class DrawerNavigationContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      iconName: null,
      routeName: null,
      avatar: null
    };
    return ;
  }
  /**
   * Renders the component.
   * @return {string} - RN markup for the component
   */
  render () {
    return (
      <React.Fragment>
        <StatusBar barStyle={ 'dark-content' } />
        <Container style={ { bottom: 0 } }>
          <Content
            bounces={ false }
            style={ styles.content }
          >
            <DrawerNavigationHeader
              title={ 'Joe Doe' }
              onPress={ () => window.alert('Hello') }
              backgroundImg={ Images.drawerNavigationCover }
              avatarImg={ Images.drawerNavigationAvatar }
            />
            <List
              style={ { height: 550 } }
              dataArray={ this.props.items }
              renderRow={ (item) =>
                <NavigationRow
                  item={ item }
                  nav={ this.props.navigation }
                /> }
            />
            <DrawerNavigationFooter />
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

/**
 * SubContainer to render the drawer navigation header.
 * @const DrawerNavigationHeader
 */
const DrawerNavigationHeader = props => {
  return (
    <React.Fragment>
      <View style={ styles.container }>
        <ImageBackground
          blurRadius={ BACKGROUND_BLUR }
          source={ props.backgroundImg }
          style={ styles.wallpaper }
          resizeMode={ 'cover' }
        >
          <View style={ [
            styles.overlay, {
              backgroundColor: BACKGROUND_OVERLAY,
              opacity: BACKGROUND_OPACITY
            }] }
          />
          <TouchableOpacity
            onPress={ props.onPress }
            style={ styles.drawer }
          >
            <Thumbnail
              source={ props.avatarImg }
              square={ true }
              size={ 80 }
              style={ styles.avatarImg }
            />
            <H2 style={ styles.title }>{ props.headerText }</H2>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </React.Fragment>
  );
};

/**
 * SubContainer to render the drawer navigation row.
 * @const DrawerNavigationHeader
 */
const DrawerNavigationRow = props => {
  return (
    <React.Fragment>
      <ListItem onPress={ () => props.nav.navigate(props.item.routeName) }>
        <Icon
          active={ true }
          name={ props.iconName }
          style={{
            color: '#777',
            fontSize: 26,
            width: 30
          }}
        />
        <Text>{ props.routeName }</Text>
      </ListItem>
    </React.Fragment>
  );
};

/**
 * SubContainer to render the drawer navigation footer.
 * @const DrawerNavigationHeader
 */
const DrawerNavigationFooter = props => {
  return (
    <React.Fragment>
      <View style={ styles.footer }>
        <Text>{ 'NavigationFooter' }</Text>
      </View>
    </React.Fragment>
  );
};

export default DrawerNavigationContainer;
