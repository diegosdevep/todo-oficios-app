import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import GradientHeader from '../../shared/GradientHeader';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../styles/theme';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <GradientHeader></GradientHeader>
      <View style={styles.avatarBox}>
        <Avatar
          size={96}
          rounded
          icon={{ type: 'material', name: 'person' }}
          containerStyle={styles.avatar}
          source={require('../../../assets/person04.png')}
        >
          <Avatar.Accessory size={30} />
        </Avatar>
      </View>

      <View style={styles.header}>
        <Text style={styles.name}>Maria Juarez</Text>
        <Text style={styles.email}>mariajuarez@gmail.com</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ marginHorizontal: 20 }}>
          <View style={{ marginTop: 40 }}>
            <Text style={styles.title}>Mi Actividad</Text>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Notificaciones</Text>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={30}
                  color='grey'
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Mis Demandas</Text>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={30}
                  color='grey'
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Solicitud a mis Demandas</Text>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={30}
                  color='grey'
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Mis Comentarios</Text>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={30}
                  color='grey'
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Profesionales Favoritos</Text>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={30}
                  color='grey'
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.title}>Acerca de Todo Oficios</Text>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Preguntas frecuentes</Text>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={30}
                  color='grey'
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Contáctanos</Text>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={30}
                  color='grey'
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Terminos y Condiciones</Text>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={30}
                  color='grey'
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.title}>Mi Cuenta</Text>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Cambiar tipo de cuenta</Text>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={30}
                  color='grey'
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Cambiar nombre de Usuario</Text>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={30}
                  color='grey'
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Cambiar contraseña</Text>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={30}
                  color='grey'
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.logout} activeOpacity={0.7}>
          <MaterialIcons name='logout' size={24} color='grey' />
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoBox: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  logo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  header: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  avatarBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
  },
  avatar: {
    borderColor: theme.colors.darkPrimary,
    borderWidth: 2,
  },
  name: {
    fontSize: theme.fontSize.md,
    color: theme.colors.grey.grey500,
    fontFamily: theme.fonts.LatoBold,
  },
  email: {
    fontSize: theme.fontSize.md,
    color: theme.colors.grey.grey500,
    fontFamily: theme.fonts.LatoRegular,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    backgroundColor: 'white',
    marginLeft: 5,
  },
  title: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.grey.grey700,
    fontFamily: theme.fonts.LatoBold,
  },
  text: {
    fontSize: theme.fontSize.md,
    color: theme.colors.grey.grey600,
    fontFamily: theme.fonts.LatoRegular,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    padding: 13,
    borderRadius: 10,
    gap: 10,
    marginTop: 10,
  },
  logoutText: {
    textAlign: 'center',
    fontSize: theme.fontSize.lg,
    color: theme.colors.grey.grey500,
    fontFamily: theme.fonts.LatoBold,
  },
});

export default ProfileScreen;
