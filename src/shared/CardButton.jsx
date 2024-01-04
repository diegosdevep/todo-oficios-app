import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const CardButton = ({
  onPress,
  title,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  const buttonStyles = {
    flex: 1,
    backgroundColor: backgroundColor || theme.colors.primary,
    borderColor: borderColor || theme.colors.primary,
  };

  const textStyles = {
    color: textColor || theme.colors.white,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.btn, buttonStyles]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  text: {
    fontSize: theme.fontSize.xl,
    fontFamily: theme.fonts.LatoBold,
  },
});
export default CardButton;
