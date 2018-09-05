import React from 'react';
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
  LoadersContainer,
  RadioButtonsContainer
} from '../../Containers/NativeBaseContainers';

import '../../Config';

class NativeBaseScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <Container style={ styles.container }>
        <AppHeader
          title={ 'NativeBase' }
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
          <LoadersContainer />
          <RadioButtonsContainer />
        </Content>
      </Container>
    );
  }
}

export default NativeBaseScreen;
