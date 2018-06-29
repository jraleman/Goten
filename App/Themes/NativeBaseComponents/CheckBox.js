import variables from './../variables';

export default (variable = variables) => {
  const checkBoxTheme = {
    ".checked": {
      "NativeBase.Icon": {
        color: variable.checkboxTickColor
      },
      "NativeBase.IconNB": {
        color: variable.checkboxTickColor
      }
    },
    "NativeBase.Icon": {
      color: "transparent",
      lineHeight: variable.CheckboxIconSize,
      marginTop: variable.CheckboxIconMarginTop,
      fontSize: variable.CheckboxFontSize
    },
    "NativeBase.IconNB": {
      color: "transparent",
      lineHeight: variable.CheckboxIconSize,
      marginTop: variable.CheckboxIconMarginTop,
      fontSize: variable.CheckboxFontSize
    },
    borderRadius: variable.CheckboxRadius,
    overflow: "hidden",
    width: variable.checkboxSize,
    height: variable.checkboxSize,
    borderWidth: variable.CheckboxBorderWidth,
    paddingLeft: variable.CheckboxPaddingLeft - 1,
    paddingBottom: variable.CheckboxPaddingBottom,
    left: 10
  };

  return checkBoxTheme;
};
