import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from 'src/redux/products'
import shuffleArray from 'src/helpers/shuffleArray'
import ProductSlider from 'src/components/ProductSlider'
import Screen from 'src/components/ui/Screen'

const Home = () => {
  const dispatch = useDispatch()
  const data = useSelector(({ products }) => products.allProducts)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <Screen>
      <ProductSlider title='Trending' data={data}/>
      <ProductSlider title='Sale' data={shuffleArray(data)}/>
      <ProductSlider title='Sale' data={shuffleArray(data)}/>
    </Screen>
  )
}

export default Home
