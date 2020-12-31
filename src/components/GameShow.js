import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import Container from 'react-bootstrap/Container'
import { addToFavorites } from '../actions/games'
import { connect } from 'react-redux'
import ReviewsContainer from '../containers/ReviewsContainer';
import { toast } from 'react-toastify'
import styled from 'styled-components'
import crtTv from '../assets/images/crt-tv.png' 


const GameShow = ({game, screenshots, addToFavorites, user, games}) => {

  const handleFavorite = () => {
    if (!user) {
      return  toast.error("You must be logged in to add favorites", {position: "bottom-center", autoClose: 3000})
    } 

    const alreadyFavorite = games.find(g => g.game_api_id === game.id)
    if (alreadyFavorite) {
        return toast.info(`This game is already in ${user.username}'s collection!`, {position: "bottom-center", autoClose: 3000})
      } else {
      addToFavorites(game.id, game.name, game.background_image, user)
    }
  }


    return (
      <Container className="mt-5">
        {/* needs styling */}
        
        <div style={{textAlign: "center"}}>
         
          <img style={{height: "50%", width: "50%"}} src={game.background_image} alt="game" />
 
          <h2>{game.name}</h2>
          <p>Released: {game.released}</p>
          <p>Platform(s):</p>
            {
            game.platforms.map(p => <span key={uuidv4()}>{`${p.platform.name} | ` }</span>)
            }
          <br>
          </br>
          <button className="btn-nes" onClick={handleFavorite}>Add to Favorites</button>
        </div>

        <div className="m-4" style={{textAlign: "center"}}>
          { 
          game.clip ? 
            <div className="align-items-center" style={crtTvDiv}> 
              <video style={videoStyle} src={game.clip.clip} type="video/mp4" controls/>
            </div> 
          :
            null 
          }
      
          <p style={gameDesStyle} >{game.description_raw}</p>

          { 
            screenshots ?
            screenshots.map(ss => <TvImg src={ss.image}  alt='screenshot' key={uuidv4()}></TvImg>)
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

const gameDesStyle = {
  textAlign: "left",
  marginTop: "20px",
  padding: "15px",
  border: "4px solid white",
  fontSize: "10pt"
}

const TvImg = styled.img`
  width: 400px;
  height: 350px;
  margin: 20px;
  border-radius: 50% / 20%;
  border: 3px solid white;

  @media (max-width: 600px) {
    width: 75%;
    height: 60%;
  }
`

const crtTvDiv = {
  margin: "auto",
  backgroundImage: `url(${crtTv})`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  width: "600px",
  height: "400px",
  
}

const videoStyle = {
  width: "400px",
  height: "300px",
  position: "relative",
  top: "50px",
  right: "60px"
}




export default connect (mapStateToProps, { addToFavorites })(GameShow)



