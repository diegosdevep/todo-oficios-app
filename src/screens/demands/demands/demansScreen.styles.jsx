import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoBox: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  logo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  title: {
    fontSize: theme.fontSize.h3,
    fontFamily: theme.fonts.PoppinsSemibold,
    color: theme.colors.grey.grey800,
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
    marginTop: 20,
    ...theme.shadows.light,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
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
});
