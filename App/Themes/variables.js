import color from "color";

import {
  Platform,
  Dimensions,
  PixelRatio
} from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = "material";
const isIphoneX =
  platform === "ios" && deviceHeight === 812 && deviceWidth === 375;

export default {
  "platformStyle": "material",
  "platform": "ios",
  "androidRipple": true,
  "androidRippleColor": "rgba(256, 256, 256, 0.3)",
  "androidRippleColorDark": "rgba(0, 0, 0, 0.15)",
  "btnUppercaseAndroidText": true,
  "badgeBg": "#ED1727",
  "badgeColor": "#fff",
  "badgePadding": 3,
  "btnFontFamily": "System",
  "btnDisabledBg": "#b5b5b5",
  "buttonPadding": 6,
  "btnPrimaryBg": "rgba(52,52,52,1)",
  "btnPrimaryColor": "#fff",
  "btnInfoBg": "rgba(69,122,156,1)",
  "btnInfoColor": "#fff",
  "btnSuccessBg": "rgba(122,156,69,1)",
  "btnSuccessColor": "#fff",
  "btnDangerBg": "rgba(217,83,79,1)",
  "btnDangerColor": "#fff",
  "btnWarningBg": "rgba(156,103,69,1)",
  "btnWarningColor": "#fff",
  "btnTextSize": 16.5,
  "btnTextSizeLarge": 22.5,
  "btnTextSizeSmall": 12,
  "borderRadiusLarge": 57,
  "iconSizeLarge": 45,
  "iconSizeSmall": 18,
  "cardDefaultBg": "#fff",
  "cardBorderColor": "#ccc",
  "CheckboxRadius": 0,
  "CheckboxBorderWidth": 2,
  "CheckboxPaddingLeft": 2,
  "CheckboxPaddingBottom": 0,
  "CheckboxIconSize": 18,
  "CheckboxFontSize": 21,
  "DefaultFontSize": 17,
  "checkboxBgColor": "#039BE5",
  "checkboxSize": 20,
  "checkboxTickColor": "#fff",
  "brandPrimary": "#343434",
  "brandInfo": "#3F57D3",
  "brandSuccess": "#5cb85c",
  "brandDanger": "#d9534f",
  "brandWarning": "#f0ad4e",
  "brandDark": "rgba(18,18,18,1)",
  "brandLight": "rgba(245,245,220,1)",
  "fontFamily": "System",
  "fontSizeBase": 15,
  "fontSizeH1": 27,
  "fontSizeH2": 24,
  "fontSizeH3": 21,
  "footerHeight": 55,
  "footerDefaultBg": "rgba(249,249,249,1)",
  "footerPaddingBottom": 0,
  "tabBarTextColor": "rgba(228,228,161,1)",
  "tabBarTextSize": 14,
  "activeTab": "#fff",
  "sTabBarActiveTextColor": "#007aff",
  "tabBarActiveTextColor": "rgba(18,18,18,1)",
  "tabActiveBgColor": "rgba(251,251,240,1)",
  "toolbarBtnColor": "rgba(52,52,52,1)",
  "toolbarDefaultBg": "rgba(251,251,240,1)",
  "toolbarHeight": 64,
  "toolbarSearchIconSize": 20,
  "toolbarInputColor": "rgba(251,251,240,1)",
  "searchBarHeight": 30,
  "searchBarInputHeight": 30,
  "toolbarBtnTextColor": "#fff",
  "toolbarDefaultBorder": "rgba(239,239,200,1)",
  "iosStatusbar": "dark-content",
  "statusBarColor": "rgba(245,245,220,1)",
  "darkenHeader": "#F0F0F0",
  "iconFamily": "Ionicons",
  "iconFontSize": 30,
  "iconHeaderSize": 29,
  "inputFontSize": 17,
  "inputBorderColor": "#D9D5DC",
  "inputSuccessBorderColor": "#2b8339",
  "inputErrorBorderColor": "#ed2f2f",
  "inputHeightBase": 50,
  "inputColor": "#000",
  "inputColorPlaceholder": "#575757",
  "btnLineHeight": 19,
  "lineHeightH1": 32,
  "lineHeightH2": 27,
  "lineHeightH3": 22,
  "lineHeight": 20,
  "listBg": "#FFF",
  "listBorderColor": "#c9c9c9",
  "listDividerBg": "#f4f4f4",
  "listBtnUnderlayColor": "#DDD",
  "listItemPadding": 10,
  "listNoteColor": "#808080",
  "listNoteSize": 13,
  "defaultProgressColor": "#E4202D",
  "inverseProgressColor": "#1A191B",
  "radioBtnSize": 25,
  "radioSelectedColorAndroid": "#e4e4a1",
  "radioBtnLineHeight": 29,
  "segmentBackgroundColor": "#343434",
  "segmentActiveBackgroundColor": "#fff",
  "segmentTextColor": "#fff",
  "segmentActiveTextColor": "#343434",
  "segmentBorderColor": "#fff",
  "segmentBorderColorMain": "#343434",
  "defaultSpinnerColor": "rgba(152,152,152,1)",
  "inverseSpinnerColor": "#1A191B",
  "tabDefaultBg": "#343434",
  "topTabBarTextColor": "#b3c7f9",
  "topTabBarActiveTextColor": "#fff",
  "topTabBarBorderColor": "#fff",
  "topTabBarActiveBorderColor": "#fff",
  "tabBgColor": "#F8F8F8",
  "tabFontSize": 15,
  "textColor": "#000",
  "inverseTextColor": "rgba(249,249,249,1)",
  "noteFontSize": 14,
  "defaultTextColor": "#000",
  "titleFontfamily": "System",
  "titleFontSize": 19,
  "subTitleFontSize": 14,
  "subtitleColor": "#FFF",
  "titleFontColor": "rgba(52,52,52,1)",
  "borderRadiusBase": 2,
  "borderWidth": 1,
  "contentPadding": 10,
  "dropdownLinkColor": "#414142",
  "inputLineHeight": 24,
  "deviceWidth": 1731,
  "deviceHeight": 1388,
  "isIphoneX": false,
  "inputGroupRoundedBorderRadius": 30
}
