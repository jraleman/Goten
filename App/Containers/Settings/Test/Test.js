import React from 'react';
import {
  Platform,
    StatusBar
} from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base';
import AppHeader from '../../../Components/AppHeader';

import styles from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

class Test extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <React.Fragment>
      <StatusBar
        hidden={ false }
        barStyle={ 'light-content' }
        animated={ true }
      />
      <Container style={ styles.container }>
        <AppHeader
          title={ 'Test Screen' }
          onPress={ () => this.props.navigation.goBack() }
          icon={ 'arrow-back' }
        />
        <Content>
          <Text>{ instructions }</Text>
        </Content>
      </Container>
      </React.Fragment>
    );
  }
}

export default Test;
