import React from 'react';
import {
  TouchableOpacity,
  Platform,
  Dimensions,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {
  List,
  ListItem,
  Text,
  View,
  Row,
  Icon,
  Content,
  Container,
  Left,
  Right,
  Badge,
  Thumbnail,
  H1,
  H2,
  H3,
  H4,
} from 'native-base';
import styles from './styles';

import { Images } from '../../Themes';

class DrawerNavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconName: null,
      routeName: null,
      badgeCount: 0,
      avatar: null
    }
    return ;
  }
  componentWillMount () {
    return ;
  }
  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle={ 'dark-content' } />
        <Container style={{ bottom: 0 }}>
          <Content
            bounces={ false }
            style={ styles.content }
          >
            <NavigationHeader
              headerText={ "User" }
              onPress={ () => alert('Hello') }
              backgroundImg={ Images.drawerNavigationCover }
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
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

/*

<NavigationHeader
  headerText={ "User" }
  avatar={ this.state.avatar }
  backgroundImg={ images.drawerCover }
  onPress={ () => this.props.navigation.navigate('Profile') }
/>

*/

// ~~ Constants ~~
const BACKGROUND_OPACITY = 0.25;
const BACKGROUND_BLUR = 2.25
const BACKGROUND_OVERLAY = '#e4e4a1';


const NavigationHeader = props => {
  return (
    <View style={ styles.container }>

    <ImageBackground
      blurRadius={ BACKGROUND_BLUR }
      source={ props.backgroundImg }
      style={ styles.wallpaper }
      resizeMode={ "cover" }
    >
      <View style={[
        styles.overlay, {
          backgroundColor: BACKGROUND_OVERLAY,
          opacity: BACKGROUND_OPACITY
        }
      ]}/>
      <TouchableOpacity
        onPress={ props.onPress }
        style={ styles.drawer }
      >
        <Thumbnail source={{ uri: props.avatarImg }}/>
        <H2 style={ styles.drawerText }>{ props.headerText }</H2>
      </TouchableOpacity>
    </ImageBackground>

    </View>
  );
}





const NavigationRow = props => {
  // alert(JSON.stringify(props.item, null, 4));
  let iconName;
  if (props.item.routeName === 'Search Doctors') {
    iconName = 'search';
  }
  else if (props.item.routeName === 'Notifications') {
    iconName = 'notifications';
  }
  else if (props.item.routeName === 'Appointments') {
    iconName = 'calendar';
  }
  else if (props.item.routeName === 'Call Log') {
    iconName = 'call';
  }
  else if (props.item.routeName === 'Settings') {
    iconName = 'settings';
  }

  // badges
  let badgeCount;
  if (props.item.routeName === 'Search Doctors') {
    badgeCount = null;
  }
  else if (props.item.routeName === 'Notifications') {
    badgeCount = 42;
  }
  else if (props.item.routeName === 'Appointments') {
    badgeCount = null;
  }
  else if (props.item.routeName === 'Call Log') {
    badgeCount = 3;
  }
  else if (props.item.routeName === 'Settings') {
    badgeCount = null;
  }

  return (
    <ListItem onPress={ () => props.nav.navigate(props.item.routeName) }>
      <RowLeft
        iconName={ iconName }
        routeName={ props.item.routeName }
      />
      { badgeCount && <RowRight badgeText={`${badgeCount}`} /> }
    </ListItem>
  );
}

const RowLeft = props => {
  return (
    <Left>
      <Icon
        active={ true }
        name={ props.iconName }
        style={{ color: "#777", fontSize: 26, width: 30 }}
      />
      <Text>{ props.routeName }</Text>
    </Left>
  );
}

const RowRight = props => {
  return (
    <Right style={{ flex: 1 }}>
      <Badge style={ styles.badge }>
        <Text style={ styles.badgeText }>{ props.badgeText }</Text>
      </Badge>
    </Right>
  );
}

export default DrawerNavigationContainer;
