import { connect } from 'react-redux';
import { createFavorite } from '../actions/index';

const mapStateToProps = (storeCurrentState) => {
  return {
    selectedFavorite: storeCurrentState.selectedFavorite,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (movie) => dispatch(createFavorite(movie))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)
