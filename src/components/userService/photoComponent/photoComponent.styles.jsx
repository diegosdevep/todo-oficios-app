import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginTop: 10,
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    gap: 10,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.PoppinsSemibold,
    color: theme.colors.grey.grey600,
  },
  thumbnailContainer: {
    marginRight: 10,
    marginBottom: 20,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '80%',
    height: '80%',
    borderRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  closeButtonText: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.LatoBold,
    color: theme.colors.white,
  },
});
