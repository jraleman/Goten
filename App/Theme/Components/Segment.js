import variables from './../variables';

export default (variable = variables) => {
  const platform = variable.platform;

  const segmentTheme = {
    height: 45,
    borderColor: variable.segmentBorderColorMain,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: variable.segmentBackgroundColor,
    'NativeBase.Button': {
      alignSelf: 'center',
      borderRadius: 0,
      paddingHorizontal: 20,
      height: 30,
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderColor: variable.segmentBorderColor,
      elevation: 0,
      '.active': {
        backgroundColor: variable.segmentActiveBackgroundColor,
        'NativeBase.Text': {
          color: variable.segmentActiveTextColor
        }
      },
      '.first': {
        borderTopLeftRadius: platform === 'ios' ? 5 : undefined,
        borderBottomLeftRadius: platform === 'ios' ? 5 : undefined,
        borderLeftWidth: 1
      },
      '.last': {
        borderTopRightRadius: platform === 'ios' ? 5 : undefined,
        borderBottomRightRadius: platform === 'ios' ? 5 : undefined
      },
      'NativeBase.Text': {
        color: variable.segmentTextColor,
        fontSize: 14
      }
    }
  };

  return segmentTheme;
};
