import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screen } from '../utils/screen';
import DemandsScreen from '../screens/demands/DemandsScreen';

const Stack = createNativeStackNavigator();

const DemandsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.demands.demand}
        component={DemandsScreen}
        options={{ title: 'Demandas' }}
      />
    </Stack.Navigator>
  );
};

export default DemandsStack;
