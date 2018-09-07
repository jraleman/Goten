import React from 'react';
import {
  Content,
  Button,
  Icon,
  Text,
  H2
} from 'native-base';
import styles from './styles';

class ButtonsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <Content padder={ true }>
        <H2 style={ styles.mb15 }>{ 'Buttons' }</H2>
        <Button
          block={ true }
          light={ true }
          style={ styles.mb15 }
        >
          <Text>{ 'Light' }</Text>
        </Button>
        <Button
          block={ true }
          info={ true }
          style={ styles.mb15 }
        >
          <Text>{ 'Info' }</Text>
        </Button>
        <Button
          block={ true }
          primary={ true }
          style={ styles.mb15 }
        >
          <Text>{ 'Primary' }</Text>
        </Button>
        <Button
          block={ true }
          success={ true }
          style={ styles.mb15 }
        >
          <Text>{ 'Success' }</Text>
        </Button>
        <Button
          block={ true }
          warning={ true }
          style={ styles.mb15 }
        >
          <Text>{ 'Warning' }</Text>
        </Button>
        <Button
          block={ true }
          danger={ true }
          style={ styles.mb15 }
        >
          <Text>{ 'Danger' }</Text>
        </Button>
        <Button
          block={ true }
          dark={ true }
          style={ styles.mb15 }
        >
          <Icon active={ true } name='paw' />
          <Text>{ 'Custom' }</Text>
        </Button>
      </Content>
    );
  }
}

export default ButtonsContainer;
