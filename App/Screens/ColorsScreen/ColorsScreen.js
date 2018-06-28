import React from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  H1
} from 'native-base';
import styles from './styles';

import ScarletHeader from '../../Components/ScarletHeader';

class ColorsScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <ScarletHeader
          title={ "Colors" }
          icon={ 'arrow-back' }
          onPress={ () => this.props.navigation.goBack() }
        />
        <Content>
          <H1 style={ styles.title }>{ "Click the button! :)" }</H1>
          <Button
            block={ true }
            light={ true }
            style={ styles.button }
          >
            <Text>{ "Change Color" }</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default ColorsScreen;
