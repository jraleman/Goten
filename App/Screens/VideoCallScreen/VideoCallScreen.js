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

// const videoSrc = require('../../Assets/Videos/HACKERMAN.mp4')

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class VideoCallScreen extends React.Component {
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
        <Container>
          <AppHeader
            title={ 'Video' }
            icon={ 'menu' }
            onPress={ () => { this.props.navigation.openDrawer(); }}
          />
            <Content>
            <Video
              source={{ uri: '../../Assets/Videos/HACKERMAN.mp4' }}
              ref={(ref) => { this.player = ref }}
              rate={ 1.0 }                              // 0 is paused, 1 is normal.
              volume={ 1.0 }                            // 0 is muted, 1 is normal.
              muted={ false }                           // Mutes the audio entirely.
              paused={ false }                          // Pauses playback entirely.
              resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
              repeat={ true }                           // Repeat forever.
              playInBackground={false}                // Audio continues to play when app entering background.
              playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
              ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
              progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
              onLoadStart={(el)=>console.log("video is being loaded",el)}            // Callback when video starts to load
              onLoad={()=>console.log("video loading")}               // Callback when video loads
              onProgress={()=>console.log("video loading is in progress")}               // Callback every ~250ms with currentTime
              onEnd={()=>console.log("video is now loaded")}                      // Callback when playback finishes
              onError={()=>console.log("video can not be loaded")}               // Callback when video cannot be loaded
              onBuffer={()=>console.log("buffer stage")}                // Callback when remote video is buffering
              onTimedMetadata={()=>console.log("metadata received")}  // Callback when the stream receive some metadata
              style={ styles.backgroundVideo }
             />
             </Content>

        </Container>
      </React.Fragment>
    );
  }
};

export default VideoCallScreen;
