import React from 'react';
import {
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native'
import {
  Container,
  Text
} from 'native-base';
import styles from './styles';

class AnimatedButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this._color = this.props.color;
    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    return ;
  }
  onPressHandler () {
    if (this.state.isloading == false) {
      this.setState({ isLoading: true });
      Animated.timing(this.buttonAnimated, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }).start();
      setTimeout (() => {
        this.onGrow();
      }, 2000);
      setTimeout(() => {
        Actions.secondScreen();
        this.setState({ isLoading: false });
        this.buttonAnimated.setValue(0);
        this.growAnimated.setValue(0);
      }, 2300)
    }
    return ;
  }
  onGrow () {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start();
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: this._color }
          ]}
          onPress={ () => this.onPressHandler }
        >
          <Text>{ "Press here!" }</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

// <View style={[
//   styles.overlay,
//   {backgroundColor: this._overlay}
// ]}/>

export default AnimatedButton;
