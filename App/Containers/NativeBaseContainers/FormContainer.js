import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form,
  H2,
  Label,
  Text,
  Textarea
} from "native-base";
import styles from './styles';

class FormContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Content padder={ true }>
        <Form>
          <H2 style={ styles.mb15 }>{ "Forms" }</H2>
          <Item floatingLabel={ true }>
            <Label>{ "Floating label" }</Label>
            <Input />
          </Item>
          <Item floatingLabel={ true }>
            <Label>{ "Secure text entry" }</Label>
            <Input secureTextEntry={ true } />
          </Item>
          <Item fixedLabel={ true }>
            <Label>{ "Fixed label" }</Label>
            <Input />
          </Item>
          <Item inlineLabel={ true }>
            <Label>{ "Inline label" }</Label>
            <Input />
          </Item>
          <Item>
            <Icon
              active={ true }
              name={ 'home' }
            />
            <Input placeholder={ "Icon Textbox" } />
          </Item>
          <Item>
            <Input placeholder={ "Icon Alignment in Textbox" } />
            <Icon
              active={ true }
              name={ 'swap' }
            />
          </Item>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Content padder={ true }>
            <Textarea
              rowSpan={ 5 }
              bordered={ true }
              placeholder={ "Textarea" }
            />
          </Content>
          <Button
            block={ true }
            style={{ margin: 15 }}
          >
            <Text>{ "Submit" }</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

export default FormContainer;
