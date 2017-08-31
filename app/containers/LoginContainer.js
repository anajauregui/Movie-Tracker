import { connect } from 'react-redux';
import { loginSubmit } from '../actions/index';
import Login from '../components/Login/Login';
import App from '../components/App/App';

const mapStateToProps = (storeCurrentState) => {
  return {
    userLogin: storeCurrentState.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSubmit: (user) => dispatch(loginSubmit(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login,App)
