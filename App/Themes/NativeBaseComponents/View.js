import variables from './../variables';

export default (variable = variables) => {
  const viewTheme = {
    '.padder': {
      padding: variable.contentPadding
    }
  };

  return viewTheme;
};
