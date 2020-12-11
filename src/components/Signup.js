import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/user'
import { Link } from 'react-router-dom'

class Signup extends Component {
  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    email: '',
    pic: '',
    favGenre: '',
    favGame: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.signupUser(this.state)

    // this.props.history.push('/notes')
    this.setState({
      username: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      pic: '',
      favGenre: '',
      favGame: ''
    })
  }


  render() {
    return (
      <div>
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h1>Signup for GamePad</h1>

        <input placeholder="Username" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        <input placeholder="Password" type="text" name="password" value={this.state.password} onChange={this.handleChange} />
        <input placeholder="Password Confirmation" type="text" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} />
        <input placeholder="Email" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        <input placeholder="Profile Pic Url" type="text" name="pic" value={this.state.pic} onChange={this.handleChange} />
        <input placeholder="Favorite Genre" type="text" name="favGenre" value={this.state.favGenre} onChange={this.handleChange} />
        <input placeholder="Favorite Game" type="text" name="favGame" value={this.state.favGame} onChange={this.handleChange} />

        <button type='submit'>Signup</button>
        <Link to={`/login`}>or Login</Link>
      </form> 
    </div>    
    );
  }
}

export default connect(null, {signupUser}) (Signup);
