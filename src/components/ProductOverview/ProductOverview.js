import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Image from 'src/components/ui/Image'
import styles from './ProductOverview.styled.js'

const ProductOverview = ({ product, variant, setVariant }) => {
  const { name, variants, brand } = product
  const { price, images, stock } = variants[variant]

  const renderImages = images.map((url,idx) =>
      <Image
        key={idx}
        style={styles.image}
        source={{ uri: url }}
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
