import React from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  H1
} from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';
import * as actionCreators from '../../Redux/Modules/Colors/actions';
import BasicoHeader from '../../Components/BasicoHeader';
import ColorsContainer from '../../Containers/ColorsContainer';

class ColorsScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <BasicoHeader
          title={ "Colors" }
          icon={ 'arrow-back' }
          onPress={ () => this.props.navigation.goBack() }
        />
        <Content style={ styles.content }>
          <Button
            info={ true }
            style={ styles.button }
            onPress={ () => this.props.loadColor() }
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
