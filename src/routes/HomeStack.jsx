import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/home/HomeScreen';
import AllCategoriesScreen from '../screens/home/allCategories/AllCategoriesScreen';
import { screen } from '../utils/screen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.home.home}
        component={HomeScreen}
        options={{ title: 'Home', headerShown: false }}
      />
      <Stack.Screen
        name={screen.home.allCategories}
        component={AllCategoriesScreen}
        options={{ title: 'All Categories', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
