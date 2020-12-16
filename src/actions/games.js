
export function addToFavorites(gameApiId, gameName, gameImage) {
  return(dispatch, getState) => {
    const state = getState()
    
    const alreadyFavorite = state.games.find(g => g.game_api_id === gameApiId)

    if (alreadyFavorite) {
      return alert(`This game is already in ${state.user.username}'s collection!`)
    }

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: state.user.id,
        game_api_id: gameApiId,
        game_name: gameName,
        game_image: gameImage
      })
    }

    fetch("http://localhost:3000/api/v1/games/favorites", reqObj)
    .then(resp => resp.json())
    .then(game => {
      console.log(game)
      if (game.error) {
        alert(game.error)

      } else {
        dispatch({ type: "ADD_GAME", game})
        alert(`${game.name} added to ${state.user.username}'s Favorites!`)
      }
    })
  }
}