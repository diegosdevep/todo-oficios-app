import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './cardUserService.styles';

const CardUserService = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/horizontalCard.png')}
        style={styles.imgBackground}
      />
      <View style={styles.profileContainer}>
        <Image
          source={require('../../../../assets/persona05.png')}
          style={styles.profileImg}
        />
      </View>

      <View style={{ justifyContent: 'space-between' }}>
        <Text style={styles.title}>Maria Casto</Text>

        <View style={styles.row}>
          <Icon
            type='material-community'
            size={22}
            name='check-decagram-outline'
            color='green'
          />
          <Text style={styles.text}>Perfil Verificado</Text>
        </View>

        <View style={styles.row}>
          <View style={[styles.row, { gap: 0 }]}>
            <Icon
              type='material-community'
              size={25}
              name='star-outline'
              color='orange'
            />
            <Text style={styles.text}>4.9</Text>
          </View>

          <View>
            <Text style={styles.text}>(10 comentarios)</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Icon
            type='material-community'
            size={25}
            name='phone-outline'
            color='gray'
          />
          <Text style={styles.text}>**********</Text>
          <Icon
            type='material-community'
            size={24}
            name='help-circle-outline'
            color='gray'
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Electricista</Text>
          <Text style={styles.text}>Jardinero</Text>
        </View>
      </View>
      <Icon
        type='material-community'
        size={25}
        name='bookmark-outline'
        color='gray'
      />
    </View>
  );
};

export default CardUserService;
