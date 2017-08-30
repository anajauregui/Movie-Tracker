import { combineReducers } from 'redux'
import { fetchError, movies } from './reducers';

const rootReducer = combineReducers({
  // fetchError,
  movies
})

export default rootReducer
