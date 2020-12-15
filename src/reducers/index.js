import { combineReducers } from 'redux';
import loading from './loadingReducer';
import user from './userReducer';
import searchResults from './searchReducer';
import games from './gamesReducer'
import reviews from './reviewsReducer'

export default combineReducers({
  loading,
  user,
  games,
  searchResults,
  reviews
});