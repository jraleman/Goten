import React from 'react';
import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  Title
} from 'native-base';
import styles from './styles';

class ScarletHeader extends React.Component {
  constructor (props) {
    super(props);
    this._onPress = this.props.onPress;
    this._icon = this.props.icon;
    this._title = this.props.title;
    this.state = {};
    return ;
  }
  render () {
    return (
      <Header style={ styles.header }>
        <Left>
          <Button
            transparent={ true }
            onPress={ this._onPress }
          >
            <Icon name={ this._icon } />
          </Button>
        </Left>
        <Body>
          <Title>{ this._title }</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default ScarletHeader;
