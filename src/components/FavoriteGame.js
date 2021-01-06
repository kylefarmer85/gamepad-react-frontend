import React from 'react';
import Card from 'react-bootstrap/Card'
import Mario from '../assets/images/mario-is-missing.jpg'
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

  const imgStyle = {
    width: "100%",
    height: "50%",
    backgroundColor: "#B7A955",
    outline: "4px grey solid",
  }
  
  const pStyle = {
    marginTop: "8%",
    textAlign: "center",
  }
  

return (

    <Card className="card m-2 fade-in">

      { image === null ?
        <img onClick={goToGame} style={imgStyle} git variant="top" src={Mario} alt="game" />
      :
        <img onClick={goToGame} style={imgStyle} variant="top" src={image} alt="game" />
      }

      <div onClick={goToGame} style={pStyle}>
        <p style={{color: "black"}}>{name}</p><br></br>
      </div>

      {
        user ?
          gameUserId === user.id ?

            <div style={{position: "absolute", bottom: "0px"}}>

              <Button onClick={removeFavorite} variant="outlin-dark" size="sm" style={{fontSize: "8pt"}}>✘ remove</Button>

            </div>  

          :
            null
        :
          null
      } 
    </Card>
  );
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect (mapStateToProps, { removeFromFavorites })(FavoriteGame);
