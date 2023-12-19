import { View, Text, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BigCategory from './BigCategory';
import theme from '../../../styles/theme';
import { screen } from '../../../utils/screen';
import categories from '../../../utils/categories';

const Categories = () => {
  const navigation = useNavigation();

  const firstRowCategories = categories.slice(0, 3);
  const secondRowCategories = categories.slice(3, 6);

  const navigateToScreen = (category) => {
    if (category.title === 'Mas') {
      navigation.navigate(screen.home.allCategories);
    } else {
      console.log('detail pantalla', { categoryId: category.title });
    }
  };

  return (
    <View>
      <Text style={styles.title}>Servicios</Text>

      <View style={styles.categoryContainer}>
        {firstRowCategories.map((category) => (
          <BigCategory
            key={category.id}
            borderColor={category.borderColor}
            color={category.color}
            icon={category.icon}
            title={category.title}
            onPress={() => navigateToScreen(category)}
          />
        ))}
      </View>

      <View style={styles.categoryContainer}>
        {secondRowCategories.map((category) => (
          <BigCategory
            key={category.id}
            borderColor={category.borderColor}
            color={category.color}
            icon={category.icon}
            title={category.title}
            onPress={() => navigateToScreen(category)}
          />
        ))}
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
    marginBottom: 16,
  },
  categoryContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 16,
  },
});

export default Categories;
