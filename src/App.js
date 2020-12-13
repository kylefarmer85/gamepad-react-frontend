import React, { Component } from 'react'
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { currentUser } from './actions/user'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Search from './components/Search'
import ResultsContainer from './containers/ResultsContainer'



class App extends Component {

  render(){
    return (
      <div className="App">
        <NavBar />
          <Switch>

            <Route exact path ='/signup' component={Signup} />
            <Route exact path ='/login' component={Login} />
            <Route exact path ='/search/:searchTerm' component={ResultsContainer} />
            <Route path ='/' component={Home} />
            

          </Switch> 
      </div>
    );
  }
}

export default connect(null,{ currentUser })(withRouter(App));