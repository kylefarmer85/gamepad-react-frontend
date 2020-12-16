import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { updateUser } from '../actions/user'

class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      password: "",
      passwordConfirmation: "",
      email: this.props.user.email,
      pic: this.props.user.pic,
      favGenre: this.props.user.fav_genre,
      favGame: this.props.user.fav_game
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    debugger
    e.preventDefault()
    this.props.updateUser(this.state)
  }


  render() {
    return (
      <Container style={{width: "50%"}}>  
        <h1 style={{textAlign: "center"}}>Edit Profile</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
              <Form.Control type="text" size="sm" name="username" value={this.state.username} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
              <Form.Control type="password" size="sm" name="password" value={this.state.password} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="fomrPasswordConfirmation">
            <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" size="sm" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
              <Form.Control type="email" size="sm" name="email" value={this.state.email} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formPic">
            <Form.Label>Profile Pic URL</Form.Label>
              <Form.Control type="text" size="sm" name="pic" value={this.state.pic} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formFavGenre">
            <Form.Label>Favorite Genre</Form.Label>
              <Form.Control as="select" size="sm" name="favGenre" value={this.state.favGenre} onChange={this.handleChange}>
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
            <Form.Label>Favorite Game</Form.Label>
              <Form.Control type="text" size="sm" name="favGame" value={this.state.favGame} onChange={this.handleChange} />
          </Form.Group>
          <Button variant="outline-primary" type="submit">Update</Button>
          <Link to={`/user/${this.props.user.id}/profile`}> or Back to Profile</Link>
        </Form>     
  
      </Container> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect (mapStateToProps, { updateUser }) (EditProfile);
