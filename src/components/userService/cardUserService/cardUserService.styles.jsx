import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 167,
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingRight: 10,
    paddingVertical: 15,
    ...theme.shadows.soft,
  },
  imgBackground: {
    width: 397,
    height: 167,
    position: 'absolute',
    alignSelf: 'center',
    resizeMode: 'cover',
    top: 0,
    left: 0,
  },
  profileContainer: {
    borderRadius: 50,
    width: 100,
    height: 100,
    alignSelf: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  title: {
    fontFamily: theme.fonts.PoppinsSemibold,
    fontSize: theme.fontSize.md,
    color: theme.colors.grey.grey700,
  },
  text: {
    fontFamily: theme.fonts.LatoRegular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.grey.grey600,
  },
});
