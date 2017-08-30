import { connect } from 'react-redux';
import { validateUser, createNewUser } from '../actions/index';
import Login from '../components/Login/Login';

const mapStateToProps = (store) => {
  return {
    loginBody: store.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSubmit: (user) => dispatch(validateUser(user)),
    createNewUser: (user) => dispatch(createNewUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
