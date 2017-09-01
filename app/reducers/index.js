import { combineReducers } from 'redux'
import { fetchError, movies, login, logout, newUser } from './reducers';

const rootReducer = combineReducers({
  // fetchError,
  movies,
  login,
  logout,
  newUser
})

export default rootReducer
