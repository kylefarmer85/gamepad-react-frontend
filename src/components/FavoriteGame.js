import React from 'react';
import Card from 'react-bootstrap/Card'

const FavoriteGame = ({name, image}) => {

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
    <Card style={cardStyle}>
      <Card.Img style={imgStyle} variant="top" src={image} />
      <Card.Text>{name}</Card.Text>
    </Card>      
  );
}

export default FavoriteGame;
