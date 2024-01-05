import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import { styles } from './photoComponent.styles';

const PhotoComponent = ({ fotosTrabajos }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fotos de Trabajos</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {fotosTrabajos.map((foto, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => openModal(foto)}
            style={styles.thumbnailContainer}
          >
            <Image source={foto.source} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={selectedImage !== null} transparent>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
          <Image
            source={selectedImage ? selectedImage.source : null}
            style={styles.modalImage}
            resizeMode='contain'
          />
        </View>
      </Modal>
    </View>
  );
};

export default PhotoComponent;
