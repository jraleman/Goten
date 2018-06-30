import variables from './../variables';

export default (variable = variables) => {
  const h3Theme = {
    color: variable.textColor,
    fontSize: variable.fontSizeH3,
    lineHeight: variable.lineHeightH3
  };

  return h3Theme;
};
