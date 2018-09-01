import React from 'react';
import {
  TouchableOpacity,
  Platform,
  Dimensions,
  Image,
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
    // var avatarPicture = "https://dev.vemidoc.com/" + global.config.userData.profilepic;
    // var avatarPicture =
    // this.setState({
    //   avatar: avatarPicture
    // });
    return ;
  }
  render() {
    return (
      <Container style={{ bottom: 0 }}>
        <Content
          bounces={ false }
          style={ styles.content }
        >

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

const NavigationHeader = props => {
  return (
    <View style={ styles.container }>
      <Image
        source={ props.backgroundImg }
        style={ styles.drawerCover }
      />
      <TouchableOpacity
        onPress={ props.onPress }
        style={ styles.drawer }
      >
        <Thumbnail source={{ uri: props.avatar }}/>
        <H2 style={ styles.drawerText }>{ props.headerText }</H2>
      </TouchableOpacity>
    </View>
  );
}

const NavigationRow = props => {
  // alert(JSON.stringify(props.item, null, 4));
  // quick hax (because i luv C)
  let iconName;
  if (props.item.routeName === 'Search Doctors') {
    iconName = 'search';
  } else if (props.item.routeName === 'Notifications') {
    iconName = 'notifications';
  } else if (props.item.routeName === 'Appointments') {
    iconName = 'calendar';
  } else if (props.item.routeName === 'Call Log') {
    iconName = 'call';
  } else if (props.item.routeName === 'Settings') {
    iconName = 'settings';
  }

  // badges
  let badgeCount;
  if (props.item.routeName === 'Search Doctors') {
    //badgeCount = 0;
  } else if (props.item.routeName === 'Notifications') {
    badgeCount = 42;
  } else if (props.item.routeName === 'Appointments') {
    //badgeCount = 0;
  } else if (props.item.routeName === 'Call Log') {
    badgeCount = 3;
  } else if (props.item.routeName === 'Settings') {
    //badgeCount = 0;
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
