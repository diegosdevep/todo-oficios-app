import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import CategoryButton from '../../../shared/CategoryButton';
import { styles } from './professionalCard.styles';

const ProfessionalCard = ({ id, name, rating, category, image }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.box}>
        <View style={styles.img}>
          <Image source={image} />
        </View>

        <View style={styles.user}>
          <Text style={styles.name}>{name}</Text>

          <View style={styles.iconBox}>
            <Icon
              type='material-community'
              name='star-outline'
              color={'orange'}
              size={20}
            />
            <Text style={styles.star}>{rating}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View>
          <CategoryButton
            borderColor={'#E89366'}
            color={'#EBA580'}
            icon={require('../../../../assets/icons/sprout.png')}
            title={category}
            size={'small'}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfessionalCard;
