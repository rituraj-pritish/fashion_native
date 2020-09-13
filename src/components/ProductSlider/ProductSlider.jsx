import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Dimensions, FlatList } from 'react-native'
import ProductSliderItem from './ProductSliderItem'
import { Carousel } from './ProductSlider.styled'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const ProductSlider = ({ title, data }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Carousel
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <ProductSliderItem {...item} />}
      />
    </View>
  )
}

ProductSlider.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default ProductSlider
