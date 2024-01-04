import { View, Text } from 'react-native';
import { styles } from './descriptionComponent.styles';

const DescriptionComponent = ({ descripcion }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Descripcion</Text>
    <Text style={styles.text}>{descripcion}</Text>
  </View>
);

export default DescriptionComponent;
