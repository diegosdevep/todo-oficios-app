import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/home/home/HomeScreen';
import AllCategoriesScreen from '../screens/home/allCategories/AllCategoriesScreen';
import AllUsersServicesScreen from '../screens/home/allUsersServices/AllUsersServicesScreen';
import UserServiceScreen from '../screens/home/userService/UserServiceScreen';
import { screen } from '../utils/screen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: 'false' }}>
      <Stack.Screen
        name={screen.home.home}
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name={screen.home.allCategories}
        component={AllCategoriesScreen}
        options={{ title: 'All Categories' }}
      />
      <Stack.Screen
        name={screen.home.allUsersServices}
        component={AllUsersServicesScreen}
        options={{ title: 'All User Services' }}
      />
      <Stack.Screen
        name={screen.home.userService}
        component={UserServiceScreen}
        options={{ title: 'User Service' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
