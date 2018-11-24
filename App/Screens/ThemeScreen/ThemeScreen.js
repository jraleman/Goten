import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Content,
  H1
} from 'native-base';
import styles from './styles';
import AppHeader from '../../Components/AppHeader';
import {
  BadgesContainer,
  ButtonsContainer,
  CardsContainer,
  CheckBoxContainer,
  FormContainer,
  IconsContainer,
  ListsContainer,
  SpinnersContainer,
  RadioButtonsContainer
} from '../../Containers/ThemeContainer';

import '../../Config';

class ThemeScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
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
          title={ 'Theme' }
          onPress={ () => this.props.navigation.openDrawer() }
          icon={ 'menu' }
        />
        <Content style={ styles.content }>
          <H1>{ 'Components' }</H1>
          <BadgesContainer />
          <ButtonsContainer />
          <CardsContainer />
          <CheckBoxContainer />
          <FormContainer />
          <IconsContainer />
          <ListsContainer />
          <SpinnersContainer />
          <RadioButtonsContainer />
        </Content>
      </Container>
      </React.Fragment>
    );
  }
}

export default ThemeScreen;
