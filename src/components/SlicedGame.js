import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Mario from '../assets/images/mario-is-missing.jpg';

const SlicedGame = ({ name, background_image, released, id }) => {
  
  const imgStyle = {
    width: '100%',
    height: '50%',
    backgroundColor: '#B7A955',
    outline: '4px grey solid',
  };

  const textStyle = {
    marginTop: '7%',
    textAlign: 'center',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
  };

  return (
    <Card
      as={Link}
      to={`/games/${id}`}
      className='card m-2 fade-in'
      style={{ textDecoration: 'none' }}
    >
      {background_image === null ? (
        <img style={imgStyle} variant='top' src={Mario} alt='game' />
      ) : (
        <img style={imgStyle} variant='top' src={background_image} alt='game' />
      )}
      <div style={textStyle}>
        <p style={{ color: 'black' }}>
          {name}
          <br/>
          {released ? (
            <span style={{ color: '#A5356D' }}>{released.slice(0, 4)}</span>
          ) : null}
        </p>
      </div>
    </Card>
  );
};

export default SlicedGame;
