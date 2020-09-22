import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import Screen from 'src/components/ui/Screen'
import ProductList from '../../components/ProductList/ProductList'

const Cart = ({ products }) => {
  return (
    <Screen>
      <ProductList products={products} />
    </Screen>
  )
}

Cart.propTypes = {
  products: PropTypes.array.isRequired
}

export default Cart
