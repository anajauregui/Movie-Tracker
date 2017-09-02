import { connect } from 'react-redux';
// import {  } from '../actions/index';

// const mapStateToProps = (storeCurrentState) => {
//   return {
//     selectedFavorite: storeCurrentState.selectedFavorite
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getUserFavorites: (id) => dispatch(getUserFavorites(id))
  };
}

export default connect(null, mapDispatchToProps)
