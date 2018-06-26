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
    return ;
  }
  render () {
    return (
      <Content padder={ true }>
        <H2>{ "Badges" }</H2>
        <Badge style={styles.mb}>
          <Text>2</Text>
        </Badge>
        <Badge primary style={styles.mb}>
          <Text>2</Text>
        </Badge>
        <Badge success style={styles.mb}>
          <Text>2</Text>
        </Badge>
        <Badge info style={styles.mb}>
          <Text>2</Text>
        </Badge>
        <Badge warning style={styles.mb}>
          <Text>2</Text>
        </Badge>
        <Badge danger style={styles.mb}>
          <Text>2</Text>
        </Badge>
        <Badge primary style={styles.mb}>
          <Icon
            name="star"
            style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}
          />
        </Badge>
        <Badge
          style={{ backgroundColor: "black" }}
          textStyle={{ color: "white" }}
        >
          <Text>1866</Text>
        </Badge>
      </Content>
    );
  }
}

export default BadgesContainer;
