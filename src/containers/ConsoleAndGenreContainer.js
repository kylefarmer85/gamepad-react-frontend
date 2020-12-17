import React, { Component } from 'react';
import HomeGamesContainer from './HomeGamesContainer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { randomGenre, randomConsole } from "../helpers/randomFuncs"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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


  render() {
    return (
      <Container fluid className="m-4">
        <Row>
          <Col xs lg={2}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Browse By Console and Genre</Form.Label>
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
          </Col >
          <Col xs lg={10}>
            <Row style={{justifyContent: "center"}}>
              { 
              this.state.loading ?
                null
              :
                <HomeGamesContainer games={this.state.games} />
              }     
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ConsoleAndGenreContainer;
















