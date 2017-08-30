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

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}

// export const loginError = (email, password) => {
//   return {
//     type: 'LOGIN_ERROR',
//     body: {email, password}
//   }
// }

export const validateUser = (user) => {
  return dispatch => {
    fetch('http://localhost:3000/api/users', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => console.log(response))
  }
}
