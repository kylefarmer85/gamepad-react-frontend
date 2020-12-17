import React, { Component } from 'react';
import SearchResult from '../components/SearchResult'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { randomGenre, randomConsole } from "../helpers/randomFuncs"

class ConsoleAndGenreContainer extends Component {
  state = {
    console: "",
    genre: "",
    games: [],
    loading: true
  }

  componentDidMount(){
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        console: randomConsole(),
        genre: randomGenre()
      })
    }

    fetch(`http://localhost:3000/api/v1/games/consoleandgenre`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        this.setState({
          games: data.results,
          loading: false
        })
        console.log(data.results)
      }
    })
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

    fetch(`http://localhost:3000/api/v1/games/consoleandgenre`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        this.setState({
          games: data.results,
          loading: false
        })
        console.log(data.results)
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.console, this.state.genre)
  }

  renderGames = () => {
    if (this.state.games === null) {
      return alert ("Please try another search.")
    }

    return this.state.games.map(game => {
      return <SearchResult {...game} key={game.id}/>
    })
  }

  render() {
    return (
      <div>
        <Form className="m-5" onSubmit={this.handleSubmit}>
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
        {
        this.state.loading ?
          null
        :
        <Container>
          <Row>
           { this.renderGames()}
          </Row>
        </Container>
        }        
      </div>
    );
  }
}

export default ConsoleAndGenreContainer;
















