import { connect } from 'react-redux'
import Cart from './Cart'

const mapStateToProps = ({ cart }) => {
  return {
    products: cart.items
  }
}

export default connect(mapStateToProps)(Cart)
