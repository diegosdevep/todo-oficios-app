import { View, Text } from 'react-native';
import { styles } from './infoCard.styles';

const InfoCard = ({ demand }) => {
  const limitedDescription =
    demand.description.length > 200
      ? demand.description.substring(0, 200) + '...'
      : demand.description;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.description}>{limitedDescription}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.subtitle}>Horarios disponible:</Text>
        <Text style={styles.text}>A cualquier hora a partir de ahora</Text>
      </View>
    </View>
  );
};

export default InfoCard;
