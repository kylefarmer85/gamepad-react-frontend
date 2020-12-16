import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const FavoriteGame = ({game_api_id, name, image}) => {

  const imgStyle = {
    width: "100%",
    height: "60%"
  }

  const cardStyle = {
    margin: "2%",
    width: '8em', 
    height:'10em', 
    textAlign:"center",
    overflow: "hidden"
  }

  return ( 
  
      <Card as={Link} to={`/games/${game_api_id}`} style={cardStyle}>
        <img style={imgStyle} variant="top" src={image} alt="game" />
        <p>{name}</p>
      </Card>   
 
  
  );
}

export default FavoriteGame;
