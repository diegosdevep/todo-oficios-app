import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import ModalImage from '../../../../shared/ModalImage';
import { styles } from './imagesCard.styles';

const ImagesCard = ({ demand }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      <Text style={styles.title}>Fotos:</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {demand.userImages.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImageClick(image)}>
            <Image source={image} style={styles.image} />
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

export default ImagesCard;
