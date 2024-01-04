import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  category: {
    width: 150,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 19,
    borderRadius: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  categoryText: {
    color: theme.colors.grey.grey900,
    fontFamily: theme.fonts.LatoBold,
  },
  card: {
    width: '95%',
    height: 146,
    backgroundColor: theme.colors.white,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10,
    ...theme.shadows.soft,
  },
  row: {
    flexDirection: 'row',
    gap: 3,
  },
  description: {
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey500,
  },
});
