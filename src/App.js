import React, { Component } from 'react'
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { currentUser, startAddingUserRequest } from './actions/user'
import NavBar from './components/NavBar'
import NavConsoleList from './components/NavConsoleList'
import Login from './components/Login'
import Signup from './components/Signup'
import HomeContainer from './containers/HomeContainer'
import ResultsContainer from './containers/ResultsContainer'
import GameContainer from './containers/GameContainer'
import ProfileContainer from './containers/ProfileContainer'
import EditUserInfo from './components/EditUserInfo'
import UserSearchResult from './components/UserSearchResult'
import ReviewsPageContainer from './containers/ReviewsPageContainer'
import ReviewShow from './components/ReviewShow'


class App extends Component {

  componentDidMount(){
    const token = localStorage.getItem('my_app_token')

    if (!token) {
      return
    } else {
      
      this.props.startAddingUserRequest()

      const reqObj = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      fetch('http://localhost:3000/api/v1/current_user', reqObj)
      .then(resp => resp.json())
      .then(data => {
  
        if (data.error) {
          localStorage.removeItem("my_app_token")
        } else { 
          this.props.currentUser(data)
        }
      })
    }
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <NavConsoleList />
          <Switch>
          
            <Route exact path ='/signup' component={Signup} />
            <Route exact path ='/login' component={Login} /> 
            <Route exact path ='/games/search/:searchTerm' component={ResultsContainer} />
            <Route exact path ='/games/:id' component={GameContainer} />
            <Route exact path ='/reviews' component={ReviewsPageContainer} />
            <Route exact path ='/reviews/:id' component={ReviewShow} />
            <Route exact path ='/users/:id/profile' component={ProfileContainer} />
            <Route exact path ='/users/:id/edit' component={EditUserInfo} />
            <Route exact path ='/users/search/:searchTerm' component={UserSearchResult} />
            <Route path ='/' component={HomeContainer} />
            
          </Switch> 
      </div>
    );
  }
}

export default connect(null,{ currentUser, startAddingUserRequest })(withRouter(App));