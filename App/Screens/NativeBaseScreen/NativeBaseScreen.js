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

        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              {/*<Icon name="arrow-back" />*/}
            </Button>
          </Left>
          <Body>
            <Title>{ "NativeBaseScreen" }</Title>
          </Body>
          <Right />
        </Header>

      </Container>
    );
  }
}

export default NativeBaseScreen;
