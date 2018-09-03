import React from 'react';
import {
  Container,
  Content
} from 'native-base';

class ForgotPasswordScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <Content padder={ true }>
          <Text>{ "ForgotPasswordScreen" }</Text>
        </Content>
      </Container>
    );
  }
}

export default ForgotPasswordScreen;
