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

/*
** NEW STORE || MOVE THIS FROM HERE, PLACE IT IN REDUX/INDEX.JS
*/
import { connect } from 'react-redux';
import * as actionCreators from '../../Redux/Modules/Colors/actions';


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
    alert(this.props.color)
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
          <ColorsContainer color={ this.props.color }/>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return (state);
};

export default connect(mapStateToProps, actionCreators)(ColorsScreen);
