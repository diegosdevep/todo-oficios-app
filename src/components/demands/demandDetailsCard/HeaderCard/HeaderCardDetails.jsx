import { View, Text } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import CategoryButton from '../../../../shared/CategoryButton';
import { styles } from './headerCardDetails.styles';

const HeaderCardDetails = ({ demand }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.date}>{demand.date}</Text>
        <Icon
          type='material-community'
          name='alarm-light-outline'
          size={25}
          color={'red'}
        />
      </View>

      <View style={styles.row}>
        <View style={styles.containerImg}>
          <Image source={demand.userImage} style={styles.img} />
        </View>

        <View>
          <Text style={styles.title}>Se Necesita: </Text>
          <CategoryButton
            borderColor={'#E89366'}
            color={'#EBA580'}
            icon={demand.category.icon}
            title={demand.category.title}
            size={'small'}
          />
        </View>
      </View>
    </View>
  );
};

export default HeaderCardDetails;
