import React from 'react';
import {
  Container,
  Content,
  Text
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
          <Text>{ "ColorsScreen" }</Text>
        </Content>
      </Container>
    );
  }
}

export default ColorsScreen;
