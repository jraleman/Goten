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
import PropTypes from 'prop-types';
import styles from './styles';

class AppHeader extends React.Component {
  constructor (props) {
    super(props);
    this._onPress = this.props.onPress;
    this._icon = this.props.icon;
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
              onPress={ this._onPress }
            >
              <Icon name={ this._icon } />
            </Button>
          </Left>
          <Body>
            <Title>{ this._title }</Title>
          </Body>
          <Right>
            <Button
              transparent={ true }
              onPress={ this._onPressRight }
            >
              <Icon name={ this._iconRight } />
            </Button>
          </Right>
        </Header>
      </React.Fragment>
    );
  }
}

AppHeader.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.string,
  onPressRight: PropTypes.func,
  iconRight: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default AppHeader;
