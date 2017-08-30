// export const movieFetchError = (bool) => {
//     return {
//         type: 'MOVIE_FETCH_ERROR',
//         hasErrored: bool
//     };
// }

export const movieFetchSuccess = (movies) => {
    return {
        type: 'MOVIE_FETCH_SUCCESS',
        data: movies
    };
}

export const fetchMovieData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch(movieFetchSuccess(data.results)))
      // .catch( () => dispatch(movieFetchError(true)))
  }
}
