import { connect } from 'react-redux';
import { logout} from '../actions/index';
import Controls from '../components/Controls/Controls';

const mapStateToProps = (storeCurrentState) => {
  return {
    userLogout: storeCurrentState.logout
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: (user, isLoggedIn) => dispatch(logout(user, isLoggedIn)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
