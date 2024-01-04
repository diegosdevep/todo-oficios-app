import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import CategoryButton from '../../shared/CategoryButton';
import CardButton from '../../shared/CardButton';
import theme from '../../styles/theme';
import { screen } from '../../utils/screen';
import { styles } from './cardDemands.styles';

const CardDemand = ({ demand, button1, button2 }) => {
  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate(screen.demands.demandsDetails, { demand });
  };

  const limitedDescription =
    demand.description.length > 200
      ? demand.description.substring(0, 200) + '...'
      : demand.description;

  const limitedProfessionalsCount = Math.min(demand.professionalsCount, 3);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={goToDetails}
    >
      <View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{demand.date}</Text>
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
              <Image source={demand.userImage} style={styles.img} />
            </View>

            <View>
              <Text style={styles.titleUser}>Se Necesita: </Text>
              <CategoryButton
                borderColor={'#E89366'}
                color={'#EBA580'}
                icon={demand.category.icon}
                title={demand.category.title}
                size={'small'}
              />
            </View>
          </View>

          <View>
            <Text style={styles.description}>{limitedDescription}</Text>
          </View>

          <View>
            <View style={[styles.row, { gap: 0 }]}>
              {Array.from({ length: limitedProfessionalsCount }).map(
                (_, index) => (
                  <View
                    key={index}
                    style={{
                      borderWidth: 2,
                      borderRadius: 50,
                      marginRight: -10,
                      borderColor: theme.colors.primary,
                    }}
                  >
                    <Image
                      style={styles.imgUsers}
                      source={require('../../../assets/person04.png')}
                    />
                  </View>
                )
              )}

              <Text style={[styles.text, { marginLeft: 15 }]}>
                {`${demand.professionalsCount} Profesionales ya solicitaron esto`}
              </Text>
            </View>
          </View>

          <View style={styles.boxBtn}>
            {button1 && (
              <CardButton
                title={'Eliminar'}
                backgroundColor='white'
                borderColor={theme.colors.primary}
                textColor={theme.colors.primary}
                onPress={() => console.log('Eliminar')}
              />
            )}
            {button2 && (
              <CardButton
                title={'Activar'}
                onPress={() => console.log('Activar')}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardDemand;
