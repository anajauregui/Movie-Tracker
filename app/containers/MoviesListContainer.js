import { connect } from 'react-redux';
import { fetchMovieData } from '../actions/index';
import MoviesList from '../components/MoviesList/MoviesList';

const mapStateToProps = (store) => {
  return {
    data: store.movies,
    // hasErrored: store.fetchError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchMovieData(url))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
