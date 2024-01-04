import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
  },
  date: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey600,
  },
  urgent: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: 'red',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  containerImg: {
    borderRadius: 50,
    width: 58,
    height: 58,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 58,
    height: 58,
    resizeMode: 'cover',
  },
  title: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.PoppinsRegular,
    color: theme.colors.grey.grey800,
    marginBottom: 5,
  },
});
