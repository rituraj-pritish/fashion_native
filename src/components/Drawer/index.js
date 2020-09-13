import Drawer from './Drawer';
import { connect } from 'react-redux';
import { signOut } from 'src/redux/auth';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapStateToProps, { signOut })(Drawer);
