
export function addToFavorites(gameApiId) {
  return(dispatch) => {
    dispatch({type: 'START_ADDING_USER_REQUEST'})

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        game_api_id: gameApiId
      })
    }

    fetch("http://localhost:3000/api/v1/auth", reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        history.push('/login')
        alert(data.error)

      } else {
        dispatch({ type: "LOGIN_USER", data})
        localStorage.setItem('my_app_token', data.token)
      }
    })
  }
}