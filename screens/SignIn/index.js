import SignIn from './SignIn'
import { connect } from 'react-redux'

import { signIn } from 'app/redux/auth'

export default connect(null, { signIn })(SignIn)
