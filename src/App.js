import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  currentUser,
  logoutUser,
  startAddingUserRequest
} from './actions/user';
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
import API from './API';

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('my_app_token');

    if (!token) {
      return;
    } else {
      this.props.startAddingUserRequest();

      const reqObj = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      fetch(`${API}/api/v1/current_user`, reqObj)
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            localStorage.removeItem('my_app_token');
            this.props.logoutUser();
          } else {
            this.props.currentUser(data);
          }
        });
    }
  }

  render() {
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
  }
}

export default connect(null, {
  currentUser,
  startAddingUserRequest,
  logoutUser
})(withRouter(App));
