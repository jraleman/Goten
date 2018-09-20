#!/usr/bin/env node

// ~~ Dependencies ~~
import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Content,
  Text,
} from 'native-base';
import Video from 'react-native-video';
// ~~ Local Dependencies ~~
import styles from './styles';
import AppHeader from '../../Components/AppHeader';

// Import video source file
const videoSrc = require("../../Assets/Videos/HACKERMAN.mp4");

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class VideoScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return;
  }
  /**
   * Renders the component.
   * @return { string } - RN markup for the component
   */
  render () {
    return (
      <React.Fragment>
        <StatusBar
          hidden={ false }
          barStyle={ 'light-content' }
          animated={ true }
        />
        <Container style={{ flex: 1 }}>
          <AppHeader
            title={ 'Video' }
            icon={ 'menu' }
            onPress={ () => { this.props.navigation.openDrawer(); }}
          />
            <Content style={{ flex: 1 }}>
              <Video
                source={ videoSrc }
                ref={(ref) => { this.player = ref }}
                rate={ 1.0 }
                volume={ 0.5 }
                muted={ false }
                paused={ false }
                resizeMode={ "cover" }
                repeat={ true }
                playInBackground={ false }
                playWhenInactive={ false }
                ignoreSilentSwitch={ "ignore" }
                progressUpdateInterval={ 250.0 }
                onLoadStart={(el)=>console.log("video is being loaded",el)}
                onLoad={()=>console.log("video loading")}
                onProgress={()=>console.log("video loading is in progress")}
                onEnd={()=>console.log("video is now loaded")}
                onError={()=>console.log("video can not be loaded")}
                onBuffer={()=>console.log("buffer stage")}
                onTimedMetadata={()=>console.log("metadata received")}
                style={ styles.backgroundVideo }
              />
            </Content>
        </Container>
      </React.Fragment>
    );
  }
};

export default VideoScreen;
