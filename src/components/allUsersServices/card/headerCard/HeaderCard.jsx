import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import theme from '../../../../styles/theme';

const HeaderCard = () => {
  return (
    <View style={styles.headerCard}>
      <View style={[styles.row, { gap: 8 }]}>
        <Text style={styles.name}>Maria Minogarova</Text>

        <View style={styles.row}>
          <Icon
            type='material-community'
            name='star-outline'
            size={20}
            color='orange'
          />
          <Text style={styles.ranking}>4.9</Text>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.7}>
        <Icon
          type='material-community'
          name='bookmark-outline'
          size={25}
          color='gray'
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ranking: {
    color: theme.colors.grey.grey700,
  },
});
export default HeaderCard;
