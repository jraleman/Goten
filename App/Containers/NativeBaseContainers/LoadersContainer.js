import React from 'react';
import {
  Content,
  H2,
  Spinner
} from 'native-base';
import styles from './styles';

class LoadersContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Content>
        <H2 style={ styles.mb15 }>{ "Loaders (Spinners)" }</H2>
        <Spinner />
        <Spinner color="red" />
        <Spinner color="green" />
        <Spinner color="blue" />
      </Content>
    );
  }
}

export default LoadersContainer;
