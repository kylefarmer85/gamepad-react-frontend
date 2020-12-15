export function deleteReview(id) {
  return(dispatch) => {

    fetch(`http://localhost:3000/api/v1/reviews/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        dispatch({ type: "DELETE_REVIEW", data})
      }
    })
  }
}

export function addReview(review, userId, username) {
  return(dispatch) => {

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
        username: username,
        content: review.content,
        rating: review.rating,
        game_name: review.gameName,
        game_api_id: review.gameApiId,
        game_image: review.gameImage
      })
    }

    fetch(`http://localhost:3000/api/v1/reviews`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        dispatch({ type: "ADD_REVIEW", data})
      }
    })
  }
}