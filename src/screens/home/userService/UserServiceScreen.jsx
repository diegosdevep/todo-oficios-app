import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { SvgXml } from 'react-native-svg';
import GradientHeader from '../../../shared/GradientHeader';
import GoBackArrow from '../../../shared/GoBackArrow';
import CardUserService from '../../../components/userService/cardUserService/CardUserService';
import SmallCategory from '../../../components/home/categories/SmallCategory';
import theme from '../../../styles/theme';

const HardHatSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M16 9C16 14.33 8 14.33 8 9H10C10 11.67 14 11.67 14 9M20 18V21H4V18C4 15.33 9.33 14 12 14C14.67 14 20 15.33 20 18M18.1 18C18.1 17.36 14.97 15.9 12 15.9C9.03 15.9 5.9 17.36 5.9 18V19.1H18.1M12.5 2C12.78 2 13 2.22 13 2.5V5.5H14V3C15.45 3.67 16.34 5.16 16.25 6.75C16.25 6.75 16.95 6.89 17 8H7C7 6.89 7.75 6.75 7.75 6.75C7.66 5.16 8.55 3.67 10 3V5.5H11V2.5C11 2.22 11.22 2 11.5 2" />
</svg>
`;

const UserServiceScreen = () => {
  return (
    <View style={styles.container}>
      <GradientHeader>
        <GoBackArrow title='Volver a Todos' />
      </GradientHeader>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardUserService />

        <View style={styles.habilityContainer}>
          <Text style={styles.title}>Habilidades: </Text>

          <View style={[styles.row, { gap: 10 }]}>
            <View style={styles.row}>
              <Text style={styles.text}>Jardinero</Text>
              <SmallCategory
                borderColor={'#E89366'}
                color={'#EBA580'}
                icon={require('../../../../assets/icons/sprout.png')}
              />
            </View>

            <View style={styles.row}>
              <Text style={styles.text}>Electricista</Text>
              <SmallCategory
                borderColor={'#E89366'}
                color={'#EBA580'}
                icon={require('../../../../assets/icons/sprout.png')}
              />
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.box}>
          <View style={styles.row}>
            <SvgXml
              xml={HardHatSvg}
              width={30}
              height={30}
              fill={theme.colors.grey.grey700}
            />
            <Text style={styles.text}>Usuario desde noviembre 2023</Text>
          </View>
          <View style={styles.row}>
            <Icon
              type='material-community'
              name='map-marker-outline'
              size={30}
              color={theme.colors.grey.grey700}
            />
            <Text style={styles.text}>Santa Rosa, La Pampa</Text>
          </View>
          <View style={styles.row}>
            <Icon
              type='material-community'
              name='clock-time-eight-outline'
              size={30}
              color={theme.colors.grey.grey700}
            />
            <Text style={styles.text}>Lunes a Viernes de 10:00 a 19:00 pm</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.box}>
          <Text style={styles.title}>Descripcion</Text>
          <Text style={[styles.text, { textAlign: 'justify' }]}>
            Lorem ipsum dolor sit amet consectetur. Maecenas dui sed lectus ac.
            Magnis ultricies ultrices orci tincidunt ornare convallis nascetur.
            Diam et ut eu consectetur posuere. Justo turpis quis amet quis
            egestas nibh. Purus sit dictum enim sit auctor vulputate sit integer
            quam. Nunc tortor diam nisl tincidunt enim volutpat.
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={[styles.box, { marginBottom: 20 }]}>
          <Text style={styles.title}>Fotos de Trabajos</Text>

          <View style={[styles.row, { gap: 30, marginTop: 30 }]}>
            <Image source={require('../../../../assets/titulo.png')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  habilityContainer: {
    marginTop: 25,
    marginHorizontal: 20,
    gap: 20,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.PoppinsSemibold,
    color: theme.colors.grey.grey600,
  },
  subtitle: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.PoppinsRegular,
    color: theme.colors.grey.grey600,
  },
  text: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
  },
  box: {
    marginHorizontal: 20,
    gap: 5,
  },
  divider: {
    width: '90%',
    borderWidth: 0.7,
    borderColor: theme.colors.grey.grey200,
    marginVertical: 25,
    alignSelf: 'center',
  },
});

export default UserServiceScreen;
