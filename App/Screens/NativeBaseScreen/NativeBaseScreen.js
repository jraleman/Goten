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

import { BadgesContainer } from '../../Containers/NativeBaseContainers';

class NativeBaseScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>

        { /* Header -> Move to its own component */ }
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{ "NativeBaseScreen" }</Title>
          </Body>
          <Right />
        </Header>

        <Content style={ styles.content }>
          <H1>{ "Components" }</H1>
          <BadgesContainer />
        </Content>
      </Container>
    );
  }
}

export default NativeBaseScreen;
