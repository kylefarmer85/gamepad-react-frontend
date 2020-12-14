import { combineReducers } from 'redux';
import loading from './loadingReducer';
import user from './userReducer';
import searchResults from './searchReducer';
import games from './gamesReducer'

export default combineReducers({
  loading,
  user,
  searchResults,
  games
});