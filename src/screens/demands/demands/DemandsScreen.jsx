import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import SmallCategory from '../../../components/home/categories/SmallCategory';
import GradientHeader from '../../../shared/GradientHeader';
import theme from '../../../styles/theme';
import { screen } from '../../../utils/screen';

const DemandsScreen = () => {
  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate(screen.demands.demandsDetails);
  };

  return (
    <View style={styles.container}>
      <GradientHeader>
        <View style={styles.logoBox}>
          <Image
            source={require('../../../../assets/brand.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Todo Oficios</Text>
        </View>
      </GradientHeader>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
          onPress={goToDetails}
        >
          <View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>12/06/2024 18:30</Text>
              <Icon
                type='material-community'
                name='alarm-light-outline'
                size={25}
                color={'red'}
              />
            </View>

            <View style={{ gap: 15 }}>
              <View style={styles.row}>
                <View style={styles.containerImg}>
                  <Image
                    source={require('../../../../assets/persona05.png')}
                    style={styles.img}
                  />
                </View>

                <View>
                  <Text style={styles.titleUser}>Se Necesita: </Text>
                  <View style={styles.row}>
                    <Text style={styles.subtitle}>Electricista</Text>
                    <SmallCategory
                      borderColor={'#E89366'}
                      color={'#EBA580'}
                      icon={require('../../../../assets/icons/cord.png')}
                    />
                  </View>
                </View>
              </View>

              <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.description}>
                  Lorem ipsum dolor sit amet consectetur. Neque netus
                  consectetur turpis sed vestibulum nam. Consectetur fusce
                  tempus malesuada nunc ultricies. Aliquam sit imperdiet diam
                  vulputate. Tempus d...
                </Text>
              </View>

              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}
                >
                  <View
                    style={{
                      borderWidth: 2,
                      borderRadius: 50,
                      marginRight: -10,
                      borderColor: theme.colors.primary,
                    }}
                  >
                    <Image
                      style={styles.imgUsers}
                      source={require('../../../../assets/person04.png')}
                    />
                  </View>
                  <View
                    style={{
                      borderWidth: 2,
                      borderRadius: 50,
                      marginRight: -10,
                      borderColor: theme.colors.primary,
                    }}
                  >
                    <Image
                      style={styles.imgUsers}
                      source={require('../../../../assets/persona05.png')}
                    />
                  </View>
                  <View
                    style={{
                      borderWidth: 2,
                      borderRadius: 50,
                      borderColor: theme.colors.primary,
                    }}
                  >
                    <Image
                      style={styles.imgUsers}
                      source={require('../../../../assets/photo.png')}
                    />
                  </View>
                  <Text style={styles.text}>
                    3 Profecionales ya solicitaron esto
                  </Text>
                </View>
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
  logoBox: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  logo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  title: {
    fontSize: theme.fontSize.h3,
    fontFamily: theme.fonts.PoppinsSemibold,
    color: theme.colors.grey.grey800,
  },
  card: {
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    borderColor: theme.colors.grey.grey100,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 20,
    ...theme.shadows.light,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
  },
  date: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey600,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  containerImg: {
    borderRadius: 50,
    width: 58,
    height: 58,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 58,
    height: 58,
    resizeMode: 'cover',
  },
  titleUser: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.PoppinsRegular,
    color: theme.colors.grey.grey800,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
  },
  description: {
    textAlign: 'justify',
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
    lineHeight: 20,
  },
  imgUsers: {
    width: 24,
    height: 24,
    borderRadius: 50,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  text: {
    marginLeft: 10,
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey600,
  },
});
export default DemandsScreen;
