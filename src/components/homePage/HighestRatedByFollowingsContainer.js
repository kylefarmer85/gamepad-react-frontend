import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SlicedGamesContainer from './SlicedGamesContainer';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import API from '../../API';
import axios from 'axios';

const HighestRatedByFollowingsContainer = () => {
  const [games, setGames] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const id = useSelector(state => state.user.id);

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.post(
        `${API}/api/v1/games/highestratedbyfollowings`,
        {
          id
        }
      );
      setGames(data);
      setLoading(false);
    };

    fetchGames();
  }, [id]);

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
          <label>Highest Rated Games by Users You Follow</label>
          <br />
          <br />
          <button
            type='button'
            className='btn-nes secondary'
            onClick={nextGames}
          >
            Next Games {'>'}
          </button>
        </Col>
        <Col lg={9}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className='d-flex flex-wrap justify-content-around slide-in'>
              {games.length ? (
                <SlicedGamesContainer slicedGames={slicedGames()} />
              ) : (
                <p>Follow users to see their highest rated games.</p>
              )}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HighestRatedByFollowingsContainer;
