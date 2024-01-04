import { View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import GradientHeader from '../../../shared/GradientHeader';
import GoBackArrow from '../../../shared/GoBackArrow';
import CardButton from '../../../shared/CardButton';
import DemandDetailsCard from '../../../components/demands/demandDetailsCard/demandDetailsCard/DemandDetailsCard';
import { styles } from './demandsDetails.styles';

const DemansDetailsScreen = () => {
  const route = useRoute().params;

  return (
    <View style={styles.container}>
      <GradientHeader>
        <GoBackArrow title='Volver a todas las Demandas' />
      </GradientHeader>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <DemandDetailsCard demand={route.demand} />

          <CardButton title={'Solicitar Trabajo'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DemansDetailsScreen;
