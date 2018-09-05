import React from 'react';
import {
  Container,
  Content,
  Button,
  Text
} from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';
import * as actionCreators from '../../Redux/Modules/Colors/actions';
import AppHeader from '../../Components/AppHeader';
import ColorsContainer from '../../Containers/ColorsContainer';

class ColorsScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <Container style={ styles.container }>
        <AppHeader
          title={ 'Colors' }
          icon={ 'arrow-back' }
          onPress={ () => this.props.navigation.goBack() }
        />
        <Content style={ styles.content }>
          <Button
            info={ true }
            style={ styles.button }
            onPress={ () => this.props.loadColor() }
          >
            <Text>{ 'Randomize Color' }</Text>
          </Button>
          <ColorsContainer color={ this.props.color } />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return (state);
};

export default connect(mapStateToProps, actionCreators)(ColorsScreen);
