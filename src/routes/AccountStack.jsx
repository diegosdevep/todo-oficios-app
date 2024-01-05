import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/profile/profileScreen/ProfileScreen';
import MyDemandsTopNavigation from './MyDemandsTopNavigation';
import { screen } from '../utils/screen';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: 'false' }}>
      <Stack.Screen
        name={screen.account.account}
        component={ProfileScreen}
        options={{ title: 'Perfil' }}
      />
      <Stack.Screen
        name={screen.account.myDemands}
        component={MyDemandsTopNavigation}
        options={{ title: 'Mis Demandas' }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
