import variables from './../variables';

export default (variable = variables) => {
  const h1Theme = {
    color: variable.textColor,
    fontSize: variable.fontSizeH1,
    lineHeight: variable.lineHeightH1,
  };

  return h1Theme;
};
