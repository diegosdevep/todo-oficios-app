import { View, Text, StyleSheet, Platform } from 'react-native';
import theme from '../../../styles/theme';
import Professional from './Professional';

const Professionals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profesionales</Text>

      <View style={styles.row}>
        <Professional />
        <Professional />
      </View>
      <View style={styles.row}>
        <Professional />
        <Professional />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.fonts.LatoBold,
    color: theme.colors.grey.grey700,
    marginLeft: Platform.OS === 'ios' ? 20 : 50,
    marginVertical: 25,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
export default Professionals;
