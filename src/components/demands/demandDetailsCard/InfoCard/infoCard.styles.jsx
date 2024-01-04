import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  description: {
    textAlign: 'justify',
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
    lineHeight: 20,
  },
  box: {
    flexDirection: 'column',
    gap: 10,
  },
  subtitle: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.PoppinsSemibold,
    color: theme.colors.grey.grey700,
  },
  text: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
  },
});
