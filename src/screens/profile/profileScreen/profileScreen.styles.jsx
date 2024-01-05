import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avatarBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
  },
  avatar: {
    borderColor: theme.colors.darkPrimary,
    borderWidth: 2,
  },
  header: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: theme.fontSize.md,
    color: theme.colors.grey.grey500,
    fontFamily: theme.fonts.LatoBold,
  },
  email: {
    fontSize: theme.fontSize.md,
    color: theme.colors.grey.grey500,
    fontFamily: theme.fonts.LatoRegular,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    padding: 13,
    borderRadius: 10,
    gap: 10,
    marginTop: 10,
  },
  logoutText: {
    textAlign: 'center',
    fontSize: theme.fontSize.lg,
    color: theme.colors.grey.grey500,
    fontFamily: theme.fonts.LatoBold,
  },
});
