import { toast } from 'react-toastify';
import API from '../API';

export function followUser(followedUserId, followerId) {
  return (dispatch) => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        followed_user_id: followedUserId,
        follower_id: followerId,
      }),
    };

    fetch(`${API}/api/v1/users/following`, reqObj)
      .then((resp) => resp.json())
      .then((followedUser) => {

        if (followedUser.error) {
          toast.error(followedUser.error, {
            position: 'top-center',
            autoClose: false,
          });

        } else {
          dispatch({ type: 'ADD_FOLLOWING', followedUser });
          
          toast.success(`You are now following ${followedUser.username}!`, {
            position: 'bottom-center',
            autoClose: 3000,
          });
        }
      });
  };
}

export function unfollowUser(followedUserId, followerId) {
  return (dispatch) => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        followed_user_id: followedUserId,
        follower_id: followerId,
      }),
    };

    fetch(`${API}/api/v1/users/unfollow`, reqObj)
      .then((resp) => resp.json())
      .then((unfollowedUser) => {

        dispatch({ type: 'REMOVE_FOLLOWING', unfollowedUser });

        toast.info(`You have unfollowed ${unfollowedUser.username}!`, {
          position: 'bottom-center',
          autoClose: 3000,
        });
      });
  };
}
