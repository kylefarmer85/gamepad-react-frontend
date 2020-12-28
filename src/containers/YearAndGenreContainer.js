import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SlicedGamesContainer from './SlicedGamesContainer'
import { randomYear, randomGenre } from "../helpers/randomFuncs" 
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Loading from '../components/Loading'

class YearAndGenreContainer extends Component {
  state = {
    year: randomYear(),
    genre: randomGenre(),
    games: [],
    index: 0,
    loading: true,
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
        year: this.state.year,
        genre: this.state.genre
      })
    }

    fetch(`http://localhost:3000/api/v1/games/yearandgenre`, reqObj)
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
      <Container fluid className="mt-3">
        <Row className="align-items-center">
          <Col lg={3}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formYear">
                <Form.Label>Browse Games By Year and Genre</Form.Label>
                <Form.Control name="year" value={this.state.year} onChange={this.handleChange} as="select">
                  {/* <option>{this.randomYear}</option> */}
                  <option>1977</option>
                  <option>1978</option>
                  <option>1979</option>
                  <option>1980</option>
                  <option>1981</option>
                  <option>1982</option>
                  <option>1983</option>
                  <option>1984</option>
                  <option>1985</option>
                  <option>1986</option>
                  <option>1987</option>
                  <option>1988</option>
                  <option>1989</option>
                  <option>1990</option>
                  <option>1991</option>
                  <option>1992</option>
                  <option>1993</option>
                  <option>1994</option>
                  <option>1995</option>
                  <option>1996</option>
                  <option>1997</option>
                  <option>1998</option>
                  <option>1999</option>
                  <option>2000</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                </Form.Control>
              </Form.Group> 
              <Form.Group controlId="formGenre">
                <Form.Control name="genre" value={this.state.genre} onChange={this.handleChange} as="select">
                  {/* <option>{this.randomGenre}</option> */}
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
          <Col lg={9}>
                 
          { 
          this.state.loading ?
            <Loading />
          :
          <Row className="align-items-center" style={{justifyContent: "center"}}>   
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

export default YearAndGenreContainer;
