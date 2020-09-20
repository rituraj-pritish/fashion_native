import { connect } from 'react-redux'
import AppHeader from './AppHeader'

const mapStateToProps = ({ cart }) => {
  return {
    totalItems: cart.items.length
  }
}

export default connect(mapStateToProps)(AppHeader)
