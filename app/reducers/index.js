import { combineReducers } from 'redux'
import { fetchError, movies, loginSuccess, logout, newUser, loginError, selectedFavorite, userFavorites } from './reducers';

const rootReducer = combineReducers({
  // fetchError,
  movies,
  loginSuccess,
  loginError,
  logout,
  newUser,
  selectedFavorite,
  userFavorites
})

export default rootReducer
