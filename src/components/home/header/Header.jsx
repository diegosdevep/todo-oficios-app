import { Text, StyleSheet, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import theme from '../../../styles/theme';
import { useState } from 'react';

const Header = () => {
  const [user, setUser] = useState(false);

  return (
    <LinearGradient
      colors={[
        'rgba(240, 115, 36, 0.55)',
        'rgba(240, 115, 36, 0.18)',
        'rgba(240, 115, 36, 0.0)',
      ]}
      style={styles.gradient}
    >
      {user ? (
        <>
          <View style={styles.box}>
            <Image
              source={require('../../../../assets/person04.png')}
              style={styles.user}
            />
          </View>

          <View style={styles.logoBox}>
            <Image
              source={require('../../../../assets/brand.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>Todo Oficios</Text>
          </View>

          <View style={styles.box}>
            <Icon type='material-community' size={30} name='bell-outline' />
          </View>
        </>
      ) : (
        <View style={styles.center}>
          <Image
            source={require('../../../../assets/brand.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Todo Oficios</Text>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    marginHorizontal: 20,
  },
  user: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  logoBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  title: {
    fontSize: theme.fontSize.h3,
    fontFamily: theme.fonts.PoppinsSemibold,
    color: theme.colors.grey.grey800,
  },
});

export default Header;
