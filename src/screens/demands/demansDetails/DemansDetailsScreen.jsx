import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Icon } from 'react-native-elements';
import GradientHeader from '../../../shared/GradientHeader';
import GoBackArrow from '../../../shared/GoBackArrow';
import SmallCategory from '../../../components/home/categories/SmallCategory';
import theme from '../../../styles/theme';
import { useState } from 'react';

const DemansDetailsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <GradientHeader>
        <GoBackArrow title='Volver a todas las Demandas' />
      </GradientHeader>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card} activeOpacity={0.7}>
          <View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>12/06/2024 18:30</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginTop: 10,
              }}
            >
              <Icon
                type='material-community'
                name='alarm-light-outline'
                size={25}
                color={'red'}
              />
              <Text style={styles.urgent}>Demanda Urgente</Text>
            </View>

            <View style={{ gap: 15 }}>
              <View style={styles.row}>
                <View style={styles.containerImg}>
                  <Image
                    source={require('../../../../assets/persona05.png')}
                    style={styles.img}
                  />
                </View>

                <View>
                  <Text style={styles.titleUser}>Se Necesita: </Text>
                  <View style={styles.row}>
                    <Text style={styles.category}>Electricista</Text>
                    <SmallCategory
                      borderColor={'#E89366'}
                      color={'#EBA580'}
                      icon={require('../../../../assets/icons/cord.png')}
                    />
                  </View>
                </View>
              </View>

              <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.description}>
                  Lorem ipsum dolor sit amet consectetur. Neque netus
                  consectetur turpis sed vestibulum nam. Consectetur fusce
                  tempus malesuada nunc ultricies. Aliquam sit imperdiet diam
                  vulputate. Tempus ipsum dolor sit amet consectetur. Neque
                  netus consectetur turpis sed vestibulum nam. Consectetur fusce
                  tempus malesuada nunc ultricies.
                </Text>

                <Text style={styles.description}>
                  Lorem ipsum dolor sit amet consectetur. Neque netus
                  consectetur turpis sed vestibulum nam. Consectetur fusce
                  tempus malesuada nunc ultricies. Aliquam sit imperdiet diam
                  vulputate. Tempus ipsum dolor sit amet consectetur. Neque
                  netus consectetur turpis sed vestibulum nam. Consectetur fusce
                  tempus malesuada nunc ultricies.
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  margin: 10,
                  gap: 10,
                }}
              >
                <Text style={styles.subtitle}>Horarios disponible:</Text>
                <Text style={styles.text}>
                  A cualquier hora a partir de ahora
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  marginHorizontal: 10,
                  gap: 10,
                }}
              >
                <Text style={styles.subtitle}>Fotos:</Text>

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.scrollViewContent}
                >
                  <TouchableOpacity
                    onPress={() =>
                      openModal(require('../../../../assets/worker.png'))
                    }
                  >
                    <Image
                      source={require('../../../../assets/worker.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      openModal(require('../../../../assets/worker.png'))
                    }
                  >
                    <Image
                      source={require('../../../../assets/worker.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      openModal(require('../../../../assets/worker.png'))
                    }
                  >
                    <Image
                      source={require('../../../../assets/worker.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      openModal(require('../../../../assets/worker.png'))
                    }
                  >
                    <Image
                      source={require('../../../../assets/worker.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                </ScrollView>
              </View>

              <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={closeModal}
              >
                <View style={styles.modalContainer}>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={closeModal}
                  >
                    <Icon
                      type='material-community'
                      name='close-circle-outline'
                      color='red'
                      size={30}
                    />
                  </TouchableOpacity>

                  <Image source={selectedImage} style={styles.modalImage} />
                </View>
              </Modal>

              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginHorizontal: 10,
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      borderWidth: 2,
                      borderRadius: 50,
                      marginRight: -10,
                      borderColor: theme.colors.primary,
                    }}
                  >
                    <Image
                      style={styles.imgUsers}
                      source={require('../../../../assets/person04.png')}
                    />
                  </View>
                  <View
                    style={{
                      borderWidth: 2,
                      borderRadius: 50,
                      marginRight: -10,
                      borderColor: theme.colors.primary,
                    }}
                  >
                    <Image
                      style={styles.imgUsers}
                      source={require('../../../../assets/persona05.png')}
                    />
                  </View>
                  <View
                    style={{
                      borderWidth: 2,
                      borderRadius: 50,
                      borderColor: theme.colors.primary,
                    }}
                  >
                    <Image
                      style={styles.imgUsers}
                      source={require('../../../../assets/photo.png')}
                    />
                  </View>

                  <Text style={styles.textUsers}>
                    3 Profecionales ya solicitaron esto
                  </Text>
                </View>

                <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
                  <Text style={styles.btnText}>Solicitar Trabajo</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    fontSize: theme.fontSize.h3,
    fontFamily: theme.fonts.PoppinsSemibold,
    color: theme.colors.grey.grey800,
  },
  card: {
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    borderColor: theme.colors.grey.grey100,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 20,
    ...theme.shadows.light,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
  },
  date: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey600,
  },
  urgent: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: 'red',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  containerImg: {
    borderRadius: 50,
    width: 58,
    height: 58,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 58,
    height: 58,
    resizeMode: 'cover',
  },
  titleUser: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.PoppinsRegular,
    color: theme.colors.grey.grey800,
    marginBottom: 5,
  },
  category: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
  },
  description: {
    textAlign: 'justify',
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
    lineHeight: 20,
  },
  subtitle: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.PoppinsSemibold,
    color: theme.colors.grey.grey700,
  },
  text: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey700,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    gap: 10,
  },
  imgUsers: {
    width: 24,
    height: 24,
    borderRadius: 50,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  textUsers: {
    marginLeft: 10,
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.LatoRegular,
    color: theme.colors.grey.grey600,
  },
  btn: {
    backgroundColor: theme.colors.primary,
    marginVertical: 20,
    padding: 15,
    borderRadius: 16,
  },
  btnText: {
    fontSize: theme.fontSize.xl,
    fontFamily: theme.fonts.LatoBold,
    color: theme.colors.white,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalImage: {
    width: '95%',
    height: 300,
    borderRadius: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 80,
    right: 20,
  },
});

export default DemansDetailsScreen;
