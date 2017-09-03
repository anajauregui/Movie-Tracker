// export const fetchError = (state = false, action) => {
//   switch (action.type) {
//     case 'MOVIE_FETCH_ERROR':
//       return action.hasErrored;
//
//     default:
//       return state;
//   }
// }

export const movies = (state = [], action) => {
  switch (action.type) {
    case 'MOVIE_FETCH_SUCCESS':
      return action.data.map(movie => Object.assign({}, movie, {movie_id: movie.id, isFavorite: false}))

    default:
      return state;
  }
}

const userLoginState = {
  userInfo: {email: '',
  password: ''},
  isLoggedIn: false,
  user_id: null,
}

export const loginSuccess = (state = userLoginState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, {userInfo: action.user, isLoggedIn: action.isLoggedIn, user_id: action.id})

    default:
      return state
  }
}

export const loginError = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return action.hasErrored

      default:
        return state
  }
}

export const logout = (state = userLoginState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return Object.assign({}, {userInfo: action.user, isLoggedIn: action.isLoggedIn})

    default:
      return state
  }
}

const newUserInitialState = {
  newUserInfo: {
    email: '',
    password: '',
    name: '',
    user_id: null,
    error: null
  },
  isNewAccount: null
}

export const newUser = ( state = newUserInitialState, action) => {
  switch (action.type) {
    case 'CREATE_NEW_USER':
      return Object.assign({}, {newUserInfo: action.newUser, isNewAccount: action.isNewAccount, user_id: action.id, error: action.error})

      default:
        return state
  }
}

export const userFavorites = (state = [], action) => {
  switch (action.type) {
    case 'USER_FAVORITES':
      return action.array

    case 'ADD_FAVORITE':
      return [...state, Object.assign({}, action.movie, {isFavorite: true})]

    case 'DELETE_FAVORITE':
      return state.filter(movie => movie.movie_id !== action.movieId)

    default:
      return state
  }
}
