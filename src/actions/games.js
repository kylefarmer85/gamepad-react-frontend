import { toast } from 'react-toastify'
import API from '../API'

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

    fetch(`${API}/api/v1/games/favorites`, reqObj)
    .then(resp => resp.json())
    .then(game => {
      console.log(game)
      if (game.error) {
        toast.error(game.error, {position: "bottom-center", autoClose: false})

      } else {
        dispatch({ type: "ADD_GAME", game})
        toast.success(`${game.name} added to ${user.username}'s Favorites!`, {position: "bottom-center", autoClose:3000})
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

    fetch(`${API}/api/v1/favorites/remove`, reqObj)

    .then(resp => resp.json())
    .then(favorite => {
      console.log(favorite)
      if (favorite.error) {
        toast.error(favorite.error, {position: "bottom-center", autoClose: false})

      } else {
        dispatch({ type: "REMOVE_GAME", id})
        toast.info(`${name} removed from ${user.username}'s Favorites`, {position: "bottom-center", autoClose:3000})
      }
    })
  }
}