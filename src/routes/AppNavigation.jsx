import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import DemandsStack from './DemandsStack';
import AccountStack from './AccountStack';
import theme from '../styles/theme';
import { screen } from '../utils/screen';
import { iconOptions } from '../utils/iconOptions';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.grey.grey500,
        tabBarIcon: ({ color, size, focused }) =>
          iconOptions(route, color, size, focused),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.white,
        },
      })}
    >
      <Tab.Screen name={screen.home.tab} component={HomeStack} />
      <Tab.Screen name={screen.demands.tab} component={DemandsStack} />
      <Tab.Screen name={screen.account.tab} component={AccountStack} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
