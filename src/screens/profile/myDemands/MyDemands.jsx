import { View, Text, ScrollView } from 'react-native';
import CardDemand from '../../../components/demands/CardDemands';
import GradientHeader from '../../../shared/GradientHeader';
import { demandsData } from '../../../utils/demandsData';
import { styles } from './myDemands.styles';

const MyDemands = () => {
  return (
    <View style={styles.container}>
      <GradientHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        {demandsData.map((demand, index) => (
          <CardDemand demand={demand} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MyDemands;
