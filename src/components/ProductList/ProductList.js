import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import SCREENS from 'src/constants/screens'
import { updateCart, removeFromCart } from 'src/redux/cart'
import styles from './ProductList.styled.js'
import Counter from '../Counter/index.js'

const ProductList = ({ products }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return products.map(({ name, price, imageUrl, productId, variantId, quantity }, idx) => (
    <View key={idx} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(SCREENS.PRODUCT, {
        productId,
        variantId
      })}>
        <Image source={{ uri: imageUrl }} style={styles.image}/>
      </TouchableOpacity>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price * quantity}</Text>
        <Counter
          initialCount={quantity}
          onIncrement={() => dispatch(updateCart({ id: variantId, quantity: quantity + 1 })) }
          onDecrement={() => dispatch(updateCart({ id: variantId, quantity: quantity - 1 }))}
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(removeFromCart(variantId))}
          >
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    ))
}

ProductList.propTypes = {
  products: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number
  }).isRequired
}

export default ProductList
