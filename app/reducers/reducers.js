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

const userInitialState = {
  userInfo: {email: '',
  password: ''},
  isLoggedIn: false
}

export const login = (state = userInitialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, {userInfo: action.user, isLoggedIn: action.isLoggedIn})

    default:
      return state
  }
}

export const createUser = (state = {}, action) => {
  switch (action.type) {
    case 'USER_CREATED':
      return Object.assign({}, {user: action.user, isCreated: action.isCreated})

    default:
      return state
  }
}

// export const createNewUser = ( state = initialState, action) => {
//   switch (action.type) {
//     case ''
//   }
// }
