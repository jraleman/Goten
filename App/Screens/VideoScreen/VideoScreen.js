#!/usr/bin/env node

// ~~ Dependencies ~~
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  // Text,
  TouchableHighlight,
  View,
  TextInput,
  ListView,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  Alert
} from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Text,
} from 'native-base';
import Video from 'react-native-video';
// ~~ Local Dependencies ~~
import styles from './styles';
import AppHeader from '../../Components/AppHeader';

// import Icon from 'react-native-vector-icons/MaterialIcons';

// Import video source file
// const videoSrc = require("../../Assets/Videos/HACKERMAN.mp4");

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class VideoScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      speaker: false,
      audioMute: false,
      videoMute: false
    };
    return;
  }
  toggleAudioMute = () => {
    var toggle = this.state.audioMute ? false : true;
    this.setState({ audioMute: toggle });
    window.alert('toggleAudioMute()');
    return ;
  }

  toggleVideoMute = () => {
    var toggle = this.state.videoMute ? false : true;
    this.setState({ videoMute: toggle });
    window.alert('toggleVideoMute()');
    return ;
  }

  toggleSpeaker = () => {
    var toggle = this.state.speaker ? false : true;
    this.setState({ speaker: toggle })
    window.alert('toggleSpeaker()');
    return ;
  }

  endCall = () => {
    window.alert('endCall()');
    return ;
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
        <Container style={ styles.container }>
          <AppHeader
            title={ 'Video' }
            icon={ 'menu' }
            onPress={ () => { this.props.navigation.openDrawer(); }}
          />
          <Content style={ styles.content }>
            <View style={{flex: 1, flexDirection: 'row'}}>
              { this.state.audioMute ?
                <Icon
                  raised
                  name='microphone-off'
                  type='material-community'
                  color='grey'
                  onPress={() => this.toggleAudioMute()} /> :
                <Icon
                  raised
                  name='microphone'
                  type='material-community'
                  color='black'
                  onPress={() => this.toggleAudioMute()} /> }

              { this.state.videoMute ?
                <Icon
                  raised
                  name='video-off'
                  type='material-community'
                  color='grey'
                  onPress={() => this.toggleVideoMute()} /> :
                <Icon
                  raised
                  name='video'
                  type='material-community'
                  color='black'
                  onPress={() => this.toggleVideoMute()} /> }

              { this.state.speaker ?
                <Icon
                  raised
                  name='volume-up'
                  type='FontAwesome'
                  color='black'
                  onPress={() => this.toggleSpeaker()} /> :
                <Icon
                    raised
                    name='volume-down'
                    type='FontAwesome'
                    color='black'
                    onPress={() => this.toggleSpeaker()} /> }

              <Icon
                raised
                name='video-switch'
                type='material-community'
                color='black'
                onPress={() => this.switchVideoType()} />
              <Icon
                raised
                name='phone-hangup'
                type='material-community'
                color='red'
                onPress={() => this.endCall()} />
            </View>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};


/*

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

*/


// -------------------------------------------------------------------------
// Source: https://github.com/atyenoria/react-native-webrtc-janus-gateway/blob/master/src/video.js
var stylesTwo = StyleSheet.create({
    selfView: {
      width: 200,
      height: 150,
    },
    remoteView: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/2.35
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    listViewContainer: {
      height: 150,
    },
});




export default VideoScreen;
