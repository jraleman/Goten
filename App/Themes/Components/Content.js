import variables from './../variables';

export default (variable = variables) => {
  const contentTheme = {
    '.padder': {
      padding: variable.contentPadding
    },
    flex: 1,
    backgroundColor: 'transparent',
    'NativeBase.Segment': {
      borderWidth: 0,
      backgroundColor: 'transparent'
    }
  };

  return contentTheme;
};
