import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListItem from './ListItem';
import theme from '../../../styles/theme';

const ProfileSection = ({ title, items }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ marginTop: 10 }}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            onPress={() => item.onPress(navigation)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.grey.grey700,
    fontFamily: theme.fonts.LatoBold,
  },
});
export default ProfileSection;
