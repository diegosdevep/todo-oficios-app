import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    borderColor: theme.colors.grey.grey100,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 20,
    ...theme.shadows.light,
  },
});
