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
      return action.data

    default:
      return state;
  }
}

const userLoginState = {
  userInfo: {email: '',
  password: ''},
  isLoggedIn: false,
  status: null
}

export const login = (state = userLoginState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, {userInfo: action.user, isLoggedIn: action.isLoggedIn, status: action.status})

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
    name: ''
  },
  isNewAccount: false,
  status: null
}

export const newUser = ( state = newUserInitialState, action) => {
  switch (action.type) {
    case 'CREATE_NEW_USER':
      return Object.assign({}, {newUserInfo: action.newUser, isNewAccount: action.isNewAccount, status: action.status})

      default:
        return state
  }
}
