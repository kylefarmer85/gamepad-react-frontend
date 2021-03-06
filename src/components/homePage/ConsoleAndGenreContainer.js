import React, { Component } from 'react';
import SlicedGamesContainer from './SlicedGamesContainer';
import Form from 'react-bootstrap/Form';
import { randomGenre, randomConsole } from '../../helpers/randomFuncs';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Loading from '../reusable/Loading';
import API from '../../API';

class ConsoleAndGenreContainer extends Component {
  state = {
    console: randomConsole(),
    genre: randomGenre(),
    games: [],
    index: 0,
    loading: true
  };

  componentDidMount() {
    this.fetchGames();
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
    };

    fetch(`${API}/api/v1/games/consoleandgenre`, reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.setState({
            games: data.results,
            loading: false
          });
        }
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchGames();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  slicedGames = () => {
    if (this.state.index > this.state.games.length) {
      this.setState({
        index: 0
      });
    }
    return this.state.games.slice(this.state.index, this.state.index + 4);
  };

  nextGames = () => {
    this.setState(prevState => {
      return {
        index: prevState.index + 4
      };
    });
  };

  render() {
    return (
      <Container fluid className='mt-4 text-center'>
        <Row className='align-items-center'>
          <Col lg={3}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId='formConsole'>
                <Form.Label>Browse by Console and Genre</Form.Label>
                <Form.Control
                  style={{ textAlignLast: 'center' }}
                  name='console'
                  value={this.state.console}
                  onChange={this.handleChange}
                  as='select'
                >
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
              <Form.Group controlId='formGenre'>
                <Form.Control
                  style={{ textAlignLast: 'center' }}
                  name='genre'
                  value={this.state.genre}
                  onChange={this.handleChange}
                  as='select'
                >
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
              <button type='submit' className='btn-nes primary'>
                Browse Games
              </button>

              <button
                type='button'
                className='btn-nes secondary'
                onClick={this.nextGames}
              >
                more{'>'}
              </button>
            </Form>
          </Col>
          <Col lg={9}>
            {this.state.loading ? (
              <Loading />
            ) : (
              <div className='d-flex flex-wrap justify-content-around slide-in'>
                <SlicedGamesContainer slicedGames={this.slicedGames()} />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ConsoleAndGenreContainer;
