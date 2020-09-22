import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import styles from './ProductOverview.styled.js'

const SCREEN_WIDTH = Dimensions.get('screen').width

const ProductOverview = ({ product, variant, setVariant }) => {
  const { name, variants, brand } = product
  const { price, images, stock } = variants[variant]

  const renderImages = images.map((url,idx) =>
      <Image
        key={idx}
        style={styles.image}
        source={{ uri: url }}
        // TODO show spinner
        onLoadStart={() => console.log('start')}
        onLoadEnd={() => console.log('end')}
      />
    )

  const productVariants = Object.values(variants).map(({ id, color }) => (
    <TouchableOpacity
      key={id}
      style={[styles.variant, { backgroundColor: color }]}
      onPress={() => setVariant(id)}
    />
  ))

  return (
    <View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ width: `${100 * images.length}%` }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate='fast'
        pagingEnabled
        style={styles.slider}
      >
        {renderImages}
    </ScrollView>

    <View style={styles.variants}>
      {productVariants}
    </View>
    <Text style={styles.brand}>{brand}</Text>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.price}>${price}</Text>
    </View>
  )
}

ProductOverview.propTypes = {
  product: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
  setVariant: PropTypes.func.isRequired,
}

export default ProductOverview
