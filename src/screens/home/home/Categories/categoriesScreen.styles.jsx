import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.fonts.LatoBold,
    color: theme.colors.grey.grey700,
    marginLeft: Platform.OS === 'ios' ? 20 : 50,
    marginBottom: 16,
  },
  categoryContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 16,
  },
});
