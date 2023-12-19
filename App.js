import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { initFirebase } from './src/firebase/firebase';
import 'react-native-get-random-values';
import Toast from 'react-native-toast-message';
import theme from './src/styles/theme';
import AppNavigation from './src/routes/AppNavigation';

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      theme.loadFonts().then(() => {
        setFontLoaded(true);
      });
    }
  }, []);

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <>
      <NavigationContainer>
        <StatusBar style='auto' />
        <AppNavigation />
      </NavigationContainer>
      <Toast />
    </>
  );
}
