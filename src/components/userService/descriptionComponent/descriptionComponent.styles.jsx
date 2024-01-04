import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    gap: 5,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.PoppinsSemibold,
    color: theme.colors.grey.grey600,
  },
  text: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
    textAlign: 'justify',
  },
});
