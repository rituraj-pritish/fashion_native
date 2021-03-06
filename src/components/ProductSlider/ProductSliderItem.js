import React from 'react';
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { Text, Image, View, TouchableOpacity } from 'react-native';

import SCREENS from 'src/constants/screens'
import styles from './ProductSlider.styled';

const ProductSliderItem = ({ name, id, variants }) => {
  const navigation = useNavigation()
  const variant = Object.keys(variants)[0];
  const price = variants[variant].price;

  const handlePress = () => {
    navigation.navigate(SCREENS.PRODUCT, {
      productId: id,
      variantId: variant
    })
  }

  const imageUrl = variants[variant].images[0]

  return (
    <TouchableOpacity style={styles.slideItemContainer} onPress={handlePress} >
      <View>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text>{price}</Text>
    </TouchableOpacity>
  );
};

ProductSliderItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  variants: PropTypes.object.isRequired,
};

export default ProductSliderItem;
