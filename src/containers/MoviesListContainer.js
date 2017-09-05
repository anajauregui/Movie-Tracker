import { connect } from 'react-redux';
import { fetchMovieData, getUserFavorites } from '../actions/index';

const mapStateToProps = (store) => {
  return {
    data: store.movies,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchMovieData(url))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)
