import { toast } from 'react-toastify';
import API from '../API';

export function deleteComment(id) {
  return (dispatch) => {
    fetch(`${API}/api/v1/comments/${id}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((data) => {

        if (data.error) {
          alert(data.error);

        } else {
          dispatch({ type: 'DELETE_COMMENT', data });
          
          toast.info('Comment Deleted!', {
            position: 'bottom-center',
            autoClose: 3000,
          });
        }
      });
  };
}

export const addComment = (comment) => {
  return {
    type: 'ADD_COMMENT',
    comment,
  };
};

export const addFetchedComments = (comments) => {
  return {
    type: 'ADD_FETCHED_COMMENTS',
    comments,
  };
};

export const addUserCommentToOwnProfile = (comment) => {
  return {
    type: 'ADD_USER_COMMENT_TO_OWN_PROFILE',
    comment,
  };
};