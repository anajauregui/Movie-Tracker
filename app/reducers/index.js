import { combineReducers } from 'redux'
import { fetchError, movies, login } from './reducers';

const rootReducer = combineReducers({
  // fetchError,
  movies,
  login
})

export default rootReducer
