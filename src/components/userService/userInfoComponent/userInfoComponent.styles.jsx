import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
  },

  divider: {
    width: '90%',
    borderWidth: 0.7,
    borderColor: theme.colors.grey.grey200,
    marginVertical: 25,
    alignSelf: 'center',
  },
});
