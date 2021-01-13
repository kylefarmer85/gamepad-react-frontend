import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from 'react-bootstrap/Container';
import { addToFavorites } from '../actions/games';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReviewsContainer from '../containers/ReviewsContainer';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import crtTv from '../assets/images/crt-tv.png';

toast.configure();

const GameShow = ({ game, screenshots, addToFavorites, user, games }) => {
  const alreadyFavorite = games.find((g) => g.game_api_id === game.id);

  const handleFavorite = () => {
    addToFavorites(game.id, game.name, game.background_image, user);
  };

  const acceptedPlatformNamesArray = [
    'Sega Genesis',
    'Super Nintendo',
    'Dreamcast',
    'PlayStation',
    'Nintendo 64',
    'SNES',
    'Genesis',
    'Jaguar',
    'Game Boy',
    'Game Gear',
    'SEGA CD',
    'SEGA Master System',
    'NES',
    'Atari 7800',
    'Game Boy Color',
    'Atari 2600',
    'Atari 5200',
    'Neo Geo',
    '3DO',
    'SEGA Saturn',
  ];

  const renderGamePlatforms = game.platforms.map((p) => {
    return acceptedPlatformNamesArray.includes(p.platform.name) ? (
      <h6 key={uuidv4()}>{`${p.platform.name}`}</h6>
    ) : null;
  });

  return (
    <Container className='mt-4 mb-4'>
      <div style={{ textAlign: 'center' }}>
        <img
          style={{ height: '50%', width: '50%', marginBottom: '15px' }}
          className='fade-in'
          src={game.background_image}
          alt='game'
        />

        <h1>{game.name}</h1>

        <h6>Released: {game.released}</h6>
        <br />

        <h5 style={{ textDecoration: 'underline' }}>Platform</h5>

        <div className='slide-from-bottom'>{renderGamePlatforms}</div>

        {user ? (
          alreadyFavorite ? (
            <button className='btn-nes secondary mt-4'>
              {game.name} is in {user.username}'s Favorites
            </button>
          ) : (
            <button
              type='button'
              className='btn-nes primary mt-4'
              onClick={handleFavorite}
            >
              Add to Favorites
            </button>
          )
        ) : (
          <Link to={'/login'}>
            <button type='button' className='btn-nes primary mt-4'>
              Login to add game to Favorites!
            </button>
          </Link>
        )}
      </div>

      <div className='m-4' style={{ textAlign: 'center' }}>
        {game.clip ? (
          <CrtTvDiv className='align-items-center'>
            <GameClip src={game.clip.clip} type='video/mp4' controls />
          </CrtTvDiv>
        ) : null}

        <GameDesc>{game.description_raw}</GameDesc>

        {screenshots
          ? screenshots.map((ss) => (
              <SsImg src={ss.image} alt='screenshot' key={uuidv4()}></SsImg>
            ))
          : null}

        <ReviewsContainer
          gameApiId={game.id}
          gameName={game.name}
          gameImage={game.background_image}
        />
      </div>
    </Container>
  );
};

const GameDesc = styled.p`
  text-align: left;
  margin-top: 20px;
  padding: 15px;
  border: 4px solid white;
  font-size: 10pt;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  @media (max-width: 600px) {
    font-size: 8pt;
  }
`;

const SsImg = styled.img`
  width: 400px;
  height: 350px;
  margin: 20px;
  border-radius: 50% / 20%;
  border: 3px solid white;

  @media (max-width: 600px) {
    width: 75%;
    height: 60%;
  }
`;

const CrtTvDiv = styled.div`
  margin: auto;
  background-image: url(${crtTv});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 600px;
  height: 400px;

  @media (max-width: 775px) {
    width: 300px;
    height: 200px;
  }

  @media (max-width: 400px) {
    width: 200px;
    height: 140px;
  }
`;

const GameClip = styled.video`
  width: 430px;
  height: 340px;
  position: relative;
  top: 26px;
  right: 57px;

  @media (max-width: 775px) {
    width: 215px;
    height: 170px;
    top: 13px;
    right: 28.5px;
  }

  @media (max-width: 400px) {
    width: 150.5px;
    height: 119px;
    top: 9.1px;
    right: 20px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.user,
    games: state.games,
  };
};

export default connect(mapStateToProps, { addToFavorites })(GameShow);
