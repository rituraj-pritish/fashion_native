import Drawer from './Drawer'
import { connect } from 'react-redux'
import { signOut } from 'app/redux/auth'

const mapStateToProps = ({ auth }) => ({
  user: auth.user
})

export default connect(mapStateToProps, { signOut })(Drawer)
