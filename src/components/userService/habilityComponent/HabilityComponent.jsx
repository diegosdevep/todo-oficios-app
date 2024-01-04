import { View, Text } from 'react-native';
import CategoryButton from '../../../shared/CategoryButton';
import { styles } from './hablityComponent.styles';

const HabilityComponent = ({ habilidades }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Habilidades: </Text>

    <View style={styles.row}>
      {habilidades.map((habilidad, index) => (
        <CategoryButton
          key={index}
          borderColor={habilidad.borderColor}
          color={habilidad.color}
          icon={habilidad.icon}
          title={habilidad.title}
          size={habilidad.size}
        />
      ))}
    </View>
  </View>
);

export default HabilityComponent;
