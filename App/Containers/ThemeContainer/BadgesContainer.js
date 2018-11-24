import React from 'react';
import {
  Badge,
  Content,
  H2,
  Icon,
  Text
} from 'native-base';
import styles from './styles';

class BadgesContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <Content padder={ true }>
        <H2 style={ styles.mb15 }>{ 'Badges' }</H2>
        <Badge style={ styles.mb }>
          <Text>{ '4' }</Text>
        </Badge>
        <Badge
          primary={ true }
          style={ styles.mb }
        >
          <Text>{ '8' }</Text>
        </Badge>
        <Badge
          success={ true }
          style={ styles.mb }
        >
          <Text>{ '15' }</Text>
        </Badge>
        <Badge
          info={ true }
          style={ styles.mb }
        >
          <Text>{ '16' }</Text>
        </Badge>
        <Badge
          warning={ true }
          style={ styles.mb }
        >
          <Text>{ '23' }</Text>
        </Badge>
        <Badge
          danger={ true }
          style={ styles.mb }
        >
          <Text>{ '42' }</Text>
        </Badge>
        <Badge
          primary={ true }
          style={ styles.mb }
        >
          <Icon
            name='star'
            style={ styles.badgeIcon }
          />
        </Badge>
        <Badge style={ styles.badgeCustom }>
          <Text>{ '1024' }</Text>
        </Badge>
      </Content>
    );
  }
}

export default BadgesContainer;
