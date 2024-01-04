import { View, ScrollView, StyleSheet } from 'react-native';
import GradientHeader from '../../../shared/GradientHeader';
import GoBackArrow from '../../../shared/GoBackArrow';
import CardUserService from '../../../components/userService/cardUserService/CardUserService';
import HabilityComponent from '../../../components/userService/habilityComponent/HabilityComponent';
import PhotoComponent from '../../../components/userService/photoComponent/PhotoComponent';
import UserInfoComponent from '../../../components/userService/userInfoComponent/UserInfoComponent';
import DescriptionComponent from '../../../components/userService/descriptionComponent/DescriptionComponent';
import theme from '../../../styles/theme';

const UserServiceScreen = () => {
  const userServiceData = {
    habilidades: [
      {
        borderColor: '#E89366',
        color: '#EBA580',
        icon: require('../../../../assets/icons/sprout.png'),
        title: 'Jardinero',
        size: 'small',
      },
      {
        borderColor: '#E89366',
        color: '#EBA580',
        icon: require('../../../../assets/icons/cord.png'),
        title: 'Electricista',
        size: 'small',
      },
    ],
    usuarioInfo: [
      { icon: 'hard-hat', text: 'Usuario desde noviembre 2023' },
      { icon: 'map-marker-outline', text: 'Santa Rosa, La Pampa' },
      {
        icon: 'clock-time-eight-outline',
        text: 'Lunes a Viernes de 10:00 a 19:00 pm',
      },
    ],
    descripcion:
      'Lorem ipsum dolor sit amet consectetur. Maecenas dui sed lectus ac. Magnis ultricies ultrices orci tincidunt ornare convallis nascetur. Diam et ut eu consectetur posuere. Justo turpis quis amet quis egestas nibh. Purus sit dictum enim sit auctor vulputate sit integer quam. Nunc tortor diam nisl tincidunt enim volutpat.',
    fotosTrabajos: [
      {
        source: require('../../../../assets/worker.png'),
        title: 'Título del trabajo',
      },
      {
        source: require('../../../../assets/worker.png'),
        title: 'Título del trabajo',
      },
      {
        source: require('../../../../assets/worker.png'),
        title: 'Título del trabajo',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <GradientHeader>
        <GoBackArrow title='Volver a Todos' />
      </GradientHeader>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <CardUserService />

          <HabilityComponent habilidades={userServiceData.habilidades} />
          <View style={styles.divider} />

          <UserInfoComponent usuarioInfo={userServiceData.usuarioInfo} />
          <View style={styles.divider} />

          <DescriptionComponent descripcion={userServiceData.descripcion} />
          <View style={styles.divider} />

          <PhotoComponent fotosTrabajos={userServiceData.fotosTrabajos} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    marginHorizontal: 20,
  },
  divider: {
    width: '100%',
    borderWidth: 0.7,
    borderColor: theme.colors.grey.grey200,
    alignSelf: 'center',
    marginTop: 20,
  },
});
export default UserServiceScreen;
