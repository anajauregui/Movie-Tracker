import { connect } from 'react-redux';
import { getUserFavorites, deleteUserFavorite } from '../actions/index';

const mapStateToProps = (storeCurrentState) => {
  return {
    userFavorites: storeCurrentState.userFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserFavorites: (id) => dispatch(getUserFavorites(id)),
    deleteUserFavorite: (userId, movieId) => dispatch(deleteUserFavorite(userId, movieId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)
