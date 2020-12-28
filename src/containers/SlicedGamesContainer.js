import React from 'react';
import SlicedGame from '../components/SlicedGame'

const SlicedGamesContainer = (props) => {

  const renderGames = props.slicedGames.map(game => {

    // game image is named "image" in rails db, and named "background_image" in the other fetches that get games from rawg api

    return game.background_image ?
      <SlicedGame {...game} key={game.id} />
      :
      <SlicedGame name={game.name} background_image={game.image} id={game.game_api_id} key={game.id} />   
  })

  return (
    renderGames 
  );
}

export default SlicedGamesContainer;
