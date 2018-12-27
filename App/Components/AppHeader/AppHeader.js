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
    const { leftOnPress, leftIcon, rightOnPress, rightIcon, title } = this.props;
    return (
      <React.Fragment>
        <Header style={ styles.header }>
          <LeftSide leftOnPress={ leftOnPress } leftIcon={ leftIcon } />
          <Body>
            <Title>{ title }</Title>
          </Body>
          <RightSide rightOnPress={ rightOnPress } rightIcon={ rightIcon } />
        </Header>
      </React.Fragment>
    );
  }
}

const LeftSide = props => {
  const { leftOnPress, leftIcon } = props;
  return (
    <React.Fragment>
      <Left>
        <Button
          transparent
          onPress={ leftOnPress }
        >
          <Icon name={ leftIcon } />
        </Button>
      </Left>
    </React.Fragment>
  );
}

const RightSide = props => {
  const { rightOnPress, rightIcon } = props;
  return (
    <React.Fragment>
      <Right>
        <Button
          transparent
          onPress={ rightOnPress }
        >
          <Icon name={ rightIcon } />
        </Button>
      </Right>
    </React.Fragment>
  );
}

AppHeader.propTypes = {
  leftOnPress: PropTypes.func,
  leftIcon: PropTypes.string,
  rightOnPress: PropTypes.func,
  rightIcon: PropTypes.string,
  title: PropTypes.string.isRequired
};

AppHeader.defaultProps = {
  leftOnPress: props => props.navigation.openDrawer(),
  leftIcon: 'menu',
  rightOnPress: () => window.alert('Pass me an action! :)'),
  rightIcon: '',
  title: '{ screenTitle }'
}

export default AppHeader;
