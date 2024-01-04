import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../../../components/home/header/Header';
import ProfessionalList from '../../../../components/home/professionalList/ProfessionalList';
import CategoriesScreen from '../Categories/CategoriesScreen';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoriesScreen />
        <ProfessionalList />
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
