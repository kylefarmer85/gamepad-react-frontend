const reviewsReducer = (state = [], action) => {

  switch(action.type) {

    case 'LOGIN_USER':
      return action.data.reviews

    case 'ADD_REVIEW':
      return [...state, action.data]

    case 'DELETE_REVIEW':
      const updatedReviews = state.filter(review => review.id !== action.data.id)

      return updatedReviews

    default: 
    return state
  }
}

export default reviewsReducer