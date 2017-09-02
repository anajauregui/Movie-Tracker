import { combineReducers } from 'redux'
import { fetchError, movies, loginSuccess, logout, newUser, loginError, selectedFavorite } from './reducers';

const rootReducer = combineReducers({
  // fetchError,
  movies,
  loginSuccess,
  loginError,
  logout,
  newUser,
  selectedFavorite
})

export default rootReducer
