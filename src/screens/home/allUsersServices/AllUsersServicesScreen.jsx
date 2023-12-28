import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import HeaderCard from '../../../components/allUsersServices/card/headerCard/HeaderCard';
import GoBackArrow from '../../../shared/GoBackArrow';
import GradientHeader from '../../../shared/GradientHeader';
import theme from '../../../styles/theme';
import SmallCategory from '../../../components/home/categories/SmallCategory';
import { screen } from '../../../utils/screen';

const AllUsersServicesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate(screen.home.userService, {
      user: route.params,
    });
  };

  return (
    <View style={styles.container}>
      <GradientHeader>
        <GoBackArrow title='Todas las categorias' />
      </GradientHeader>

      <View style={styles.category}>
        <Text style={styles.categoryText}>{route.params.categoryId}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={{ alignSelf: 'center' }}
          activeOpacity={0.7}
          onPress={goToProfile}
        >
          <View style={styles.card}>
            <View style={{ width: 98, height: 120 }}>
              <Image
                style={{ width: '100%', height: '100%' }}
                source={require('../../../../assets/persona05.png')}
              />
            </View>

            <View style={styles.content}>
              <HeaderCard />

              <View style={{ gap: 5 }}>
                <View style={styles.row}>
                  <SmallCategory
                    borderColor={'#E89366'}
                    color={'#EBA580'}
                    icon={require('../../../../assets/icons/sprout.png')}
                  />
                  <SmallCategory
                    borderColor={'#E89366'}
                    color={'#EBA580'}
                    icon={require('../../../../assets/icons/sprout.png')}
                  />
                </View>

                <Text style={styles.description}>
                  Cerrajera con amplia experiencia en aperturas y reparaciones.
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  category: {
    width: 150,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 19,
    borderRadius: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  categoryText: {
    color: theme.colors.grey.grey900,
    fontFamily: theme.fonts.LatoBold,
  },
  card: {
    width: '95%',
    height: 146,
    backgroundColor: theme.colors.white,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10,
    ...theme.shadows.soft,
  },
  row: {
    flexDirection: 'row',
    gap: 3,
  },
  description: {
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey500,
  },
});
export default AllUsersServicesScreen;
