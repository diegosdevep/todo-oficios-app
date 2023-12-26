import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../../components/home/header/Header';
import Categories from '../../../components/home/categories/Categories';
import Professionals from '../../../components/home/professionals/Professionals';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Professionals />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default HomeScreen;
