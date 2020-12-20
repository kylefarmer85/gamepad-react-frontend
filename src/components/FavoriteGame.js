import React from 'react';
import Card from 'react-bootstrap/Card'
import Mario from '../images/mario-is-missing.jpg'
import { connect } from 'react-redux'
import { removeFromFavorites } from '../actions/games'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const FavoriteGame = ({id, gameUserId, game_api_id, name, image, user, removeFavoriteFromProfile, removeFromFavorites}) => {

  let history = useHistory()

  const removeFavorite = () => {
    removeFromFavorites(id, user, name)
    removeFavoriteFromProfile(id)
  }

  const goToGame = () => {
    history.push(`/games/${game_api_id}`)
  }

return (
  
    <Card style={cardStyle}>

      { image === null ?
        <img onClick={goToGame} style={imgStyle} git variant="top" src={Mario} alt="game" />
      :
        <img onClick={goToGame} style={imgStyle} variant="top" src={image} alt="game" />
      }

      <div onClick={goToGame} style={pStyle}>
        <strong>{name}</strong><br></br>
      </div>

      
      {
        user ?
          gameUserId === user.id ?

            <div style={{position: "absolute", bottom: "0px"}}>
              <Button onClick={removeFavorite} variant="outlin-dark" size="sm" style={{fontSize: "7pt"}}>✘ remove</Button>
            </div>  

          :
            null
        :
          null
      } 
      
      
    </Card>

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
  margin: "8%",
  textAlign: "center",
  color: "black"
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect (mapStateToProps, { removeFromFavorites })(FavoriteGame);
