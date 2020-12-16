import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import Container from 'react-bootstrap/Container'
import { addToFavorites } from '../actions/games'
import { connect } from 'react-redux'
import ReviewsContainer from '../containers/ReviewsContainer';


const GameShow = ({game, screenshots, addToFavorites, user}) => {

  const handleFavorite = () => {
    !user ?
      alert ("You must be logged in to add favorites")
    :
      addToFavorites(game.id, game.name, game.background_image)
  }

    return (
      <Container>
        {/* needs styling */}
        <div style={{textAlign: "center"}}>
          <h1>{game.name}</h1>
          <p>Released: {game.released}</p>
          <p>Platform(s):</p>
            {
            game.platforms.map(p => <span key={uuidv4()}>{`${p.platform.name} | ` }</span>)
            }
            <br>
            </br>
            <button onClick={handleFavorite}>Add to Favorites</button>
        </div>
       
    
        { 
        game.clip === null ? null :
        <video src={game.clip.clip} type="video/mp4" controls/>
        }
    
        <p id="details">{game.description_raw}</p>
  
        {/* <img src={game.background_image} alt='game'/>
  
        <img src= {game.background_image_additional} alt='game'/> */}

        { 
          screenshots ?
          screenshots.map(ss => <img src={ss.image} alt='screenshot' key={uuidv4()}></img>)
          :
          null
        }
        <ReviewsContainer gameApiId={game.id} gameName={game.name} gameImage={game.background_image} />
      </Container >
    ); 
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect (mapStateToProps, { addToFavorites })(GameShow)



