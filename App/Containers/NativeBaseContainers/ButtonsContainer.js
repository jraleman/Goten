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
      <Content padder>
        <H2 style={ styles.mb15 }>{ 'Buttons' }</H2>
        <Button
          block
          light
          style={ styles.mb15 }
        >
          <Text>{ 'Light' }</Text>
        </Button>
        <Button
          block
          info
          style={ styles.mb15 }
        >
          <Text>{ 'Info' }</Text>
        </Button>
        <Button
          block
          primary
          style={ styles.mb15 }
        >
          <Text>{ 'Primary' }</Text>
        </Button>
        <Button
          block
          success
          style={styles.mb15}
        >
          <Text>{ 'Success' }</Text>
        </Button>
        <Button
          block
          warning
          style={ styles.mb15 }
        >
          <Text>{ 'Warning' }</Text>
        </Button>
        <Button
          block
          danger
          style={ styles.mb15 }
        >
          <Text>{ 'Danger' }</Text>
        </Button>
        <Button
          block
          dark
          style={ styles.mb15 }
        >
          <Icon active name='paw' />
          <Text>{ 'Custom' }</Text>
        </Button>
      </Content>
    );
  }
}

export default ButtonsContainer;
