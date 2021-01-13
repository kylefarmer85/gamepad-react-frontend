const commentsReducer = (state = [], action) => {

  switch(action.type) {

    //Only used for comments on the profile page

    case 'ADD_FETCHED_COMMENTS':
      return action.comments
      

    case 'ADD_COMMENT':
      return [...state, action.comment]


    case 'DELETE_COMMENT':
      const updatedComments = state.filter(comment => comment.id !== action.data.id)

      return updatedComments


    case 'LOGOUT_USER':
      return []      

    default: 
    return state
  }
}

export default commentsReducer