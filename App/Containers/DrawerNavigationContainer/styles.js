import {
  Platform,
  StyleSheet,
  Dimensions,
  PixelRatio
} from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = "material";
const isIphoneX =
  platform === "ios" && deviceHeight === 812 && deviceWidth === 375;

export default StyleSheet.create({
  content : {
    flex: 1,
    backgroundColor: "#fff",
    bottom: 4,
  },
  container: {
    flex: 0.42,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  drawerCover: {
    flexGrow: 1,
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10,
    alignItems: 'center',
    justifyContent:'center',
  },
  drawerText: {
    // marginLeft: Platform.OS === "ios" ? deviceWidth / 9 : deviceWidth / 12,
    // marginTop: Platform.OS === "ios" ? deviceHeight / 12 : deviceHeight / 13,
    textAlign: 'center',
    alignSelf: 'center',
    // flex: 1,
    // fontSize: 24,
    color: '#f9f9f9',
    // marginBottom: 0
    marginTop: 12,
    // position: 'absolute'
    fontWeight: '500'
  },
  drawer: {
    position: "absolute",
    alignSelf: 'center',
    // backgroundColor: '#e4e4a1',
    // width: 100,
    // height: 200,
    opacity: 0.75,
    flex: 1,
    width: '75%',
    marginTop: '2.5%',
    alignItems: 'center',
    flexDirection: 'column'
    // height: '50%'
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20,
    textAlign: 'center'
  },
  badge: {
    borderRadius: 100,
    height: 30,
    width: 30,
    backgroundColor: '#33657e'
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    alignItems: 'center',
    paddingTop: 6,
    marginTop: Platform.OS === "android" ? -3 : undefined
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // opacity: 0.175
  },
  wallpaper: {
    flex: 1,
    width: null,
    height: null
  },
  avatarImg: {
    backgroundColor: '#e4e4a1',
    marginTop: '7.5%',
    borderWidth: 2,
    borderColor: '#f9f9f9',
    // marginTop: 10

  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'center'
  }
});
