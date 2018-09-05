import React from 'react';
import {
  Platform
} from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base';
import styles from './styles';
import AppHeader from '../../Components/AppHeader';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

class TestScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
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
    );
  }
}

export default TestScreen;
