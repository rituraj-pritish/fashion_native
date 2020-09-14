import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, View } from 'react-native';
import styles from './ProductSlider.styled';

const ProductSliderItem = ({ name, id, variants }) => {
  const variant = Object.keys(variants)[0];
  const price = variants[variant].price;

  return (
    <View style={styles.slideItemContainer}>
      <View>
        <Image
          style={{ height: '85%', width: '100%' }}
          source={{ uri: variants[variant].images[0] }}
        />
      </View>
      <Text style={{ marginTop: -28 }}>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
};

ProductSliderItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  variants: PropTypes.object.isRequired,
};

export default ProductSliderItem;
