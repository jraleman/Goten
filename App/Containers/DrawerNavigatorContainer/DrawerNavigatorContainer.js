import React from 'react';
import {
  Container,
  Content,
  H1,
  Text
} from 'native-base';
import styles from './styles';

class DrawerNavigationContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <Content>
          <H1>{ "DrawerNavigationContainer" }</H1>
          <Text>{ "Hello there!" }</Text>
        </Content>
      </Container>
    );
  }
}
