import React from 'react';
import {
  Content,
  Button,
  Icon,
  Item,
  Input,
  Form,
  H2,
  Label,
  Text,
  Textarea
} from 'native-base';
import styles from './styles';

class FormContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <Content padder>
        <Form>
          <H2 style={ styles.mb15 }>{ 'Forms' }</H2>
          <Item floatingLabel>
            <Label>{ 'Floating label' }</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>{ 'Secure text entry' }</Label>
            <Input secureTextEntry />
          </Item>
          <Item fixedLabel>
            <Label>{ 'Fixed label' }</Label>
            <Input />
          </Item>
          <Item inlineLabel>
            <Label>{ 'Inline label' }</Label>
            <Input />
          </Item>
          <Item>
            <Icon
              active
              name={ 'home' }
            />
            <Input placeholder={ 'Icon Textbox' } />
          </Item>
          <Item>
            <Input placeholder={ 'Icon Alignment in Textbox' } />
            <Icon
              active
              name={ 'swap' }
            />
          </Item>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Content padder>
            <Textarea
              rowSpan={ 5 }
              bordered
              placeholder={ 'Textarea' }
            />
          </Content>
          <Button
            block
            style={{ margin: 15 }}
          >
            <Text>{ 'Submit' }</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

export default FormContainer;
