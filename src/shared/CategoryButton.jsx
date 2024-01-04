import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '../styles/theme';

const CategoryButton = ({ icon, color, borderColor, title, onPress, size }) => {
  const containerStyle =
    size === 'big' ? styles.bigContainer : styles.smallContainer;
  const contentStyle = size === 'big' ? styles.bigContent : styles.smallContent;
  const iconStyle = size === 'big' ? styles.bigIcon : styles.smallIcon;
  const titleStyle = size === 'big' ? styles.bigTitle : styles.smallTitle;

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View
        style={[
          contentStyle,
          { backgroundColor: color, borderColor: borderColor },
        ]}
      >
        <Image source={icon} style={iconStyle} />
      </View>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    alignItems: 'center',
  },
  smallContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  bigContent: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 5,
    width: 94,
    height: 94,
  },
  smallContent: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    width: 24,
    height: 24,
  },
  bigIcon: {
    // Estilos del icono grande
  },
  smallIcon: {
    width: 12,
    height: 12,
  },
  bigTitle: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoBold,
    color: theme.colors.grey.grey600,
    marginTop: 4,
    textAlign: 'center',
  },
  smallTitle: {
    fontSize: theme.fontSize.xs,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey600,
  },
});

export default CategoryButton;
