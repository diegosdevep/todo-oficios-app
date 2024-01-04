import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.PoppinsSemibold,
    color: theme.colors.grey.grey600,
  },
});
