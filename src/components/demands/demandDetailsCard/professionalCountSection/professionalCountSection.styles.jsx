import { StyleSheet } from 'react-native';
import theme from '../../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
    marginBottom: 20,
  },
  box: {
    borderWidth: 2,
    borderRadius: 50,
    marginRight: -10,
    borderColor: theme.colors.primary,
  },
  img: {
    width: 24,
    height: 24,
    borderRadius: 50,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  text: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
    marginLeft: 15,
  },
});
