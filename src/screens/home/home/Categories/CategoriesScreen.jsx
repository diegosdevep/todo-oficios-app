import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryButton from '../../../../shared/CategoryButton';
import categories from '../../../../utils/categories';
import { screen } from '../../../../utils/screen';
import { styles } from './categoriesScreen.styles';

const CategoriesScreen = () => {
  const navigation = useNavigation();

  const firstRowCategories = categories.slice(0, 3);
  const secondRowCategories = categories.slice(3, 6);

  const goToCategories = (category) => {
    if (category.title === 'Mas') {
      navigation.navigate(screen.home.allCategories);
    } else {
      navigation.navigate(screen.home.allUsersServices, {
        categoryId: category.title,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Servicios</Text>

      <View style={styles.categoryContainer}>
        {firstRowCategories.map((category) => (
          <CategoryButton
            key={category.id}
            borderColor={category.borderColor}
            color={category.color}
            icon={category.icon}
            title={category.title}
            onPress={() => goToCategories(category)}
            size={'big'}
          />
        ))}
      </View>

      <View style={styles.categoryContainer}>
        {secondRowCategories.map((category) => (
          <CategoryButton
            key={category.id}
            borderColor={category.borderColor}
            color={category.color}
            icon={category.icon}
            title={category.title}
            onPress={() => goToCategories(category)}
            size={'big'}
          />
        ))}
      </View>
    </View>
  );
};

export default CategoriesScreen;
