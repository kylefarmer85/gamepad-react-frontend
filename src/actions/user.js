import history from '../history';
import { toast } from 'react-toastify';
import API from '../API';
import axios from 'axios';

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  };
};

export const currentUser = data => {
  return {
    type: 'CURRENT_USER',
    data
  };
};

export const startAddingUserRequest = () => {
  return {
    type: 'START_ADDING_USER_REQUEST'
  };
};

export const loginUser = (username, password) => {
  return async dispatch => {
    try {
      dispatch({ type: 'START_ADDING_USER_REQUEST' });

      const { data } = await axios.post(`${API}/api/v1/auth`, {
        username,
        password
      });

      dispatch({ type: 'LOGIN_USER', data });
      localStorage.setItem('my_app_token', data.token);

      toast.success(`Welcome ${data.user.username}!`, {
        position: 'bottom-center',
        autoClose: 3000
      });
      history.push('/');
      
    } catch (error) {
      toast.error('Invalid Username/Password', {
        position: 'top-center',
        autoClose: 3000
      });

      history.push('/login');
    }
  };
};

export function signupUser(userObj) {
  return dispatch => {
    dispatch({ type: 'START_ADDING_USER_REQUEST' });

    const formData = new FormData();

    Object.keys(userObj).forEach((key, value) => {
      return formData.append(key, userObj[key]);
    });

    const reqObj = {
      method: 'POST',
      headers: {},
      body: formData
    };

    fetch(`${API}/api/v1/users`, reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          toast.error('Unable to create user.', {
            position: 'top-center',
            autoClose: 3000
          });

          history.push('/signup');
        } else {
          dispatch({ type: 'LOGIN_USER', data });
          localStorage.setItem('my_app_token', data.token);

          toast.success(`Welcome ${data.user.username}!`, {
            position: 'bottom-center',
            autoClose: 3000
          });

          history.push('/');
        }
      });
  };
}

export function updateUser(userObj) {
  return dispatch => {
    const formData = new FormData();

    Object.keys(userObj).forEach((key, value) => {
      return formData.append(key, userObj[key]);
    });

    const reqObj = {
      method: 'PATCH',
      headers: {},
      body: formData
    };

    fetch(`${API}/api/v1/users/${userObj.id}`, reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          toast.error('User not updated', {
            position: 'top-center',
            autoClose: 5000
          });

          history.push(`/users/${userObj.id}/profile`);
        } else {
          toast.info(`${userObj.username}'s info was updated!`, {
            position: 'bottom-center',
            autoClose: 3000
          });

          dispatch({ type: 'UPDATE_USER', data });
          history.push(`/users/${userObj.id}/profile`);
        }
      });
  };
}
