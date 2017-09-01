import { connect } from 'react-redux';
import { createdNewUser } from '../actions/index';
import CreateAccount from '../components/CreateAccount/CreateAccount';

const mapStateToProps = (storeCurrentState) => {
  return {
    newUser: storeCurrentState.newUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (user) => dispatch(createdNewUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
