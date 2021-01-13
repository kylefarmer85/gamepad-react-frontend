import { toast } from 'react-toastify'
import API from '../API'


export function deleteReview(id) {
  return(dispatch) => {

    fetch(`${API}/api/v1/reviews/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        dispatch({ type: "DELETE_REVIEW", data})
        toast.info("Review Deleted!", {position: "bottom-center", autoClose:3000})
      }
    })
  }
}

export const addReview = review => {
  return {
    type: 'ADD_REVIEW',
    review
  }
}

export const addReviews = reviews => {
  return {
    type: 'ADD_REVIEWS',
    reviews
  }
}

export const addFetchedReviews = reviews => {
  return {
    type: 'ADD_FETCHED_REVIEWS',
    reviews
  }
}

export const emptyReviews = () => {
  return {
    type: "EMPTY_REVIEWS"
  }
}