import { connect } from 'react-redux'
import Product from './Product'

const mapStateToProps = ({ products, cart }, { route }) => {
  const { productId } = route.params
  return {
    product: products.allProducts.find(({ id }) => id === productId),
    variantInCart: cart.items.find(({ productId: id }) => id === productId)?.variantId
  }
}

export default connect(mapStateToProps)(Product)
