import React from 'react';
import {
  Badge,
  Body,
  Button,
  Card,
  CardItem,
  CheckBox,
  Container,
  Content,
  Fab,
  Footer,
  FooterTab,
  Form,
  H1,
  H2,
  H3,
  Header,
  Icon,
  IconNB,
  Input,
  InputGroup,
  Item,
  Label,
  Left,
  ListItem,
  Picker,
  Radio,
  Right,
  Segment,
  Separator,
  Spinner,
  Subtitle,
  SwipeRow,
  Switch,
  Tab,
  TabBar,
  TabContainer,
  TabHeading,
  Text,
  Textarea,
  Thumbnail,
  Title,
  Toast,
  View
} from 'native-base';
import styles from './styles';

class NativeBaseScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>

        { /* Header -> Move to its own component */ }
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{ "NativeBaseScreen" }</Title>
          </Body>
          <Right />
        </Header>

        <Content style={ styles.content }>
          <H1>{ "Components" }</H1>

          {/* Badge -> Move to its own container */}
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

        </Content>

      </Container>
    );
  }
}

export default NativeBaseScreen;
