import history from '../history'

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}

export const currentUser = (data) => {
  return {
    type: 'CURRENT_USER',
    data
  }
}

export function fetchUser(userObj) {
  return(dispatch) => {
    dispatch({type: 'START_ADDING_USER_REQUEST'})

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userObj.username,
        password: userObj.password
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
        console.log(data)
        history.push('/home')
      }
    })
  }
}


export function signupUser(userObj) {
  return(dispatch) => {
    dispatch({type: 'START_ADDING_USER_REQUEST'})

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userObj.username,
        password: userObj.password,
        password_confirmation: userObj.passwordConfirmation,
        email: userObj.email,
        pic: userObj.pic,
        fav_genre: userObj.favGenre,
        fav_game: userObj.favGame
      })
    }

    fetch("http://localhost:3000/api/v1/users", reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        history.push('/signup')
        alert(data.error)

      } else {
      dispatch({ type: "LOGIN_USER", data})
      localStorage.setItem('my_app_token', data.token)
      console.log(data)
      history.push('/home')
      }
    })
  }
}

export function updateUser(userObj) {
  return(dispatch) => {
    // dispatch({type: 'START_ADDING_USER_REQUEST'})

    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userObj.username,
        password: userObj.password,
        password_confirmation: userObj.passwordConfirmation,
        email: userObj.email,
        pic: userObj.pic,
        fav_genre: userObj.favGenre,
        fav_game: userObj.favGame
      })
    }

    fetch(`http://localhost:3000/api/v1/users/${userObj.id}`, reqObj)
    .then(resp => resp.json())
    .then(console.log)
    //   if (data.error) {
    //     history.push(`/user/${userObj.id}/profile`)
    //     alert(data.error)

    //   } else {
    //   dispatch({ type: "UPDATE_USER", data})
    //   history.push(`/user/${userObj.id}/profile`)
    //   }
    // })
  }
}