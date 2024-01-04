import { View, Text, Image } from 'react-native';
import { styles } from './professionalCountSection.styles';

const ProfessionalsCountSection = ({ professionalsCount }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: professionalsCount }).map((_, index) => (
        <View key={index} style={styles.box}>
          <Image
            style={styles.img}
            source={require('../../../../../assets/person04.png')}
          />
        </View>
      ))}
      <Text style={styles.text}>
        {`${professionalsCount} Profesionales ya solicitaron esto`}
      </Text>
    </View>
  );
};

export default ProfessionalsCountSection;
