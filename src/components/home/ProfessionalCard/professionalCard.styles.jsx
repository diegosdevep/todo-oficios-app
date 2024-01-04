import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  img: {
    width: 157,
    height: 108,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  name: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoBold,
    color: theme.colors.grey.grey700,
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  star: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey600,
  },
  divider: {
    width: '100%',
    borderColor: theme.colors.grey.grey100,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 8,
  },
});
