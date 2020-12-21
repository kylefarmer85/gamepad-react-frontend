import React, { Component } from 'react'
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { currentUser } from './actions/user'
import NavBar from './components/NavBar'
import NavConsoleList from './components/NavConsoleList'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import ResultsContainer from './containers/ResultsContainer'
import GameContainer from './containers/GameContainer'
import ProfileContainer from './containers/ProfileContainer'
import EditUserInfo from './components/EditUserInfo'
import UserSearchResult from './components/UserSearchResult'


class App extends Component {

  componentDidMount(){
    const token = localStorage.getItem('my_app_token')

    if (!token) {
      return
    } else {
      
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
            <Route exact path ='/users/:id/profile' component={ProfileContainer} />
            <Route exact path ='/users/:id/edit' component={EditUserInfo} />
            <Route exact path ='/users/search/:searchTerm' component={UserSearchResult} />
            <Route path ='/' component={Home} />
            
          </Switch> 
      </div>
    );
  }
}

export default connect(null,{ currentUser })(withRouter(App));