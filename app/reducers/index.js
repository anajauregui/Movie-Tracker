import { combineReducers } from 'redux'
import { fetchLoading, fetchError, movies } from './reducers';


const rootReducer = combineReducers({
  fetchLoading,
  fetchError,
  movies
})

export default rootReducer
