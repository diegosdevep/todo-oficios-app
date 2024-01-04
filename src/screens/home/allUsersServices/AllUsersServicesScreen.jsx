import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import HeaderCard from '../../../components/allUsersServices/card/headerCard/HeaderCard';
import GoBackArrow from '../../../shared/GoBackArrow';
import GradientHeader from '../../../shared/GradientHeader';
import CategoryButton from '../../../shared/CategoryButton';
import { screen } from '../../../utils/screen';
import { styles } from './allUsersServicesScreen.styles';
import { users } from '../../../utils/users';

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
        {users.map((user) => (
          <TouchableOpacity
            key={user.nombre}
            style={{ alignSelf: 'center' }}
            activeOpacity={0.7}
            onPress={goToProfile}
          >
            <View style={styles.card}>
              <View style={{ width: 98, height: 120 }}>
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={user.imagen}
                />
              </View>

              <View style={styles.content}>
                <HeaderCard />

                <View style={{ gap: 5 }}>
                  <View style={styles.row}>
                    {user.profesiones.map((profesion, index) => (
                      <CategoryButton
                        key={index}
                        borderColor={user.verificado ? '#00FF00' : '#FF0000'}
                        color={'#EBA580'}
                        icon={require('../../../../assets/icons/sprout.png')}
                        size={'small'}
                      />
                    ))}
                  </View>

                  <Text style={styles.description}>{user.descripcion}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllUsersServicesScreen;
