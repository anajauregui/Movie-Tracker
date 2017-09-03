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

export const loginSubmit = (user) => {
  return dispatch => {
    fetch('http://localhost:3000/api/users', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then(response => response.json())
          .then(response => dispatch(loginSuccess(user, response.status, response.data.id)))
          .catch(response => dispatch(loginError(true)))
  }
}

export const createNewUser = (newUser, isNewAccount, id, error) => {
  return {
    type: 'CREATE_NEW_USER',
    newUser,
    isNewAccount,
    id,
    error
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

export const addFavorite = (movie) => {
  return {
    type: 'ADD_FAVORITE',
    movie
  }
}

export const createFavorite = (movie) => {
  return dispatch => {
    fetch('http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => dispatch(addFavorite(movie)))
    .catch(error => console.log(error))
  }
}

export const userFavorites = (array) => {
  return {
    type: 'USER_FAVORITES',
    array
  }
}

export const getUserFavorites = (userId) => {
  return dispatch => {
    fetch(`http://localhost:3000/api/users/${userId}/favorites`)
      .then(response => response.json())
      .then(response => dispatch(userFavorites(response.data)))
      .catch(error => console.log(error))
  }
}
