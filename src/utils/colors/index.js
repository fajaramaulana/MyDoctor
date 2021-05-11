const mainColor = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  blue1: '#0066CB',
  black1: '#00000',
  black2: 'rgba(0,0,0, 0.5)',
  red: 'red',
  red1: '#E06379',
};

export const colors = {
  primary: mainColor.green1,
  secondary: mainColor.dark1,
  tertiary: mainColor.blue1,
  white: 'white',
  black: 'black',
  disable: mainColor.grey3,

  text: {
    primary: mainColor.dark1,
    secondary: mainColor.grey1,
    menuInactive: mainColor.dark2,
    menuActive: mainColor.green1,
    subTitle: mainColor.dark3,
    alerta: mainColor.red,
  },
  button: {
    primary: {
      background: mainColor.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColor.dark1,
    },
  },
  border: mainColor.grey2,
  cardLight: mainColor.green2,
  loadingBackground: mainColor.black2,
  error: mainColor.red1,
};
