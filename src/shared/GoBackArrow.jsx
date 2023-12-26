import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../styles/theme';
import { Icon } from 'react-native-elements';

const GoBackArrow = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.goBack}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Icon
          type='material-community'
          name='arrow-left'
          size={28}
          color={theme.colors.grey.grey600}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginHorizontal: 10,
    marginTop: Platform.OS === 'ios' ? 50 : 30,
  },
  title: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.fonts.LatoBold,
    color: theme.colors.grey.grey700,
  },
});
export default GoBackArrow;
