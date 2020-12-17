import React, { Component } from 'react';
import SearchResult from '../components/SearchResult'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { randomYear, randomGenre } from "../helpers/randomFuncs" 

class YearAndGenreContainer extends Component {
  state = {
    year: "",
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
        year: randomYear(),
        genre: randomGenre()
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
        console.log(data.results)
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.year, this.state.genre)
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
            <Form.Label>Browse By Year and Genre</Form.Label>
            <Form.Control name="year" value={this.state.year} onChange={this.handleChange} as="select">
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

export default YearAndGenreContainer;
