import React from 'react';
import SlicedGame from '../reusable/SlicedGame';

const SlicedGamesContainer = props => {
  const renderGames = props.slicedGames.map(game => {
    return game.background_image || game.background_image === null ? (
      <SlicedGame {...game} key={game.id} />
    ) : (
      <SlicedGame
        name={game.name}
        background_image={game.image}
        id={game.game_api_id}
        key={game.id}
      />
    );
  });

  return renderGames;
};

export default SlicedGamesContainer;
