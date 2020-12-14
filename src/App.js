import React, { Component } from 'react'
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { currentUser } from './actions/user'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import ResultsContainer from './containers/ResultsContainer'
import GameContainer from './containers/GameContainer'



class App extends Component {

  // componentDidMount(){
  //   const token = localStorage.getItem('my_app_token')

  //   if (!token) {
  //     this.props.history.push('/login')
  //   } else {

  //     const reqObj = {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     }

  //     fetch('http://localhost:3000/api/v1/current_user', reqObj)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       this.props.currentUser(data)
  //     })
  //   }
  // }

  render(){
    return (
      <div className="App">
        <NavBar />
          <Switch>
          
            <Route exact path ='/signup' component={Signup} />
            <Route exact path ='/login' component={Login} /> 
            <Route exact path ='/games/search/:searchTerm' component={ResultsContainer} />
            <Route exact path ='/games/:id' component={GameContainer} />
            <Route path ='/' component={Home} />
            
          </Switch> 
      </div>
    );
  }
}

export default connect(null,{ currentUser })(withRouter(App));