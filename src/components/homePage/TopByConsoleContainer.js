import React, { useState, useEffect } from 'react';
import SlicedGamesContainer from './SlicedGamesContainer';
import Form from 'react-bootstrap/Form';
import { randomConsole } from '../../helpers/randomFuncs';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import API from '../../API';
import axios from 'axios';

const TopByConsoleContainer = () => {
  const [console, setConsole] = useState(randomConsole());
  const [games, setGames] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.post(`${API}/api/v1/games/topbyconsole`, {
        console
      });
      setGames(data.results);
      setLoading(false);
    };

    fetchGames();
  }, [console]);

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
            <Form.Group controlId='formConsole'>
              <Form.Label>Top Games by Console</Form.Label>
              <Form.Control
                style={{ textAlignLast: 'center' }}
                name='console'
                value={console}
                onChange={e => setConsole(e.target.value)}
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

export default TopByConsoleContainer;
