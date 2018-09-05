import variables from './../variables';

export default (variable = variables) => {
  const h2Theme = {
    color: variable.textColor,
    fontSize: variable.fontSizeH2,
    lineHeight: variable.lineHeightH2
  };

  return h2Theme;
};
