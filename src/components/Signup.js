import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/user'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.signupUser(this.state)

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
      <Container style={{width: "50%", marginTop: "5%"}}>  
        <h1 style={{textAlign: "center"}}>Signup</h1>
        <Form onSubmit={this.handleSubmit}>

          <Form.Group controlId="formUsername">
            <Form.Control type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="fomrPasswordConfirmation">
            <Form.Control type="password" placeholder="Confirm Password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formPic">
            <Form.Control type="text" placeholder="Profile Pic URL" name="pic" value={this.state.pic} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formFavGenre">
            <Form.Label>Favorite Genre</Form.Label>
              <Form.Control as="select" name="favGenre" value={this.state.favGenre} onChange={this.handleChange}>
              <option>Action</option>
              <option>Adventure</option>
              <option>Platformer</option>
              <option>Arcade</option>
              <option>RPG</option>
              <option>Fighting</option>
              <option>Sports</option>
              <option>Racing</option>
              <option>Puzzle</option>
              <option>Strategy</option>
              <option>Family</option>
              </Form.Control>
          </Form.Group>
          <Form.Group controlId="formFavGame">
            <Form.Control type="text" placeholder="Favorite Game" name="favGame" value={this.state.favGame} onChange={this.handleChange} />
          </Form.Group>
          <Button variant="outline-primary" type="submit">Signup</Button>
          <Link to={`/login`}> or Login</Link>
        </Form>     
  
      </Container> 
    );
  }
}

export default connect(null, {signupUser}) (Signup);
