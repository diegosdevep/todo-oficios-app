import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Componente1 from '../components/profile/Componente1';
import Componente2 from '../components/profile/Componente2';
import theme from '../styles/theme';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.title || route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              style={[styles.tabItem, isFocused ? styles.tabItemFocused : null]}
              onPress={onPress}
            >
              <Text style={styles.tabItemLabel}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const MyDemandsTopNavigation = ({ route }) => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarShowIcon: false,
      }}
    >
      <Tab.Screen
        name='lastTicket'
        component={Componente1}
        initialParams={route.params}
        options={{
          title: 'Ultima Orden',
        }}
      />
      <Tab.Screen
        name='history'
        component={Componente2}
        options={{
          title: 'Historial',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#EFEFF4',
    borderRadius: 8,
    marginHorizontal: '5%',
    marginBottom: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    borderRadius: 8,
  },
  tabItemFocused: {
    borderBottomColor: theme.colors.orange,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.orange,
  },
  tabItemLabel: {
    color: theme.colors.grey,
    fontSize: 16,
    fontWeight: theme.fontWeight.semiBold,
  },
});

export default MyDemandsTopNavigation;
