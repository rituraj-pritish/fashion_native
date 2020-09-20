import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'

import Screen from 'src/components/ui/Screen'
import ProductOverview from 'src/components/ProductOverview'
import theme from 'src/theme'
import styles from './Product.styled.js'

const Product = ({ product }) => {
  const { id, variants } = product
  const [variant, setVariant] = useState(Object.keys(variants)[0])

  const handleAddToCart = () => {

  }

  const handleBuyNow = () => {

  }

  return (
    <>
    <Screen>
      <ProductOverview
        product={product}
        variant={variant}
        setVariant={setVariant}
      />
    </Screen>

    <View style={styles.bottomButtons}>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={handleBuyNow}>
        <Text style={[styles.buttonText, { color: theme.colors.white }]}>Buy now</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    totalRatings: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    variants: PropTypes.object.isRequired,
  }).isRequired
}

export default Product
