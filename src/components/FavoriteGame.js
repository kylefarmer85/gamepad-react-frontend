import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Mario from '../images/mario-is-missing.jpg'
import { connect } from 'react-redux'
import { removeFromFavorites } from '../actions/games'
import Button from 'react-bootstrap/Button'

const FavoriteGame = ({id, gameUserId, game_api_id, name, image, user, removeFavoriteFromProfile, removeFromFavorites}) => {

  const removeFavorite = () => {
    console.log(id, user, name);
    removeFromFavorites(id, user, name)
    removeFavoriteFromProfile(id)
  }

return (
  <div>
  <Card as={Link} to={`/games/${game_api_id}`} style={cardStyle}>
    { image === null ?
      <img style={imgStyle} variant="top" src={Mario} alt="game" />
    :
      <img style={imgStyle} variant="top" src={image} alt="game" />
    }
    <div style={pStyle}>
      <strong>{name}</strong><br></br>


    </div>
  </Card>   
  {
      gameUserId === user.id ?
        <Button onClick={removeFavorite}>Remove</Button>
      :
        null
    }
  </div>

);
}

const cardStyle = {
  margin: "1%",
  padding: "1.3%",
  width: '10em', 
  height:'14em', 
  backgroundColor: "#E5E3E3",
  boxShadow: "2px 2px grey",
  overflow: "hidden",
}

const imgStyle = {
  width: "100%",
  height: "50%",
  backgroundColor: "#B7A955",
  outline: "4px grey solid",
}

const pStyle = {
  margin: "auto",
  textAlign: "center",
  color: "black"
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect (mapStateToProps, { removeFromFavorites })(FavoriteGame);
