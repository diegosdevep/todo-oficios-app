import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '../../../styles/theme';

const SmallCategory = ({ icon, color, borderColor, title, onPress }) => {
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
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    width: 24,
    height: 24,
  },
  icon: {
    width: 12,
    height: 12,
  },
  title: {
    fontSize: theme.fontSize.xs,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey600,
  },
});
export default SmallCategory;
