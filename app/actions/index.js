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

export const loginSuccess = (user, isLoggedIn, status) => {
  return {
    type: 'LOGIN_SUCCESS',
    user,
    isLoggedIn,
    status
  }
}

// export const loginError = (email, password) => {
//   return {
//     type: 'LOGIN_ERROR',
//     body: {email, password}
//   }
// }

export const logout = (user, isLoggedIn) => {
  type: 'LOGOUT',
  user,
  isLoggedIn
}


export const createNewUser = (newUser, isNewAccount, status) => {
  return {
    type: 'CREATE_NEW_USER',
    newUser,
    isNewAccount,
    status
  }
}

export const loginSubmit = (user, status) => {
  return dispatch => {
    fetch('http://localhost:3000/api/users', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => dispatch(loginSuccess(user, response.ok, response.status)))
  }
}

export const createdNewUser = (newUser) => {
  return dispatch => {
    fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => dispatch(createNewUser(newUser, response.ok, response.status)))
  }
}
