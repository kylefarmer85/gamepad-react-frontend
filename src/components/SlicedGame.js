import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const SlicedGame = ({name, background_image, released, id}) => {

  const cardStyle = {
    margin: "1%",
    width: '10em', 
    height:'15em', 
    overflow: "hidden",
  }

  const imgStyle = {
    width: "100%",
    height: "50%",
  }

  const pStyle = {
    margin: "auto",
    textAlign: "center",
  }

  return (
    <Card as={Link} to={`/games/${id}`} style={cardStyle}>
      <img style={imgStyle} variant="top" src={background_image} alt="game" />
      <div style={pStyle}>
        <p>{name}<br></br>{released}</p>
      </div>
    </Card>   

  );
}

export default SlicedGame;
