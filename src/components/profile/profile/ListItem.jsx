import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import theme from '../../../styles/theme';

const ListItem = ({ title, onPress }) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
    <Icon
      type='material-community'
      name='chevron-right'
      size={30}
      color='grey'
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    backgroundColor: 'white',
    marginLeft: 5,
  },
  text: {
    fontSize: theme.fontSize.md,
    color: theme.colors.grey.grey600,
    fontFamily: theme.fonts.LatoRegular,
  },
});
export default ListItem;
