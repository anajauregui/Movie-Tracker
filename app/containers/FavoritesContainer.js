import { connect } from 'react-redux';
import { getUserFavorites } from '../actions/index';

const mapStateToProps = (storeCurrentState) => {
  return {
    userFavorites: storeCurrentState.userFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserFavorites: (id) => dispatch(getUserFavorites(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)
