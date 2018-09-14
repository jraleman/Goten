#!/usr/bin/env node


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
  Left,
  Right,
  Textarea,
  View
} from 'native-base';
import StarRating from 'react-native-star-rating';
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
    this.state = {
      starCount: 4.25
    };
    return;
  }
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return (true);
    });
  }
  onStarRatingPress (rating) {
    this.setState({ starCount: rating });
  }
  /**
   * Renders the component.
   * @return { string } - RN markup for the component
   */
  render () {
    return (
      <React.Fragment>
        <Container padder={ true }>
          <AppHeader
            title={ 'Profile' }
            icon={ 'arrow-back' }
            onPress={ () => this.props.navigation.goBack() }
            iconRight={ 'more' }
            onPressRight={ () => window.alert('edit') }
          />
          <Content
            padder={ true }
            style={ styles.content }
          >
            <ProfileAvatar
              userName={ "John Doe" }
              picture={{ uri: 'https://api.adorable.io/avatars/256/basico@adorable.io.png' }}
              lastLogin={ '2 hours ago' }
            />
            <StarRating
              maxStars={ 5 }
              rating={ this.state.starCount }
              starSize={ 25 }
              activeOpacity={ 0.42 }
              disabled={ true }
              selectedStar={ (rating) => this.onStarRatingPress(rating) }
              containerStyle={{ justifyContent: 'center' }}
              fullStarColor={ '#453325'}
              halfStarColor={ '#678473'}
            />
            <ProfileInfo
              email={ 'example@basico.app' }
              phone={ '+1 (322) 233-4354' }
              gender={ 'male' }
              dob={ 'January 30, 1993' }
            />
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};


const BasicoItemInput = (props) => {
  return (
    <Item
      inlineLabel={ true }
      style={{ borderColor: '#f9f9f9' }}
    >
      <Left>
        <Label>{ props.label }</Label>
      </Left>
      <Input style={{ textAlign: 'right' }}
        placeholder={ props.data }
        disabled={ true }
        underline={ false }
      />
    </Item>
  );
};

const BasicoTextArea = (props) => {
  return (
    <View>
      <Label>{ props.label }</Label>
      <Textarea
        placeholder={ props.data }
        disabled={ true }
        rowSpan={ 3 }
        bordered={ true }
      />
    </View>
  );
};

const ProfileAvatar = (props) => {
  return (
    <View style={{ alignSelf: 'center', alignItems: 'center' }}>
      <H1 style={{ marginTop: 6, marginBottom: 12 }}>
        { props.userName }
      </H1>
      <Thumbnail
        large={ true }
        source={ props.picture }
        style={{ marginTop: 6, marginBottom: 12 }}
       />
      <Text style={{ marginTop: 6, marginBottom: 12 }}>
        { "Last login: " + props.lastLogin }
      </Text>
    </View>
  );
};

const ProfileInfo = (props) => {
  return (
    <View style={{ marginTop: 36, marginBottom: 12 }}>

      <BasicoItemInput
        label={ 'Email' }
        data={ props.email }
      />
      <BasicoItemInput
        label={ 'Phone Number' }
        data={ props.phone }
      />
      <BasicoItemInput
        label={ 'Gender' }
        data={ props.gender }
      />
      <BasicoItemInput
        label={ 'Date of Birth' }
        data={ props.dob }
      />
    </View>
  );
};


export default ProfileScreen;
