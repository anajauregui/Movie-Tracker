import { connect } from 'react-redux';
import { validateUser } from '../actions/index';
import Login from '../components/Login/Login';

const mapStateToProps = (store) => {
  return {
    loginBody: store.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSubmit: (user) => dispatch(validateUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
