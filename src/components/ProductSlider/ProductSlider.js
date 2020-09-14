import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, FlatList } from 'react-native'
import ProductSliderItem from './ProductSliderItem'
import styles from './ProductSlider.styled'

const ProductSlider = ({ title, data }) => {
  return (
    <View>
      <Text>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <ProductSliderItem {...item}
        style={styles.carousel}
      />}
      />
    </View>
  )
}

ProductSlider.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default ProductSlider
