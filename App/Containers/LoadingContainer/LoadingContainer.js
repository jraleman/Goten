import React from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';
import styles from './styles';

class LoadingContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <Container style={ styles.container }>
          <Content>
            <Text>{ "LoadingContainer" }</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

export default LoadingContainer;
