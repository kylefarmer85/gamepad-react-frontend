import React, { Component } from 'react'
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { currentUser } from './actions/user'
// import Nav from './components/Nav'
import Login from './components/Login'
import Signup from './components/Signup'



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
        {/* <Nav /> */}
          <Switch>
           
            <Route exact path ='/signup' component={Signup} />
            <Route path ='/login' component={Login} />

          </Switch> 
      </div>
    );
  }
}

export default connect(null,{ currentUser })(withRouter(App));