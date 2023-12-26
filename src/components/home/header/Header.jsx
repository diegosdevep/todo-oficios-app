import { Text, StyleSheet, Image, View } from 'react-native';
import { useState } from 'react';
import { Icon } from 'react-native-elements';
import theme from '../../../styles/theme';
import GradientHeader from '../../../shared/GradientHeader';

const Header = () => {
  const [user, setUser] = useState(false);

  return (
    <GradientHeader>
      {user ? (
        <View style={styles.content}>
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
        </View>
      ) : (
        <View style={styles.center}>
          <Image
            source={require('../../../../assets/brand.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Todo Oficios</Text>
        </View>
      )}
    </GradientHeader>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  center: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
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
