import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from 'src/redux/products'
import ProductSlider from 'src/components/ProductSlider'

const Home = () => {
  const dispatch = useDispatch()
  const data = useSelector(({ products }) => products.allProducts)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <Text>
      <ProductSlider data={data}/>
      {/* <ProductSlider data={data}/> */}
    </Text>
  )
}

export default Home
