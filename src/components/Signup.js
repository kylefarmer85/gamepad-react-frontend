import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/user'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

class Signup extends Component {
  state = {
    username: '',
    password: '',
    password_confirmation: '',
    email: '',
    fav_genre: "Action",
    fav_console: '',
    fav_game: '',
    photo: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handlePhoto = (e) => {
    this.setState({
      photo: e.target.files[0]
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.signupUser(this.state)

    this.setState({
      username: '',
      password: '',
      password_confirmation: '',
      email: '',
      pic: '',
      fav_genre: '',
      fav_game: '',
      photo: ''
    })
  }


  render() {
    return (
      <Container fluid className="mt-5 mb-4 text-center">  

        <h1>Signup</h1>

        <Form style={{width: "35%", margin: "auto"}} onSubmit={this.handleSubmit}>

          <Form.Group controlId="formUsername">
            <Form.Control type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formPasswordConfirmation">
            <Form.Control type="password" placeholder="Confirm Password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange} />
          </Form.Group>


          <Form.Group controlId="formPhoto">
          <Form.Label>Upload a Profile Image</Form.Label>
            <Form.Control type="file" placeholder="Upload a Profile Photo" name="photo" onChange={this.handlePhoto} />
          </Form.Group>

          <Form.Group controlId="formFavConsole">
            <Form.Label>Favorite Console</Form.Label>
            <Form.Control as="select" name="fav_console" value={this.state.fav_console} onChange={this.handleChange}>
              <option>Atari 2600</option>
              <option>Atari 5200</option>
              <option>Atari 7800</option>
              <option>Nintendo Entertainment System</option>
              <option>Sega Master System</option>
              <option>Sega Genesis</option>
              <option>Neo Geo</option>
              <option>Game Boy</option>
              <option>Game Gear</option>
              <option>Super Nintendo</option>
              <option>Sega CD</option>
              <option>Atari Jaguar</option>
              <option>Panasonic 3DO</option>
              <option>Sega 32X</option>
              <option>Sega Saturn</option>
              <option>PlayStation</option>
              <option>Nintendo 64</option>
              <option>Game Boy Color</option>
              <option>Dreamcast</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formFavGenre">
            <Form.Label>Favorite Genre</Form.Label>
              <Form.Control as="select" name="fav_genre" value={this.state.fav_genre} onChange={this.handleChange}>
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
            <Form.Control type="text" placeholder="Favorite Game" name="fav_game" value={this.state.fav_game} onChange={this.handleChange} />
          </Form.Group>

            <button type="submit" className="btn-nes primary">Signup</button>

            <Link to={`/login`}>
              <button type="button" className="btn-nes secondary">Back to Login</button>
            </Link>

        </Form>     
  
      </Container> 
    );
  }
}

export default connect(null, {signupUser}) (Signup);
