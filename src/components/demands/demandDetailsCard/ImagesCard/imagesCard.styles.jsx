import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.PoppinsSemibold,
    color: theme.colors.grey.grey700,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
