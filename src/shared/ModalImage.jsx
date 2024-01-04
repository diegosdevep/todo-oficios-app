import {
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

const ModalImage = ({ visible, image, onClose }) => {
  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.text}>Close Modal</Text>
        </TouchableOpacity>
        {image && <Image source={image} style={styles.image} />}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 80,
    right: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
export default ModalImage;
