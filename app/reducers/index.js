import { combineReducers } from 'redux'
import { fetchError, movies, login, newUser } from './reducers';

const rootReducer = combineReducers({
  // fetchError,
  movies,
  login,
  newUser
})

export default rootReducer
