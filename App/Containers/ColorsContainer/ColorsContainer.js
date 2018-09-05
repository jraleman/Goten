import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import styles from './styles';

class ColorsContainer extends React.Component {
  constructor (props) {
    super(props);
    this._color = this.props.color;
    this.state = {};
  }
  render () {
    // alert(this._color);
    return (
      <Container style={ styles.container }>
        <Content style={[ styles.content, { backgroundColor: this._color }]} />
      </Container>
    );
  }
}

export default ColorsContainer;
