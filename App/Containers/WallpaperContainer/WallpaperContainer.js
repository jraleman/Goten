import React from 'react';
import { Container } from 'native-base';
import { Image } from 'react-native';
import styles from './styles';
import { Images } from '../../Themes';

class WallpaperContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container>
        <Image
          source={ Images.loginBg }
          style={ styles.wallpaper }
        />
      </Container>
    );
  }
}

export default WallpaperContainer;
