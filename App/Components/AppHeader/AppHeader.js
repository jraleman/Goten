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
  }
  render () {
    const { onPress, icon, onPressRight, iconRight, title } = this.props;
    return (
      <React.Fragment>
        <Header style={ styles.header }>
          <Left>
            <Button
              transparent={ true }
              onPress={ onPress }
            >
              <Icon name={ icon } />
            </Button>
          </Left>
          <Body>
            <Title>{ title }</Title>
          </Body>
          <Right>
            <Button
              transparent={ true }
              onPress={ onPressRight }
            >
              <Icon name={ iconRight } />
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
