import React from 'react';
import SlicedGame from '../components/SlicedGame'

const SlicedGamesContainer = (props) => {

  const renderGames = props.slicedGames.map(game => {
    return <SlicedGame {...game} key={game.id} />
  })

  return (
    renderGames 
  );
}

export default SlicedGamesContainer;
