import { combineReducers } from 'redux'
import { fetchError, movies, login, logout, newUser, loginError } from './reducers';

const rootReducer = combineReducers({
  // fetchError,
  movies,
  login,
  loginError,
  logout,
  newUser
})

export default rootReducer
