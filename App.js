import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initFirebase } from './src/firebase/firebase';
import Toast from 'react-native-toast-message';
import 'react-native-get-random-values';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style='auto' />
      </NavigationContainer>
      <Toast />
    </>
  );
}
