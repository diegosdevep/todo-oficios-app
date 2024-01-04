import { View, Text } from 'react-native';
import ProfessionalCard from '../ProfessionalCard/ProfessionalCard';
import { professionalData } from '../../../utils/professionalData';
import { styles } from './professionalList.styles';

const ProfessionalList = () => {
  const chunkedProfessionalData = professionalData.reduce(
    (acc, professional, index) => {
      const rowIndex = Math.floor(index / 2);
      if (!acc[rowIndex]) {
        acc[rowIndex] = [];
      }
      acc[rowIndex].push(professional);
      return acc;
    },
    []
  );

  const slicedData = chunkedProfessionalData.slice(0, 2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profesionales</Text>

      {slicedData.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((professional) => (
            <ProfessionalCard key={professional.id} {...professional} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default ProfessionalList;
