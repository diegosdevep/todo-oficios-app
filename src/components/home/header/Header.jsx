import { useState } from 'react';
import { Text, Image, View } from 'react-native';
import { Icon } from 'react-native-elements';
import GradientHeader from '../../../shared/GradientHeader';
import { styles } from './header.styles';

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

export default Header;
