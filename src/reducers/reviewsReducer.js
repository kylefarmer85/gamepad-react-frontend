const reviewsReducer = (state = [], action) => {

  switch(action.type) {

    case 'LOGIN_USER':
      return action.data.reviews

    case 'ADD_REVIEW':
      return [...state, action.review]

    case 'DELETE_REVIEW':
      const updatedReviews = state.filter(review => review.id !== action.data.id)

      return updatedReviews

    case 'ADD_REVIEW':
      return [...state, action.data]
      
    default: 
    return state
  }
}

export default reviewsReducer