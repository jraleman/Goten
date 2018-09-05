import React from 'react';
import {
  H2,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  Thumbnail
} from 'native-base';
import styles from './styles';

const bodyTxt1 = "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills.";
const bodyTxt2 = "I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words.";
const bodyTxt3 = 'You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. ';

class CardsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <Content padder>
        <H2 style={ styles.mb15 }>{ 'Cards' }</H2>
        <Card style={styles.mb}>
          <CardItem header>
            <Text>{ 'Scarlet Dog' }</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{ bodyTxt1 }</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{ bodyTxt2 }</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{ bodyTxt3 }</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>{ 'ScarletValley' }</Text>
          </CardItem>
        </Card>
        <Card style={ styles.mb }>
          <CardItem>
            <Body>
              <Text>{ 'This is just a basic card with some text to boot.' }</Text>
              <Text>{ 'Like it? Keep Scrolling...' }</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default CardsContainer;
