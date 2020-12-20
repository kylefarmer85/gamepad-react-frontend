import { combineReducers } from 'redux';
import loading from './loadingReducer';
import user from './userReducer';
import games from './gamesReducer'
import reviews from './reviewsReducer'
import followers from './followersReducer'
import following from './followingReducer'

export default combineReducers({
  loading,
  user,
  games,
  reviews,
  followers,
  following
});