import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Mario from '../images/mario-is-missing.jpg'

const SlicedGame = ({name, background_image, released, id}) => {

  const cardStyle = {
    margin: "1%",
    padding: "1%",
    width: '10em', 
    height:'14em', 
    backgroundColor: "#c2c5cc",
    boxShadow: "2px 2px #343A40",
    overflow: "hidden",
  }

  const imgStyle = {
    width: "100%",
    height: "50%",
  }

  const pStyle = {
    marginTop: "5%",
    textAlign: "center",
  }

  return (
    <Card as={Link} to={`/games/${id}`} style={cardStyle}>

      { background_image === null ?
        <img style={imgStyle} variant="top" src={Mario} alt="game" />
      :
        <img style={imgStyle} variant="top" src={background_image} alt="game" />
      }
      <div style={pStyle}>
        <p><strong>{name}</strong><br></br>{released.slice(0,4)}</p>
      </div>
    </Card>   

  );
}

export default SlicedGame;
