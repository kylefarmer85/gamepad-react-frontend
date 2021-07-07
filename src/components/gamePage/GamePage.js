import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../reusable/Loading';
import GameShowContainer from './GameShowContainer';
import axios from 'axios';
import API from '../../API';

const GamePage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [gameObj, setGameObj] = useState({});
  const [screenshots, setScreenshots] = useState({});

  let history = useHistory();

  useEffect(() => {
    try {
      const fetchGame = async () => {
        const { data } = await axios.get(
          `${API}/api/v1/games/${match.params.id}`
        );
        setGameObj(data.game_obj);
        setScreenshots(data.game_ss.results);
        setLoading(false);
      };
      fetchGame();
    } catch (error) {
      history.push('/home');
      alert(error);
    }
  }, [match, history]);

  return (
    <div>
      {loading ? (
        <div style={{ marginTop: '7%' }}>
          <Loading />
        </div>
      ) : (
        <GameShowContainer game={gameObj} screenshots={screenshots} />
      )}
    </div>
  );
};

export default GamePage;
