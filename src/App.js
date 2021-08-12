import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { authorizeUser } from './actions/user';
import NavBar from './components/navbar/NavBar';
import NavConsoleList from './components/navbar/NavConsoleList';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import HomePage from './components/homePage/HomePage';
import GameSearchResultsPage from './components/GameSearchResultsPage';
import GamePage from './components/gamePage/GamePage';
import ProfilePage from './components/profilePage/ProfilePage';
import EditUserInfo from './components/profilePage/EditUserInfo';
import UserSearchResultsPage from './components/UserSearchResultsPage';
import ReviewsPage from './components/reviewsPage/ReviewsPage';
import ReviewShow from './components/ReviewPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('my_app_token');
    if (!token) {
      window.Intercom('shutdown');
      window.Intercom("boot", {
        app_id: "yqdan9hq"
      });
      return;
    } else {
      dispatch(authorizeUser(token));
    }
  }, [dispatch]);

  return (
    <div className='App'>
      <NavBar />
      <NavConsoleList />
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route
          exact
          path='/games/search/:searchTerm'
          component={GameSearchResultsPage}
        />
        <Route exact path='/games/:id' component={GamePage} />
        <Route exact path='/reviews' component={ReviewsPage} />
        <Route exact path='/reviews/:id' component={ReviewShow} />
        <Route exact path='/users/:id/profile' component={ProfilePage} />
        <Route exact path='/users/:id/edit' component={EditUserInfo} />
        <Route
          exact
          path='/users/search/:searchTerm'
          component={UserSearchResultsPage}
        />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
