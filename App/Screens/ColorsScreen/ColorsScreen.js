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
import ColorsContainer from '../../Containers/ColorsContainer';

class ColorsScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  handleButton () {
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
        <Content style={ styles.content }>
          <Button
            info={ true }
            style={ styles.button }
            onPress={ this.handleButton }
          >
            <Text>{ "Randomize Color" }</Text>
          </Button>
          <ColorsContainer />
        </Content>
      </Container>
    );
  }
}

export default ColorsScreen;
