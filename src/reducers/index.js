import { combineReducers } from 'redux';
import loading from './loadingReducer';
import user from './userReducer';
import searchResults from './searchReducer';

export default combineReducers({
  loading,
  user,
  searchResults
});