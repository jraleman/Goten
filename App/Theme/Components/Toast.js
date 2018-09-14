import variables from './../variables';

export default (variable = variables) => {
  const platform = variable.platform;

  const toastTheme = {
    '.danger': {
      backgroundColor: variable.brandDanger
    },
    '.warning': {
      backgroundColor: variable.brandWarning
    },
    '.success': {
      backgroundColor: variable.brandSuccess
    },
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: platform === 'ios' ? 5 : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    minHeight: 50,
    'NativeBase.Text': {
      color: '#fff',
      flex: 1
    },
    'NativeBase.Button': {
      backgroundColor: 'transparent',
      height: 30,
      elevation: 0,
      'NativeBase.Text': {
        fontSize: 14
      }
    }
  };

  return toastTheme;
};
