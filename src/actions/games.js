export function addToFavorites(gameApiId, gameName, gameImage, user) {
  return(dispatch) => {

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: user.id,
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
        alert(`${game.name} added to ${user.username}'s Favorites!`)
      }
    })
  }
}