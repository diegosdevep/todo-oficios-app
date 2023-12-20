import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import BigCategory from '../../../components/home/categories/BigCategory';
import categories from '../../../utils/categories';
import theme from '../../../styles/theme';

const AllCategoriesScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <BigCategory
        borderColor={item.borderColor}
        color={item.color}
        icon={item.icon}
        title={item.title}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          'rgba(240, 115, 36, 0.55)',
          'rgba(240, 115, 36, 0.18)',
          'rgba(240, 115, 36, 0.0)',
        ]}
        style={styles.gradient}
      >
        <View style={styles.goBack}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Icon
              type='material-community'
              name='arrow-left'
              size={28}
              color={theme.colors.grey.grey600}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Todos los servicios</Text>
        </View>
      </LinearGradient>
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
        <Icon
          type='material-community'
          name='filter-variant'
          size={35}
          color={theme.colors.grey.grey600}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginHorizontal: 15,
    // marginBottom: 10,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
  },
  searchInputContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
  },
  searchInputStyle: {
    fontSize: 18,
  },
});

export default AllCategoriesScreen;
