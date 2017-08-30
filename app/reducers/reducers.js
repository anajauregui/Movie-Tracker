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

const initialState = {
  email: '',
  password: ''
}

export const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {email: action.email, password: action.password}

    default:
      return state
  }
}

// export const createNewUser = ( state = initialState, action) => {
//   switch (action.type) {
//     case ''
//   }
// }
