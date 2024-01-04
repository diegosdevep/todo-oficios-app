import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import GradientHeader from '../../../shared/GradientHeader';
import GoBackArrow from '../../../shared/GoBackArrow';
import CategoryButton from '../../../shared/CategoryButton';
import categories from '../../../utils/categories';
import { screen } from '../../../utils/screen';
import { styles } from './allcategories.styles';

const AllCategoriesScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const goToCategory = (category) => {
    navigation.navigate(screen.home.allUsersServices, {
      categoryId: category.title,
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <CategoryButton
        borderColor={item.borderColor}
        color={item.color}
        icon={item.icon}
        title={item.title}
        onPress={() => goToCategory(item)}
        size={'big'}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <GradientHeader>
        <GoBackArrow title='Todos los servicios' />
      </GradientHeader>
      <View style={styles.header}>
        <SearchBar
          placeholder='Search'
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          inputStyle={styles.searchInputStyle}
          leftIconContainerStyle
          searchIcon={{ size: 25 }}
        />
      </View>
      <FlatList
        data={filteredCategories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AllCategoriesScreen;
