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

export const addReview = review => {
  return {
    type: 'ADD_REVIEW',
    review
  }
}