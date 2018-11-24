import React from 'react';
import {
  Content,
  H2,
  Spinner
} from 'native-base';
import styles from './styles';

class SpinnersContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <Content>
        <H2 style={ styles.mb15 }>{ 'Spinners' }</H2>
        <Spinner />
        <Spinner color='red' />
        <Spinner color='green' />
        <Spinner color='blue' />
      </Content>
    );
  }
}

export default SpinnersContainer;
