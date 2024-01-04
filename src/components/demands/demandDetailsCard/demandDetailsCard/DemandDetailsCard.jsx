import { View } from 'react-native';
import HeaderCardDetails from '../HeaderCard/HeaderCardDetails';
import InfoCard from '../InfoCard/InfoCard';
import ImagesCard from '../ImagesCard/ImagesCard';
import ProfessionalsCountSection from '../professionalCountSection/ProfessionalCountSection';
import { styles } from './demandDetailsCard.styles';

const DemandDetailsCard = ({ demand }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HeaderCardDetails demand={demand} />

        <InfoCard demand={demand} />

        <ImagesCard demand={demand} />

        <ProfessionalsCountSection
          professionalsCount={demand.professionalsCount}
        />
      </View>
    </View>
  );
};

export default DemandDetailsCard;
