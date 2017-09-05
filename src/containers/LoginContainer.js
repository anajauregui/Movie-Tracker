import { connect } from 'react-redux';
import { loginSubmit } from '../actions/index';

const mapStateToProps = (storeCurrentState) => {
  return {
    userLogin: storeCurrentState.loginSuccess,
    loginError: storeCurrentState.loginError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSubmit: (user) => dispatch(loginSubmit(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)
