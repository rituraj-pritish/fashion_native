import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import styles from './ProductList.styled.js'
import Counter from '../Counter/index.js'

const ProductList = ({ products }) => {
  return products.map(({ name, price, imageUrl }, idx) => (
    <View key={idx} style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image}/>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
        <Counter
          onIncrement={() => {}}
          onDecrement={() => {}}
        />
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
  }).isRequired,
}

export default ProductList
