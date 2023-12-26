import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginHorizontal: 15,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
  },
  searchInputContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
  },
  searchInputStyle: {
    fontSize: 18,
  },
});
