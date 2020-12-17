import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ConsoleAndGenreContainer extends Component {
  state = {
    console:"",
    genre: ""
  }

  componentDidMount() {

  }

  handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        console: this.state.console,
        genre: this.state.genre
      })
    }

    fetch(`http://localhost:3000/api/v1/games/genreandconsole`, reqObj)
    .then(resp => resp.json())
    .then(console.log)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.console, this.state.genre)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Choose a Console</Form.Label>
            <Form.Control name="console" value={this.state.console} onChange={this.handleChange}  as="select">
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
            <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Choose a Genre</Form.Label>
            <Form.Control name="genre" value={this.state.genre} onChange={this.handleChange} as="select">
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
          <Button type="submit">Browse Games</Button>
        </Form>           
      </div>
    );
  }
}

export default ConsoleAndGenreContainer;
















