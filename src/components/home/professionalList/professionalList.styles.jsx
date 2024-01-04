import { Platform, StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.fonts.LatoBold,
    color: theme.colors.grey.grey700,
    marginLeft: Platform.OS === 'ios' ? 20 : 50,
    marginVertical: 25,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
