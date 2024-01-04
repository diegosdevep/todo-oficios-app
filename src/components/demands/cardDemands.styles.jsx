import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: width * 0.95,
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    borderColor: theme.colors.grey.grey100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    ...theme.shadows.light,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
  },
  date: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey600,
  },
  containerImg: {
    borderRadius: 50,
    width: 58,
    height: 58,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 58,
    height: 58,
    resizeMode: 'cover',
  },
  titleUser: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.PoppinsRegular,
    color: theme.colors.grey.grey800,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
  },
  description: {
    textAlign: 'justify',
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
    lineHeight: 20,
  },
  imgUsers: {
    width: 24,
    height: 24,
    borderRadius: 50,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  text: {
    marginLeft: 10,
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey600,
  },
  boxBtn: {
    flexDirection: 'row',
    gap: 10,
  },
});
