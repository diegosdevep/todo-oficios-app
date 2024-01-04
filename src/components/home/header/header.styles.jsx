import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  center: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  box: {
    marginHorizontal: 20,
  },
  user: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  logoBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  title: {
    fontSize: theme.fontSize.h3,
    fontFamily: theme.fonts.PoppinsSemibold,
    color: theme.colors.grey.grey800,
  },
});
