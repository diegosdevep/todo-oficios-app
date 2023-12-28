import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DemandsScreen from '../screens/demands/demands/DemandsScreen';
import DemansDetailsScreen from '../screens/demands/demansDetails/DemansDetailsScreen';
import { screen } from '../utils/screen';

const Stack = createNativeStackNavigator();

const DemandsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.demands.demand}
        component={DemandsScreen}
        options={{ title: 'Demandas' }}
      />
      <Stack.Screen
        name={screen.demands.demandsDetails}
        component={DemansDetailsScreen}
        options={{ title: 'Demandas Details' }}
      />
    </Stack.Navigator>
  );
};

export default DemandsStack;
