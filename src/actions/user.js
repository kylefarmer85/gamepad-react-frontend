import history from '../history'
import { toast } from  'react-toastify'

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
        toast.error(data.error, {position: "top-center", autoClose: 5000})

        history.push('/login')

      } else {
        dispatch({ type: "LOGIN_USER", data})
        localStorage.setItem('my_app_token', data.token)

        toast.success(`Welcome ${data.user.username}!`, {position: 'bottom-center', autoClose: 3000})

        console.log(data)
        history.push('/')
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
        toast.error(data.error, {position: 'top-center', autoClose: 3000})

        history.push('/signup')

      } else {
      dispatch({ type: "LOGIN_USER", data})
      localStorage.setItem('my_app_token', data.token)
      console.log(data)
      toast.success(`Welcome ${data.user.username}!`, {position: 'bottom-center', autoClose: 3000})
      history.push('/')
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
    .then(data => {
      if (data.error) {
        toast.error(data.error, {position: "top-center", autoClose: 5000})

        history.push(`/users/${userObj.id}/profile`)


      } else {
        toast.info(`${userObj.username}'s info was updated!`, {position: "bottom-center", autoClose: 3000})

        dispatch({ type: "UPDATE_USER", data})
        history.push(`/users/${userObj.id}/profile`)
      }
    })
  }
}