export const fetchError = (state = false, action) => {
  switch (action.type) {
    case 'MOVIE_FETCH_ERROR':
      return action.hasErrored;

    default:
      return state;
  }
}

export const fetchLoading = (state = false, action) => {
  switch (action.type) {
    case 'MOVIE_FETCH_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export const movies = (state = [], action) => {
  switch (action.type) {
    case 'MOVIE_FETCH_SUCCESS':
      return action.data

      default:
        return state;
  }
}
