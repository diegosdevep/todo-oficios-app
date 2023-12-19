import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '../../../styles/theme';

const BigCategory = ({ icon, color, borderColor, title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
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
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
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
  },
});
export default BigCategory;
