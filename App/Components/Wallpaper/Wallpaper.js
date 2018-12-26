import React from 'react';
import { Container } from 'native-base';
import {
  ImageBackground,
  View
} from 'react-native';
import styles from './styles';

class Wallpaper extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const { image, blur, opacity, overlay } = this.props;
    return (
      <React.Fragment>
        <Container>
          <ImageBackground
            blurRadius={ blur }
            source={ image }
            style={ styles.wallpaper }
            resizeMode={ 'cover' }
          >
            <View style={[
              styles.overlay, {
                backgroundColor: overlay,
                opacity: opacity
              }
              ]} 
            />
            { this.props.children }
          </ImageBackground>
        </Container>
      </React.Fragment>
    );
  }
}

export default Wallpaper;
