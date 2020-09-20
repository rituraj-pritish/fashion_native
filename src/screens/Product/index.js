import { connect } from 'react-redux'
import Product from './Product'

const mapStateToProps = ({ products }, { route }) => {
  const { productId } = route.params
  return {
    product: products.allProducts.find(({ id }) => id === productId)
  }
}

export default connect(mapStateToProps)(Product)
