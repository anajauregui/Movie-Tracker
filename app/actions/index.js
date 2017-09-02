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

export const loginSuccess = (user, isLoggedIn, id, error) => {
  return {
    type: 'LOGIN_SUCCESS',
    user,
    isLoggedIn,
    id
  }
}

export const loginError = (hasErrored) => {
  return {
    type: 'LOGIN_ERROR',
    hasErrored
  }
}

export const logout = (user, isLoggedIn) => {
  type: 'LOGOUT',
  user,
  isLoggedIn
}


export const createNewUser = (newUser, isNewAccount, id) => {
  return {
    type: 'CREATE_NEW_USER',
    newUser,
    isNewAccount,
    id,
  }
}

export const loginSubmit = (user, status) => {
  return dispatch => {
    fetch('http://localhost:3000/api/users', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then(response => response.json())
          .then(response => dispatch(loginSuccess(user, response.status, response.id)))
          .catch(response => dispatch(loginError(true)))
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
      .then(response => response.json())
      .then(response => dispatch(createNewUser(newUser, response.status, response.id, response.error)))
  }
}

// {error: "Key (email)=(stu) already exists."}

export const createFavorite = (movie) => {
  return dispatch => {
    fetch('http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => console.log(response))
  }
}
