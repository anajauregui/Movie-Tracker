import { connect } from 'react-redux';
import { createFavorite } from '../actions/index';

// const mapStateToProps = (store) => {
//   return {
//     // data: store.movies,
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (movie) => dispatch(createFavorite(movie))
  };
}

export default connect(null, mapDispatchToProps)
