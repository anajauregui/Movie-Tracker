import { connect } from 'react-redux';
import { createNewUser } from '../actions/index';
import CreateAccount from '../components/CreateAccount/CreateAccount';

const mapStateToProps = (store) => {
  return {
    newUser: store.createUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (user) => dispatch(createNewUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
