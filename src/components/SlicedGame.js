import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const SlicedGame = ({name, background_image, released, id}) => {

  const imgStyle = {
    width: "100%",
    height: "55%"
  }

  const cardStyle = {
    margin: "2%",
    width: '8em', 
    height:'11em', 
    textAlign:"center",
    overflow: "hidden"
  }

  return (
    <Card as={Link} to={`/games/${id}`} style={cardStyle}>
      <img style={imgStyle} variant="top" src={background_image} alt="game" />
      <p>{name}<br></br>{released}</p>
    </Card>   
  );
}

export default SlicedGame;
