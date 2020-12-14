import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import Container from 'react-bootstrap/Container'


const GameShow = ({game, screenshots}) => {

    return (
      <Container>
        <div style={{textAlign: "center"}}>
          <h1>{game.name}</h1>
          <p>Released: {game.released}</p>
          <p>Platform(s):</p>
            {
            game.platforms.map(p => <span key={uuidv4()}>{`${p.platform.name} | ` }</span>)
            }
            <br>
            </br>
             <button>Add to Favorites</button>
        </div>
       
      
          { 
          game.clip === null ? null :
          <video src={game.clip.clip} type="video/mp4" controls/>
          }
     
          <p id="details">{game.description_raw}</p>
   
        {/* <img src={game.background_image} alt='game'/>
  
        <img src= {game.background_image_additional} alt='game'/> */}

        
        {
          screenshots.map(ss => <img src={ss.image} alt='screenshot' key={uuidv4()}></img>)
        }
      
        </Container>
    ); 
}

export default GameShow;



