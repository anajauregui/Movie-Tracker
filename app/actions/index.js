export const fetchMovieData = (url) => {
  return (dispatch) => {
    dispatch(movieFetchLoading(true));

    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(movieFetchLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(movieFetchSuccess(data)))
      .catch( () => dispatch(movieFetchError(true)))
  }
}

export const movieFetchError = (bool) => {
    return {
        type: 'MOVIE_FETCH_ERROR',
        hasErrored: bool
    };
}

export const movieFetchLoading = (bool) => {
    return {
        type: 'MOVIE_FETCH_LOADING',
        isLoading: bool
    };
}

export const movieFetchSuccess = (movies) => {
    return {
        type: 'MOVIE_FETCH_SUCCESS',
        data: movies
    };
}
