import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import ModalImage from '../../../shared/ModalImage';
import { styles } from './photoComponent.styles';

const PhotoComponent = ({ fotosTrabajos }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log(fotosTrabajos);
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fotos de Trabajos</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {fotosTrabajos.map((foto, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleImageClick(foto)}
            style={styles.thumbnailContainer}
          >
            {foto && <Image source={foto.source} style={styles.image} />}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ModalImage
        visible={isModalVisible}
        image={selectedImage}
        onClose={closeModal}
      />
    </View>
  );
};

export default PhotoComponent;
