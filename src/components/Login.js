import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user'
import { Link } from 'react-router-dom'


class Login extends Component {
    state = {
      username: '',
      password: ''
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.fetchUser(this.state)

    // this.props.history.push('/notes')
    this.setState({
      username: '',
      password: ''
    })
  }


  render() {
    return (
    <div>
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h1>Login to GamePad</h1>
        <input placeholder="Username" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        <input placeholder="Password" type="text" name="password" value={this.state.password} onChange={this.handleChange} />

        <button type='submit'>Login</button>
        <Link to={`/signup`}>or Signup</Link>
      </form> 
    </div>    
    );
  }
}


export default connect(null, {fetchUser}) (Login);