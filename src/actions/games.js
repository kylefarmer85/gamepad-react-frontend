import { toast } from 'react-toastify'

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
        toast.error(game.error, {position: "top-center", autoClose: false})

      } else {
        dispatch({ type: "ADD_GAME", game})
        toast.success(`${game.name} added to ${user.username}'s Favorites!`, {position: "top-center", autoClose:3000})
      }
    })
  }
}

export function removeFromFavorites(id, user, name) {
  return (dispatch) => {

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: user.id,
        game_id: id,
      })
    }

    fetch(`http://localhost:3000/api/v1/favorites/remove`, reqObj)

    .then(resp => resp.json())
    .then(favorite => {
      console.log(favorite)
      if (favorite.error) {
        toast.error(favorite.error, {position: "top-center", autoClose: false})

      } else {
        dispatch({ type: "REMOVE_GAME", id})
        toast.info(`${name} removed from ${user.username}'s Favorites`, {position: "top-right", autoClose:3000})
      }
    })
  }
}