import axios from 'axios';
import { toast } from 'react-toastify';
import API from '../API';

export function deleteReview(id) {
  return dispatch => {
    fetch(`${API}/api/v1/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          dispatch({ type: 'DELETE_REVIEW', data });
          toast.info('Review Deleted!', {
            position: 'bottom-center',
            autoClose: 3000
          });
        }
      });
  };
}

export const addReview = reviewObj => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`${API}/api/v1/reviews`, reviewObj);

      dispatch({ type: 'ADD_REVIEW', data });

      toast.success('Review posted!', {
        position: 'bottom-center',
        autoClose: 3000
      });
    } catch (error) {
      toast.error(`Review NOT posted, ${error}`, {
        position: 'bottom-center',
        autoClose: 3000
      });
    }
  };
};

export const addReviews = reviews => {
  return {
    type: 'ADD_REVIEWS',
    reviews
  };
};

export const addFetchedReviews = reviews => {
  return {
    type: 'ADD_FETCHED_REVIEWS',
    reviews
  };
};

export const emptyReviews = () => {
  return {
    type: 'EMPTY_REVIEWS'
  };
};
