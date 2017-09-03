import { combineReducers } from 'redux'
import { fetchError, movies, loginSuccess, logout, newUser, loginError, userFavorites } from './reducers';

const rootReducer = combineReducers({
  // fetchError,
  movies,
  loginSuccess,
  loginError,
  logout,
  newUser,
  userFavorites
})

export default rootReducer
