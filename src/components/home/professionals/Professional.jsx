import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import theme from '../../../styles/theme';
import SmallCategory from '../categories/SmallCategory';

const Professional = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.box}>
        <View style={styles.img}>
          <Image source={require('../../../../assets/worker.png')} />
        </View>

        <View style={styles.user}>
          <Text style={styles.name}>Carlos Juarez</Text>

          <View style={styles.iconBox}>
            <Icon
              type='material-community'
              name='star-outline'
              color={'orange'}
              size={20}
            />
            <Text style={styles.star}>4.9</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View>
          <SmallCategory
            borderColor={'#E89366'}
            color={'#EBA580'}
            icon={require('../../../../assets/icons/sprout.png')}
            title='Jardinero'
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  img: {
    width: 157,
    height: 108,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  name: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoBold,
    color: theme.colors.grey.grey700,
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  star: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey600,
  },
  divider: {
    width: '100%',
    borderColor: theme.colors.grey.grey100,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 8,
  },
});

export default Professional;
