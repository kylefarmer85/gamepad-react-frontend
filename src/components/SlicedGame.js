import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Mario from '../assets/images/mario-is-missing.jpg'

const SlicedGame = ({name, background_image, released, id}) => {

  const cardStyle = {
    margin: "1%",
    padding: "1.3%",
    width: '10em', 
    height:'14em', 
    backgroundColor: "#E5E3E3",
    boxShadow: "4px 4px grey",
    overflow: "hidden",
  }

  const imgStyle = {
    width: "100%",
    height: "50%",
    backgroundColor: "#B7A955",
    outline: "4px grey solid",
  }

  const pStyle = {
    marginTop: "5%",
    textAlign: "center"
  }

  return (
    <Card as={Link} to={`/games/${id}`} style={cardStyle}>

      { background_image === null ?
        <img style={imgStyle} variant="top" src={Mario} alt="game" />
      :
        <img style={imgStyle} variant="top" src={background_image} alt="game" />
      }
      <div style={pStyle}>
        <p style={{color: "black"}}>{name}<br></br>
      {
        released ?
        <span style={{color: "#A5356D"}}>{released.slice(0,4)}</span>
      :
        null
      }
      </p>
      </div>
    </Card>   

  );
}

export default SlicedGame;
