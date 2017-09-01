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
  isLoggedIn: false
}

export const login = (state = userLoginState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, {userInfo: action.user, isLoggedIn: action.isLoggedIn})

    default:
      return state
  }
}

const userCreateState = {
  userInfo: {email: '',
  password: ''},
  isCreated: false
}

export const createUser = (state = userCreateState, action) => {
  switch (action.type) {
    case 'USER_CREATED':
      return Object.assign({}, {userInfo: action.user, isCreated: action.isCreated})

    default:
      return state
  }
}

// export const createNewUser = ( state = initialState, action) => {
//   switch (action.type) {
//     case ''
//   }
// }
