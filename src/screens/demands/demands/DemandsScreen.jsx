import { View, Text, Image, ScrollView } from 'react-native';
import GradientHeader from '../../../shared/GradientHeader';
import CardDemand from '../../../components/demands/CardDemands';
import { demandsData } from '../../../utils/demandsData';
import { styles } from './demansScreen.styles';

const DemandsScreen = () => {
  return (
    <View style={styles.container}>
      <GradientHeader>
        <View style={styles.logoBox}>
          <Image
            source={require('../../../../assets/brand.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Todo Oficios</Text>
        </View>
      </GradientHeader>

      <ScrollView showsVerticalScrollIndicator={false}>
        {demandsData.map((demand, index) => (
          <CardDemand demand={demand} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default DemandsScreen;
