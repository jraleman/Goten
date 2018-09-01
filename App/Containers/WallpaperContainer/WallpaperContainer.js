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
    this._image = this.props.image;
    this._blur = this.props.blur;
    this._opacity = this.props.opacity;
    this._overlay = this.props.overlay;
    this._children = this.props.children;
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <Container>
          <ImageBackground
            blurRadius={ this._blur }
            source={ this._image }
            style={ styles.wallpaper }
            resizeMode={ "cover" }
          >
            <View style={[
              styles.overlay, {
                backgroundColor: this._overlay,
                opacity: this._opacity
              }
            ]}/>
            { this._children }
          </ImageBackground>
        </Container>
      </React.Fragment>
    );
  }
}

export default WallpaperContainer;
