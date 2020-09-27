import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'

import { addToCart } from 'src/redux/cart'
import Screen from 'src/components/ui/Screen'
import ProductOverview from 'src/components/ProductOverview'
import theme from 'src/theme'
import styles from './Product.styled.js'

const Product = ({ product, dispatch, variantInCart, variantId }) => {
  const { id, name, variants } = product
  const [variant, setVariant] = useState(variantId)

  const handleAddToCart = () => {
    // todo disable add to cart button
    if (variantInCart === variant) return

    dispatch(addToCart({
      productId: id,
      variantId: variant,
      price: variants[variant].price,
      name,
      imageUrl: variants[variant].images[0],
      quantity: 1
    }))
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
    brand: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    variants: PropTypes.object.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  variantInCart: PropTypes.string.isRequired,
  variantId: PropTypes.string.isRequired
}

export default Product
