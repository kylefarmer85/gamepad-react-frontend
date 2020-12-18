import React, { Component } from 'react';
import SlicedGamesContainer from './SlicedGamesContainer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { randomGenre, randomConsole } from "../helpers/randomFuncs"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Loading from '../components/Loading'


class ConsoleAndGenreContainer extends Component {
  state = {
    console: "",
    genre: "",
    games: [],
    index: 0,
    loading: true
  }

  randomConsole = randomConsole()
  randomGenre = randomGenre()

  componentDidMount(){
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        console: this.randomConsole,
        genre: this.randomGenre
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


  slicedGames = () => {
    if (this.state.index > this.state.games.length) {
      this.setState({
        index: 0
      })
    }
    return this.state.games.slice(this.state.index, this.state.index +4)
  }

  nextGames = () => {
    this.setState(prevState => {
      return {
        index: prevState.index + 4
      }
    })
  }


  render() {
    return (
      <Container fluid className="m-2 mt-4">
        <Row>
          <Col xs lg={3}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Browse By Console and Genre</Form.Label>
                <Form.Control name="console" value={this.state.console} onChange={this.handleChange}  as="select">
                  <option>{this.randomConsole}</option>
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
                  <option>{this.randomGenre}</option>
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
          <Col xs lg={9}>
            <Row style={{justifyContent: "center"}}>
              { 
              this.state.loading ?
                <Loading />
              :
              <>
              <Button variant="dark" className="mr-2" onClick={this.nextGames}>Next</Button>
              <SlicedGamesContainer slicedGames={this.slicedGames()} />
              </> 
              }     
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ConsoleAndGenreContainer;
















