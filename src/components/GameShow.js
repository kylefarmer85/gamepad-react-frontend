import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import Container from 'react-bootstrap/Container'
import { addToFavorites } from '../actions/games'
import { connect } from 'react-redux'
import ReviewsContainer from '../containers/ReviewsContainer';
import { toast } from 'react-toastify'
import styled from 'styled-components'
import crtTv from '../assets/images/crt-tv.png' 

toast.configure()

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
      <Container className="mt-4">
        <div style={{textAlign: "center"}}>
         
          <img style={{height: "50%", width: "50%", marginBottom: "15px"}} src={game.background_image} alt="game" />
 
          <h2>{game.name}</h2>
          <p>Released: {game.released}</p>
          <p>Platform(s):</p>
            {
            game.platforms.map(p => <span key={uuidv4()}>{`${p.platform.name} | ` }</span>)
            }
          <br/>

          <button className="btn-nes" onClick={handleFavorite}>Add to Favorites</button>
        </div>

        <div className="m-4" style={{textAlign: "center"}}>
          { 
          game.clip ? 
            <CrtTvDiv className="align-items-center"> 
              <GameClip src={game.clip.clip} type="video/mp4" controls/>
            </CrtTvDiv> 
          :
            null 
          }
      
          <GameDesc >{game.description_raw}</GameDesc>

          { 
            screenshots ?
            screenshots.map(ss => <SsImg src={ss.image}  alt='screenshot' key={uuidv4()}></SsImg>)
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

const GameDesc = styled.p`
  text-align: left;
  margin-top: 20px;
  padding: 15px;
  border: 4px solid white;
  font-size: 10pt;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  @media (max-width: 600px) {
    font-size: 8pt;
  }
`

const SsImg = styled.img`
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

const CrtTvDiv = styled.div`
  margin: auto;
  background-image: url(${crtTv});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 600px;
  height: 400px;

  @media (max-width: 775px) {
    width: 300px;
    height: 200px;
  }

  @media (max-width: 400px) {
    width: 200px;
    height: 140px
  }
`

const GameClip = styled.video`
  width: 430px;
  height: 340px;
  position: relative;
  top: 26px;
  right: 57px;

  @media (max-width: 775px) {
    width: 215px;
    height: 170px;
    top: 13px;
    right: 28.5px;
  }

  @media (max-width: 400px) {
    width: 150.5px;
    height: 119px;
    top: 9.1px;
    right: 20px;
  }
`




export default connect (mapStateToProps, { addToFavorites })(GameShow)



