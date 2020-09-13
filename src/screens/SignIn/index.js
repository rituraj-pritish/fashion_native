import SignIn from './SignIn';
import { connect } from 'react-redux';

import { signIn } from 'src/redux/auth';

export default connect(null, { signIn })(SignIn);
