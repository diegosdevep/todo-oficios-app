import React, { useEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import theme from '../styles/theme';

const GradientHeader = ({ children }) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTransparent: true,
      headerTitle: '',
      headerBackVisible: false,
      headerTintColor: theme.colors.grey.grey600,
    });
  }, [navigation]);

  return (
    <LinearGradient
      colors={[
        'rgba(240, 115, 36, 0.55)',
        'rgba(240, 115, 36, 0.18)',
        'rgba(240, 115, 36, 0.0)',
      ]}
      style={styles.gradient}
    >
      <View style={styles.goBack}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBack: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginHorizontal: 10,
    marginTop: Platform.OS === 'ios' ? 20 : 10,
  },
  title: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.fonts.LatoBold,
    color: theme.colors.grey.grey700,
  },
});

export default GradientHeader;
