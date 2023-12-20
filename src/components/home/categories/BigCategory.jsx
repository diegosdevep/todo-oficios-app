import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '../../../styles/theme';

const BigCategory = ({ icon, color, borderColor, title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.content,
          ,
          {
            backgroundColor: color,
            borderColor: borderColor,
          },
        ]}
      >
        <Image source={icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 5,
    width: 94,
    height: 94,
  },
  title: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoBold,
    color: theme.colors.grey.grey600,
    marginTop: 4,
    textAlign: 'center',
  },
});
export default BigCategory;
