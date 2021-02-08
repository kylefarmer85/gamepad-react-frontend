import React from 'react';
import FavoriteGame from './FavoriteGame';

const FavoritesContainer = props => {
  const renderFavorites = props.slicedFavorites.map(game => {
    return (
      <FavoriteGame
        {...game}
        gameUserId={props.gameUserId}
        removeFavoriteFromProfile={props.removeFavoriteFromProfile}
        key={game.id}
      />
    );
  });
  return renderFavorites;
};

export default FavoritesContainer;
