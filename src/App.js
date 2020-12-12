import React, { Component } from 'react'
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { currentUser } from './actions/user'
import Nav from './components/Nav'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'



class App extends Component {

 

  render(){
    return (
      <div className="App">
        <Nav />
          <Switch>

            <Route exact path ='/signup' component={Signup} />
            <Route path ='/' component={Login} />

          </Switch> 
      </div>
    );
  }
}

export default connect(null,{ currentUser })(withRouter(App));