import React, { Component } from 'react';
import SlicedGamesContainer from './SlicedGamesContainer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { randomConsole } from "../helpers/randomFuncs"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class TopByConsoleContainer extends Component {
  state = {
    console: randomConsole(),
    games: [],
    index: 0,
    loading: true
  }

  componentDidMount(){
    this.fetchGames()
  }

  fetchGames = () => {
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

    fetch(`http://localhost:3000/api/v1/games/topbyconsole`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        this.setState({
          games: data.results,
          loading: false
        })
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.fetchGames()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
      <Container fluid className="m-2">
        <Row>
          <Col xs lg={3}>
            <Form className="mt-4" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formConsole">
                <Form.Label>Top Games by Console</Form.Label>
                <Form.Control name="console" value={this.state.console} onChange={this.handleChange}  as="select">
                  {/* <option>{this.randomConsole}</option> */}
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
              <Button type="submit">Browse Games</Button>
            </Form> 
          </Col >
          <Col xs lg={9}>
            
            { 
            this.state.loading ?
              null
            :
            <Row className="mr-1" style={{justifyContent: "center"}}>
              <SlicedGamesContainer slicedGames={this.slicedGames()} />

              <Button style={{fontSize: "30px", marginLeft: "1%"}} variant="dark" onClick={this.nextGames}>→</Button>
            </Row>
            }     
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TopByConsoleContainer;