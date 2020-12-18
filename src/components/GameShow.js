import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import Container from 'react-bootstrap/Container'
import { addToFavorites } from '../actions/games'
import { connect } from 'react-redux'
import ReviewsContainer from '../containers/ReviewsContainer';
import Button from 'react-bootstrap/button'
import { toast } from 'react-toastify'


toast.configure()

const GameShow = ({game, screenshots, addToFavorites, user, games}) => {

  const handleFavorite = () => {
    
    if (!user) {
      return  toast.error("You must be logged in to add favorites", {position: "top-center", autoClose: 3000})
    } 

    const alreadyFavorite = games.find(g => g.game_api_id === game.id)

    if (alreadyFavorite) {
        return toast.info(`This game is already in ${user.username}'s collection!`, {position: "top-center", autoClose: 3000})
      } else {
      addToFavorites(game.id, game.name, game.background_image, user)
    }
  }


    return (
      <Container className="mt-5 ">
        {/* needs styling */}
        
        <div style={{textAlign: "center"}}>
          <img style={{height: "50%", width: "50%"}} src={game.background_image} alt="game" />
          <h1>{game.name}</h1>
          <p>Released: {game.released}</p>
          <p>Platform(s):</p>
            {
            game.platforms.map(p => <span key={uuidv4()}>{`${p.platform.name} | ` }</span>)
            }
            <br>
            </br>
            <Button onClick={handleFavorite}>Add to Favorites</Button>
        </div>
       <div style={{textAlign: "center"}}>
    
        { 
        game.clip === null ? null :
        <video src={game.clip.clip} type="video/mp4" controls/>
        }
    
        <p id="details">{game.description_raw}</p>
  
        {/* <img src={game.background_image} alt='game'/>
  
        <img src= {game.background_image_additional} alt='game'/> */}

        { 
          screenshots ?
          screenshots.map(ss => <img src={ss.image} style={{height: "20em", width: "20em"}} alt='screenshot' key={uuidv4()}></img>)
          :
          null
        }
        </div>
        <ReviewsContainer gameApiId={game.id} gameName={game.name} gameImage={game.background_image} />
  
      </Container >
    ); 
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    games: state.games
  }
}

export default connect (mapStateToProps, { addToFavorites })(GameShow)



