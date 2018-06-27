import React from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  H1,
  Header,
  Icon,
  Left,
  Right,
  Title
} from 'native-base';
import styles from './styles';

import ScarletHeader from '../../Components/ScarletHeader';
import {
  BadgesContainer,
  ButtonsContainer,
  CardsContainer,
  CheckBoxContainer,
  FormContainer,
  IconsContainer,
  ListsContainer,
  LoadersContainer
} from '../../Containers/NativeBaseContainers';

class NativeBaseScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <ScarletHeader
          title={ "NativeBase" }
          onPress={ () => this.props.navigation.goBack() }
          icon={ "arrow-back" }
        />
        <Content style={ styles.content }>
          <H1>{ "Components" }</H1>
          <BadgesContainer />
          <ButtonsContainer />
          <CardsContainer />
          <CheckBoxContainer />
          <FormContainer />
          <IconsContainer />
          <ListsContainer />
          <LoadersContainer />
        </Content>
      </Container>
    );
  }
}

export default NativeBaseScreen;
