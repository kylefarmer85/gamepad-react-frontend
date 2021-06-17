import React, { useState, useEffect } from 'react';
import SlicedGamesContainer from './SlicedGamesContainer';
import Form from 'react-bootstrap/Form';
import { randomYear, randomGenre } from '../../helpers/randomFuncs';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import API from '../../API';
import axios from 'axios';

const YearAndGenreContainer = () => {
  const [year, setYear] = useState(randomYear());
  const [genre, setGenre] = useState(randomGenre());
  const [games, setGames] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.post(`${API}/api/v1/games/yearandgenre`, {
        year,
        genre
      });
      setGames(data.results);
      setLoading(false);
    };

    fetchGames();
  }, [year, genre]);

  const slicedGames = () => {
    return index > games.length ? setIndex(0) : games.slice(index, index + 4);
  };

  const nextGames = () => {
    setIndex(prevIndex => prevIndex + 4);
  };

  return (
    <Container fluid className='mt-4 text-center'>
      <Row className='align-items-center'>
        <Col lg={3}>
          <Form>
            <Form.Group controlId='formyear'>
              <Form.Label>Browse by year and Genre</Form.Label>
              <Form.Control
                style={{ textAlignLast: 'center' }}
                name='year'
                value={year}
                onChange={e => setYear(e.target.value)}
                as='select'
              >
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
            <Form.Group controlId='formGenre'>
              <Form.Control
                style={{ textAlignLast: 'center' }}
                name='genre'
                value={genre}
                onChange={e => setGenre(e.target.value)}
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
            <button
              type='button'
              className='btn-nes secondary'
              onClick={nextGames}
            >
              Next Games {'>'}
            </button>
          </Form>
        </Col>
        <Col lg={9}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className='d-flex flex-wrap justify-content-around slide-in'>
              <SlicedGamesContainer slicedGames={slicedGames()} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default YearAndGenreContainer;
