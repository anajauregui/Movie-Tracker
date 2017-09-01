import { combineReducers } from 'redux'
import { fetchError, movies, login, createUser } from './reducers';

const rootReducer = combineReducers({
  // fetchError,
  movies,
  login,
  createUser
})

export default rootReducer
