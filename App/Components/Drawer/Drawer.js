import React from 'react';
import {
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {
  Container,
  Content,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  View
} from 'native-base';

import styles from './styles';
import { Images } from '../../Theme';

const BACKGROUND_OPACITY = 0.35;
const BACKGROUND_BLUR = 0.75;
const BACKGROUND_OVERLAY = '';

class Drawer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      avatar: null,
      iconName: null,
      routeName: null
    };
    return;
  }
  render () {
    return (
      <React.Fragment>
        <Container style={ styles.drawerContainer }>
          <Content
            bounces={ false }
            style={ styles.drawerContent }
          >
            <NavigationHeader
              avatarImg={{ uri: 'https://www.boldlylead.com/wp-content/uploads/2018/02/male_white_bald_glasses.png' }}
              backgroundImg={ Images.drawerNavigationCover }
              headerTitle={ 'Johnny Sins' }
              headerSubtitle={ 'Doctor and Teacher' }
              onPress={ () => this.props.navigation.navigate('Profile') }
            />
            <List
              style={{ height: 550 }}
              dataArray={ this.props.items }
              renderRow={ (item) =>
                <NavigationRow
                  item={ item }
                  nav={ this.props.navigation }
                />
              }
            />
            { /* <NavigationFooter nav={ this.props.navigation } /> */ }
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

function NavigationHeader (props) {
  return (
    <React.Fragment>
      <View style={ styles.drawerHeaderContainer }>
        <ImageBackground
          blurRadius={ BACKGROUND_BLUR }
          resizeMode={ 'cover' }
          source={ props.backgroundImg }
          style={ styles.drawerHeaderWallpaper }
        >
          <View style={ [
            styles.drawerHeaderWallpaperOverlay, {
              backgroundColor: BACKGROUND_OVERLAY,
              opacity: BACKGROUND_OPACITY
            }] }
          />
          <TouchableOpacity
            onPress={ props.onPress }
            style={ styles.drawerHeaderContent }
          >
            <Thumbnail
              size={ 80 }
              source={ props.avatarImg }
              square={ false }
              style={ styles.drawerHeaderAvatar }
            />
            <Text style={ styles.drawerHeaderTitle }>
              { props.headerTitle }
            </Text>
            <Text style={ styles.drawerHeaderSubtitle }>
              { props.headerSubtitle }
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </React.Fragment>
  );
};

const NavigationRow = props => {
  return (
    <React.Fragment>
      <ListItem onPress={ () => props.nav.navigate(props.item.routeName) }>
        <Icon
          active={ true }
          name={ props.item.iconName }
          style={ styles.drawerRow }
        />
        <Text>{ props.item.routeName }</Text>
      </ListItem>
    </React.Fragment>
  );
};

const NavigationFooter = props => {
  return (
    <React.Fragment>
      <TouchableOpacity onPress={ () => props.nav.navigate('Settings') }>
        <View style={ styles.drawerFooter }>
          <Icon
            active={ true }
            name={ 'settings' }
            style={{ marginRight: 12}}
          />
          <Text>{ 'Settings' }</Text>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default Drawer;
