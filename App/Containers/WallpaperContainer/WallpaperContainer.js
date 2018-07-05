import React from 'react';
import { Container } from 'native-base';
import {
  ImageBackground,
  View
} from 'react-native';
import styles from './styles';

class WallpaperContainer extends React.Component {
  constructor (props) {
    super(props);
    this._img = this.props.img;
    this._overlay = this.props.overlay;
    this._children = this.props.children;
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container>
        <ImageBackground
          source={ this._img }
          resizeMode={ "cover" }
          style={ styles.wallpaper }
        >
          <View style={[
            styles.overlay,
            {backgroundColor: this._overlay}
          ]}/>
          { this._children }
        </ImageBackground>
      </Container>
    );
  }
}

export default WallpaperContainer;
