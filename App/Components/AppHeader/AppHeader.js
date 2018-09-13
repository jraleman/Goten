import React from 'react';
import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Title
} from 'native-base';
import styles from './styles';

class AppHeader extends React.Component {
  constructor (props) {
    super(props);
    this._onPressLeft = this.props.onPressLeft;
    this._iconLeft = this.props.iconLeft;
    this._onPressRight = this.props.onPressRight;
    this._iconRight = this.props.iconRight;
    this._title = this.props.title;
    this.state = {};
  }
  render () {
    return (
      <React.Fragment>
        <Header style={ styles.header }>
          <Left>
            <Button
              transparent={ true }
              onPress={ this._onPressLeft }
            >
              <Icon name={ this._iconLeft } />
            </Button>
          </Left>
          <Body>
            <Title>{ this._title }</Title>
          </Body>
          <Left>
            <Button
              transparent={ true }
              onPress={ this._onPressRight }
            >
              <Icon name={ this._iconRight } />
            </Button>
          </Left>
        </Header>
      </React.Fragment>
    );
  }
}

AppHeader.propTypes = {
  onPressLeft: PropTypes.func,
  iconLeft = PropTypes.string,
  onPressRight = PropTypes.func,
  iconRight = PropTypes.string,
  title = PropTypes.string,
};

export default AppHeader;
