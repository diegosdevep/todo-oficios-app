import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import GradientHeader from '../../../shared/GradientHeader';
import ProfileSection from '../../../components/profile/profile/ProfileSection';
import { profileSections } from '../../../utils/profileSection';
import { styles } from './profileScreen.styles';

const ProfileScreen = () => {
  const handleLogout = () => {
    console.log('logout');
  };

  return (
    <View style={styles.container}>
      <GradientHeader />
      <View style={styles.avatarBox}>
        <Avatar
          size={96}
          rounded
          icon={{ type: 'material', name: 'person' }}
          containerStyle={styles.avatar}
          source={require('../../../../assets/person04.png')}
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
        {profileSections.map((section, index) => (
          <ProfileSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}

        <TouchableOpacity
          style={styles.logout}
          activeOpacity={0.7}
          onPress={handleLogout}
        >
          <MaterialIcons name='logout' size={24} color='grey' />
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
