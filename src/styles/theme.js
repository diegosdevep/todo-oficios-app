import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemibold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
    PoppinsBlack: require('../../assets/fonts/Poppins-Black.ttf'),
    LatoLight: require('../../assets/fonts/Lato-Light.ttf'),
    LatoRegular: require('../../assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('../../assets/fonts/Lato-Bold.ttf'),
    LatoBlack: require('../../assets/fonts/Lato-Black.ttf'),
  });
};

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    background: '#F2F2F2',
    softPrimary: '#9DC5BE',
    lightPrimary: '#8DB1AA',
    primary: '#539AA0',
    darkPrimary: '#488284',
    softSecondary: '#FBA708',
    lightSecondary: '#EF8906',
    secondary: '#FD5503',
    darkSecondary: '#D94C02',
    grey: {
      grey50: '#f5f5f5',
      grey100: '#e5e5e5',
      grey200: '#cccccc',
      grey300: '#b3b3b3',
      grey400: '#999999',
      grey500: '#808080',
      grey600: '#666666',
      grey700: '#4d4d4d',
      grey800: '#333333',
      grey900: '#1a1a1a',
    },
  },
  fonts: {
    PoppinsRegular: 'PoppinsRegular',
    PoppinsMedium: 'PoppinsMedium',
    PoppinsSemibold: 'PoppinsSemibold',
    PoppinsBold: 'PoppinsBold',
    PoppinsBlack: 'PoppinsBlack',
    LatoLight: 'LatoLight',
    LatoRegular: 'LatoRegular',
    LatoBold: 'LatoBold',
    LatoBlack: 'LatoBlack',
  },
  fontWeight: {
    normal: '300',
    lightBold: '400',
    semiBold: '500',
    bold: '700',
    black: '900',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    h3: 24,
    h2: 30,
    h1: 36,
  },

  loadFonts: loadFonts,
};

export default theme;
