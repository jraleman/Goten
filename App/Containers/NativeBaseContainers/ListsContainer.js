import React from 'react';
import { ListView } from 'react-native';
import {
  Content,
  H2,
  H3,
  Header,
  Title,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  Thumbnail
} from 'native-base';
import styles from './styles';

const listData = [
  "Simon Mignolet",
  "Nathaniel Clyne",
  "Dejan Lovren",
  "Mama Sakho",
  "Alberto Moreno",
  "Emre Can",
  "Joe Allen",
  "Phil Coutinho"
];
const avatarData = [
  {
    img: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
    text: "Kumar Pratik",
    note: "Its time to build a difference . .",
    time: "3:43 pm"
  },
  {
    img: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
    text: "Kumar Sanket",
    note: "One needs courage to be happy and smiling all time . . ",
    time: "1:12 pm"
  },
  {
    img: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
    text: "Megha",
    note: "Live a life style that matchs your vision",
    time: "10:03 am"
  },
  {
    img: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
    text: "Atul Ranjan",
    note: "Failure is temporary, giving up makes it permanent",
    time: "5:47 am"
  },
  {
    img: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
    text: "Saurabh Sahu",
    note: "The biggest risk is a missed opportunity !!",
    time: "11:11 pm"
  },
  {
    img: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
    text: "Varun Sahu",
    note: "Wish I had a Time machine . .",
    time: "8:54 pm"
  }
];
const swipeData = [
  "Simon Mignolet",
  "Nathaniel Clyne",
  "Dejan Lovren",
  "Mama Sakho",
  "Alberto Moreno",
  "Emre Can",
  "Joe Allen",
  "Phil Coutinho"
];

class ListsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: swipeData
    };
    return ;
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  // not used yet lol
  _renderListData (data) {
    return (
      <ListItem>
        <Left>
          <Text>
            { data }
          </Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    );
  }
  render () {
    return (
      <Content padder={ true }>
        <H2 style={ styles.mb15 }>{ "Lists" }</H2>
        <Content padder={ true }>
          <H3 style={ styles.mb15 }>{ "Simple List" }</H3>
          <List
            dataArray={ listData }
            renderRow={ data =>
              <ListItem style={ styles.listItem }>
                <Left>
                  <Text>
                    { data }
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem> }
          />
        </Content>
        <Content padder={ true }>
          <H3 style={ styles.mb15 }>{ "Avatar List" }</H3>
          <List
            dataArray={ avatarData }
            renderRow={data =>
              <ListItem
                avatar={ true }
                style={ styles.listItem }
              >
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
                <Right>
                  <Text note>
                    {data.time}
                  </Text>
                </Right>
              </ListItem>}
          />
        </Content>
        <Content padder={ true }>
          <H3 style={ styles.mb15 }>{ "Swipable List" }</H3>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem style={{ paddingLeft: 20 }}>
                <Left>
                  <Text>
                    { data }
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button
                full
                onPress={() => alert(data)}
                style={{
                  backgroundColor: "#CCC",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button
                full
                danger
                onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Content>
      </Content>
    );
  }
}

export default ListsContainer;
